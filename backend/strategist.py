import yfinance as yf
import pandas as pd

def recommend_simple(ticker: str):
    """Simple rule-based recommendation using SMA50 and SMA200."""
    try:
        tk = yf.Ticker(ticker)
        # Fetch 1 year of daily history
        hist = tk.history(period='2y', interval='1d')

        if hist is None or hist.empty:
            return None

        # PASS ONLY THE 'Close' COLUMN
        return decide_from_close_series(hist['Close'])
    except Exception as e:
        return {"error": str(e)}


def decide_from_close_series(close: pd.Series):
    # 1. Get the latest price
    latest = float(close.iloc[-1])

    # 2. Calculate the rolling series ONCE
    sma50_series = close.rolling(window=50).mean()
    sma200_series = close.rolling(window=200).mean()

    # 3. Extract the last and previous values (if enough data exists)
    if len(close) < 201:
        return {"action": "HOLD", "reason": "Not enough data for 200 SMA", "latest": latest}

    sma50 = float(sma50_series.iloc[-1])
    sma200 = float(sma200_series.iloc[-1])
    sma50_prev = float(sma50_series.iloc[-2])
    sma200_prev = float(sma200_series.iloc[-2])

    action = "HOLD"
    reason = "No clear long-term trend"

    # 4. Evaluate Crossovers (Golden/Death Cross)
    if sma50_prev <= sma200_prev and sma50 > sma200:
        action = "BUY"
        reason = "50 SMA crossed above 200 SMA (golden cross)"
    elif sma50_prev >= sma200_prev and sma50 < sma200:
        action = "SELL"
        reason = "50 SMA crossed below 200 SMA (death cross)"

    # 5. Fallback: Evaluate Trend Alignment
    if action == "HOLD":
        if latest > sma50 > sma200:
            action = "BUY"
            reason = "Price above 50 & 200 SMA (uptrend)"
        elif latest < sma50 < sma200:
            action = "SELL"
            reason = "Price below 50 & 200 SMA (downtrend)"

    return {
        "action": action,
        "reason": reason,
        "latest": round(latest, 2),
        "sma50": round(sma50, 2),
        "sma200": round(sma200, 2)
    }