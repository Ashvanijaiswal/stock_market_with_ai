import yfinance as yf
import pandas as pd

def get_chart_data(ticker: str, period: str = '3y') -> list[dict] | None:
    """Fetch historical price and return as a list of dictionaries for the frontend."""
    try:
        tk = yf.Ticker(ticker)
        hist = tk.history(period=period)

        if hist is None or hist.empty:
            return None

        # 1. Reset the index so 'Date' becomes a normal column
        hist = hist.reset_index()

        # 2. Convert complex Timestamps into simple strings (YYYY-MM-DD)
        hist['Date'] = hist['Date'].dt.strftime('%Y-%m-%d')

        # 3. Keep only the Date and Close price, and round the price to 2 decimals
        chart_df = hist[['Date', 'Close']].copy()
        chart_df = chart_df.rename(columns={'Date': 'date', 'Close': 'price'})
        chart_df['price'] = chart_df['price'].round(2)

        # 4. Convert to a list of dictionaries: [{"date": "2023-01-01", "price": 150.50}, ...]
        return chart_df.to_dict(orient='records')

    except Exception as e:
        print(f"Chart error for {ticker}: {e}")
        return None