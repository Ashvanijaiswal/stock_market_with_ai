import yfinance as yf
from typing import Any, Dict, List, Optional
import warnings
import pandas as pd
import numpy as np
import datetime


class YahooFinanceClient:
    """Lightweight wrapper around yfinance to fetch common stock data.

    Methods return a dict with keys: success (bool), data (payload) and error (str) when applicable.
    Use fetch_all() to get a quick snapshot of multiple data points for a ticker.
    """

    def __init__(self, debug: bool = False):
        self.debug = debug

    def _result(self, data: Any = None, error: Optional[str] = None) -> Dict[str, Any]:
        return {"success": error is None, "data": data, "error": error}

    def _ticker(self, symbol: str) -> yf.Ticker:
        return yf.Ticker(symbol)

    def _to_primitive(self, v):
        # Convert numpy/pandas scalars and timestamps to plain Python types
        if v is None:
            return None
        if isinstance(v, (str, bool, int, float)):
            return v
        if isinstance(v, (np.bool_, np.integer, np.floating)):
            try:
                return v.item()
            except Exception:
                return float(v)
        if isinstance(v, (np.ndarray, list, tuple)):
            return [self._to_primitive(x) for x in list(v)]
        if isinstance(v, (pd.Timestamp, datetime.datetime)):
            try:
                return v.isoformat()
            except Exception:
                return str(v)
        if isinstance(v, (pd.Timedelta, datetime.timedelta)):
            return str(v)
        # pandas Period, NaT, etc
        if pd.isna(v):
            return None
        # fallback to string
        try:
            return str(v)
        except Exception:
            return None

    def _df_to_dict_safe(self, obj):
        """Normalize pandas DataFrame/Series/index/dict to JSON-serializable Python structures."""
        try:
            if obj is None:
                return {}
            # DataFrame -> list of row dicts (reset index to include index as column)
            if isinstance(obj, pd.DataFrame):
                rows = obj.reset_index().to_dict(orient='records')
                return [{k: self._to_primitive(v) for k, v in row.items()} for row in rows]
            # Series -> dict with stringified keys
            if isinstance(obj, pd.Series):
                sdict = {}
                for k, v in obj.items():
                    sdict[str(k)] = self._to_primitive(v)
                return sdict
            # If it's a dict-like (from to_dict), normalize keys and values
            if isinstance(obj, dict):
                return {str(k): self._to_primitive(v) for k, v in obj.items()}
            # For numpy arrays
            if isinstance(obj, (np.ndarray, list, tuple)):
                return [self._to_primitive(x) for x in list(obj)]
            # Fallback: try to stringify
            return self._to_primitive(obj)
        except Exception:
            try:
                return str(obj)
            except Exception:
                return None

    def get_info(self, symbol: str) -> Dict[str, Any]:
        try:
            tk = self._ticker(symbol)
            info = tk.info or {}
            return self._result(data=info)
        except Exception as e:
            return self._result(error=str(e))

    def get_earnings(self, symbol: str) -> Dict[str, Any]:
        """Try to obtain annual "Net Income" values, using income_stmt where available."""
        try:
            tk = self._ticker(symbol)
            # prefer new income_stmt API (contains 'Net Income' row), fallback to earnings
            income = None
            # suppress deprecation warnings from underlying library
            with warnings.catch_warnings():
                warnings.simplefilter('ignore')
                income = getattr(tk, 'income_stmt', None)
                if income is None or (hasattr(income, 'empty') and income.empty):
                    # try method get_income_stmt if available
                    getter = getattr(tk, 'get_income_stmt', None)
                    if callable(getter):
                        try:
                            income = getter(freq='annual')
                        except Exception:
                            income = None
                    # lastly try old earnings attribute
                    if income is None or (hasattr(income, 'empty') and income.empty):
                        income = getattr(tk, 'earnings', None)

            if income is None:
                return self._result(data=[])

            # If income is a DataFrame with rows as metrics, look for 'Net Income' or similar
            if hasattr(income, 'to_dict'):
                # attempt to extract 'Net Income' row from income_stmt
                try:
                    # income may have index with metric names
                    if 'Net Income' in income.index:
                        row = income.loc['Net Income']
                        return self._result(data=self._df_to_dict_safe(row))
                    # sometimes named 'Net Income (Loss)' or variations
                    for candidate in ['Net Income (Loss)', 'Net Income', 'NetIncome', 'Net Income Loss']:
                        if candidate in income.index:
                            row = income.loc[candidate]
                            return self._result(data=self._df_to_dict_safe(row))
                    # fallback: return whole income frame
                    return self._result(data=self._df_to_dict_safe(income))
                except Exception:
                    return self._result(data=self._df_to_dict_safe(income))

            # fallback non-dataframe
            return self._result(data=str(income))
        except Exception as e:
            return self._result(error=str(e))

    def get_financials(self, symbol: str) -> Dict[str, Any]:
        try:
            tk = self._ticker(symbol)
            fin = tk.financials
            data = self._df_to_dict_safe(fin) if fin is not None else {}
            return self._result(data=data)
        except Exception as e:
            return self._result(error=str(e))

    def get_balance_sheet(self, symbol: str) -> Dict[str, Any]:
        try:
            tk = self._ticker(symbol)
            bs = tk.balancesheet
            data = self._df_to_dict_safe(bs) if bs is not None else {}
            return self._result(data=data)
        except Exception as e:
            return self._result(error=str(e))

    def get_cashflow(self, symbol: str) -> Dict[str, Any]:
        try:
            tk = self._ticker(symbol)
            cf = tk.cashflow
            data = self._df_to_dict_safe(cf) if cf is not None else {}
            return self._result(data=data)
        except Exception as e:
            return self._result(error=str(e))

    def get_dividends(self, symbol: str, period: str = "1y") -> Dict[str, Any]:
        try:
            tk = self._ticker(symbol)
            div = tk.dividends
            data = self._df_to_dict_safe(div) if div is not None else {}
            return self._result(data=data)
        except Exception as e:
            return self._result(error=str(e))

    def get_history(self, symbol: str, period: str = "1y", interval: str = "1d") -> Dict[str, Any]:
        try:
            tk = self._ticker(symbol)
            hist = tk.history(period=period, interval=interval)
            data = hist.reset_index().to_dict(orient='records') if hist is not None and not hist.empty else []
            return self._result(data=data)
        except Exception as e:
            return self._result(error=str(e))

    def fetch_all(self, symbol: str, history_period: str = "1y", history_interval: str = "1d") -> Dict[str, Any]:
        """Return a consolidated snapshot for quick inspection: info, earnings, financials and history."""
        try:
            tk = self._ticker(symbol)
            # suppress deprecation warnings during fetch
            with warnings.catch_warnings():
                warnings.simplefilter('ignore')
                info = tk.info or {}
                # try income_stmt first
                income = getattr(tk, 'income_stmt', None)
                if income is None or (hasattr(income, 'empty') and income.empty):
                    getter = getattr(tk, 'get_income_stmt', None)
                    if callable(getter):
                        try:
                            income = getter(freq='annual')
                        except Exception:
                            income = None
                    if income is None or (hasattr(income, 'empty') and income.empty):
                        income = getattr(tk, 'earnings', None)

                financials = tk.financials
                balancesheet = tk.balancesheet
                cashflow = tk.cashflow
                hist = tk.history(period=history_period, interval=history_interval)

            payload: Dict[str, Any] = {
                "symbol": symbol,
                "info": info,
                "earnings": self._df_to_dict_safe(income) if income is not None else [],
                "financials": self._df_to_dict_safe(financials) if financials is not None else {},
                "balancesheet": self._df_to_dict_safe(balancesheet) if balancesheet is not None else {},
                "cashflow": self._df_to_dict_safe(cashflow) if cashflow is not None else {},
                "history": hist.reset_index().to_dict(orient='records') if hist is not None and not hist.empty else [],
            }
            return self._result(data=payload)
        except Exception as e:
            return self._result(error=str(e))


# Add a small CLI/demo so running this file prints a quick snapshot for a ticker
if __name__ == '__main__':
    import sys
    import json

    sym = sys.argv[1] if len(sys.argv) > 1 else 'AAPL'
    client = YahooFinanceClient()
    res = client.fetch_all(sym)
    try:
        print(json.dumps(res, indent=2, default=str))
    except Exception as e:
        # fallback printing to avoid crashing due to unexpected objects
        print('FAILED_TO_SERIALIZE_JSON:', str(e))
        try:
            # attempt to print minimal info
            if isinstance(res, dict) and 'error' in res and res['error']:
                print('error:', res['error'])
            else:
                print('res repr:', repr(res))
        except Exception:
            print('Unexpected print failure')
