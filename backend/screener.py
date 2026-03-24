import yfinance as yf
from typing import List, Optional, Dict, Any


def compute_cagr(values: List[float]) -> Optional[float]:
    if not values or len(values) < 2:
        return None
    start, end = values[0], values[-1]
    n = len(values) - 1
    try:
        if start <= 0 or end <= 0:
            return None
    except Exception:
        return None
    return (end / start) ** (1.0 / n) - 1.0


class Screener:
    """Minimal screener that uses yfinance .earnings (yearly earnings) as a net-income proxy.
    For each ticker it returns CAGR over the requested number of years if available.
    This version also returns diagnostics explaining why a ticker was skipped.
    """

    def __init__(self):
        pass

    def get_annual_net_income(self, ticker: str) -> List[float]:
            tk = yf.Ticker(ticker)
            # Use the modern income_stmt instead of the broken .earnings
            df = tk.income_stmt

            if df is None or df.empty:
                return []

            try:
                # Grab the 'Net Income' row
                net_income_series = df.loc['Net Income'].dropna()

                # yfinance returns newest dates first. We need to sort oldest -> newest for CAGR math
                net_income_series = net_income_series.sort_index()

                return net_income_series.tolist()
            except KeyError:
                # If the company doesn't have a 'Net Income' row, skip it
                return []

    def screen(self, tickers: List[str], min_cagr_pct: float = 8.0, years: int = 10) -> Dict[str, Any]:
        matches = []
        diagnostics = []
        for t in tickers:
            diag: Dict[str, Any] = {'ticker': t}
            try:
                vals = self.get_annual_net_income(t)
                diag['earnings_list'] = vals
                diag['years_available'] = len(vals)
                if not vals:
                    diag['reason'] = 'no_earnings'
                    diagnostics.append(diag)
                    continue

                # choose subset: last `years` if available, else all available
                subset = vals[-years:] if len(vals) >= years else vals
                diag['years_used'] = len(subset)

                if len(subset) < 2:
                    # need at least two points to compute CAGR
                    diag['reason'] = 'insufficient_years'
                    diagnostics.append(diag)
                    continue

                cagr = compute_cagr(subset)
                diag['computed_cagr'] = None if cagr is None else round(cagr * 100, 4)

                if cagr is None:
                    diag['reason'] = 'invalid_values_for_cagr'
                    diagnostics.append(diag)
                    continue

                if (cagr * 100) >= min_cagr_pct:
                    matches.append({
                        'ticker': t,
                        'cagr_pct': round(cagr * 100, 2),
                        'years_used': len(subset),
                    })
                    diag['reason'] = 'match'
                    diagnostics.append(diag)
                else:
                    diag['reason'] = 'cagr_below_threshold'
                    diagnostics.append(diag)
            except Exception as e:
                diag['reason'] = 'error'
                diag['error'] = str(e)
                diagnostics.append(diag)
                continue
        return {'matches': matches, 'diagnostics': diagnostics}
