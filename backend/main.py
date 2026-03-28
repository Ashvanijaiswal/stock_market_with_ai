from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import uvicorn
from ai_agent import run_ai_analysis
from screener import Screener
from visualizer import get_chart_data
from strategist import recommend_simple
from tracker import track, list_events
from yf_client import YahooFinanceClient
import yfinance as yf_lib
import json
import os

app = FastAPI(title="Stock Screener MVP")
# https://stock-market-with-ai.onrender.com/
# Allow all origins for MVP (adjust in production)

origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "https://stock-market-with-ai.vercel.app",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # For LOCAL TESTING, change this to ["*"] temporarily
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

screener = Screener()
yf = YahooFinanceClient()

class ScreenerRequest(BaseModel):
    tickers: list[str]
    min_cagr_pct: float = 8.0
    years: int = 10

class RecommendRequest(BaseModel):
    ticker: str

class TrackEvent(BaseModel):
    user_id: str
    event_type: str
    payload: dict

@app.post("/screener")
def run_screener(req: ScreenerRequest):
    # screener.screen now returns {'matches': [...], 'diagnostics': [...]}
    res = screener.screen(req.tickers, req.min_cagr_pct, req.years)
    return res

@app.get("/chart/{ticker}")
def get_chart(ticker: str, period: str = "1y"):
    chart_data = get_chart_data(ticker, period=period)
    if chart_data is None:
        raise HTTPException(status_code=404, detail="No chart data")
    return {"data": chart_data}

@app.post("/recommend")
def recommend(req: RecommendRequest):
    res = recommend_simple(req.ticker)
    if res is None:
        raise HTTPException(status_code=404, detail="No data for ticker")
    return res

@app.post("/track")
def track_event(ev: TrackEvent):
    track(ev.user_id, ev.event_type, ev.payload)
    return {"status": "ok"}

@app.get("/events")
def events(limit: int = 50):
    return {"events": list_events(limit)}

# New: inspect endpoint to fetch consolidated yfinance data for debugging/inspection
@app.get('/inspect/{symbol}')
def inspect_symbol(symbol: str):
    res = yf.fetch_all(symbol)
    if not res.get('success'):
        raise HTTPException(status_code=500, detail=res.get('error') or 'failed to fetch')
    return res['data']


class ChatRequest(BaseModel):
    query: str

@app.post("/chat")
def chat_with_agent(req: ChatRequest):
    try:
        # Pass the user's text to the CrewAI setup
        answer = run_ai_analysis(req.query)
        return {"response": answer}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/stock-summary/{ticker}")
def get_stock_summary(ticker: str):
    try:
        # Use yf_lib (the real library) instead of your custom 'yf' object
        tk = yf_lib.Ticker(ticker)
        info = tk.info

        # Adding a print here so you can see it working in your terminal
        print(f"Fetching data for: {ticker}")

        return {
            "ticker": ticker,
            "price": info.get("currentPrice") or info.get("regularMarketPrice"),
            "pe": info.get("forwardPE"),
            "eps": info.get("trailingEps"),
            "marketCap": info.get("marketCap"),
            "revenueGrowth": info.get("revenueGrowth"),
            "profitMargins": info.get("profitMargins"),
            "dividendYield": info.get("dividendYield", 0)
        }
    except Exception as e:
        print(f"Summary Error: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/top-trending/{market}")
def get_trending_stocks(market: str):
    try:
        # This points EXACTLY to the folder where main.py is located
        base_dir = os.path.dirname(os.path.abspath(__file__))
        file_path = os.path.join(base_dir, "trending_stocks.json")

        print(f"DEBUG: Looking for file at: {file_path}") # CHECK YOUR TERMINAL FOR THIS

        with open(file_path, "r") as f:
            data = json.load(f)

        symbols = data.get(market.upper(), [])
        return {"stocks": symbols}
    except Exception as e:
        print(f"ERROR: {str(e)}")
        return {"stocks": []}

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
