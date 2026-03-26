import os
import yfinance as yf
from dotenv import load_dotenv
from crewai import Agent, Task, Crew, Process
# CHANGE THIS LINE:
from crewai.tools import tool
from langchain_google_genai import ChatGoogleGenerativeAI
import requests
import xml.etree.ElementTree as ET
# Import your existing logic
from strategist import recommend_simple

# Load the API keys
load_dotenv()

# ==========================================
# TOOL 1: Technical Math (The Logic)
# ==========================================
@tool("SMA Strategy Analyzer")
def sma_strategy_tool(ticker: str) -> str:
    """
    Useful for analyzing a stock's long-term trend.
    Pass in a stock ticker symbol (e.g., 'AAPL' or 'RELIANCE.NS').
    It returns a BUY, SELL, or HOLD recommendation based on 50-day and 200-day moving averages.
    """
    try:
        result_dict = recommend_simple(ticker)
        if result_dict is None or "error" in result_dict:
            return f"Error: Could not analyze {ticker}. Make sure the ticker is correct."

        return (f"Action: {result_dict['action']} | "
                f"Reason: {result_dict['reason']} | "
                f"Current Price: ${result_dict['latest']}")
    except Exception as e:
        return f"Tool error: {str(e)}"

# ==========================================
# TOOL 2: News Sentiment (The Hype) - UPDATED!
# ==========================================
@tool("News Sentiment Analyzer")
def news_sentiment_tool(ticker: str) -> str:
    """
    Fetches the absolute latest news headlines for a given stock ticker using Yahoo's raw RSS feed.
    Always use this tool to understand the current real-world events affecting the company.
    """
    try:
        # We bypass the buggy yfinance library and hit the raw RSS feed directly
        url = f"https://feeds.finance.yahoo.com/rss/2.0/headline?s={ticker}&region=US&lang=en-US"

        # Yahoo sometimes blocks default Python requests, so we pretend to be a web browser
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
        response = requests.get(url, headers=headers)

        if response.status_code != 200:
            return f"Error: Could not connect to news feed for {ticker}."

        # Parse the raw XML data
        root = ET.fromstring(response.content)
        items = root.findall('./channel/item')

        if not items:
            return f"No recent news found for {ticker}."

        # Extract the top 5 most recent headlines and their exact publication dates
        headlines = []
        for item in items[:5]:
            title = item.find('title').text
            pub_date = item.find('pubDate').text
            # Clean up the date string slightly for the AI
            clean_date = pub_date.replace(" +0000", "")
            headlines.append(f"- {title} (Published: {clean_date})")

        return "Latest Headlines:\n" + "\n".join(headlines)

    except Exception as e:
        return f"Error fetching news: {str(e)}"


# ==========================================
# TOOL 3: Fundamental Health (The Engine)
# ==========================================
@tool("Fundamental Health Checker")
def fundamental_health_tool(ticker: str) -> str:
    """
    Fetches core financial metrics for a company like P/E ratio, EPS, and Revenue Growth.
    Use this to determine if the company's business is actually growing and profitable.
    """
    try:
        tk = yf.Ticker(ticker)
        info = tk.info

        # Safely extract metrics (using .get() so it doesn't crash if data is missing)
        pe_ratio = info.get('forwardPE', 'N/A')
        eps = info.get('trailingEps', 'N/A')
        rev_growth = info.get('revenueGrowth', 'N/A')
        profit_margin = info.get('profitMargins', 'N/A')

        # Format percentages nicely if they exist
        if rev_growth != 'N/A' and isinstance(rev_growth, (int, float)):
            rev_growth = f"{round(rev_growth * 100, 2)}%"
        if profit_margin != 'N/A' and isinstance(profit_margin, (int, float)):
            profit_margin = f"{round(profit_margin * 100, 2)}%"

        return (f"Fundamental Data for {ticker}:\n"
                f"- Forward P/E Ratio: {pe_ratio}\n"
                f"- Earnings Per Share (EPS): {eps}\n"
                f"- Revenue Growth (YoY): {rev_growth}\n"
                f"- Profit Margin: {profit_margin}")
    except Exception as e:
        return f"Error fetching fundamentals: {str(e)}"


# ==========================================
# TOOL 4: Insider Trading (The Hidden Signal)
# ==========================================
@tool("Insider Trading Tracker")
def insider_trading_tool(ticker: str) -> str:
    """
    Checks the insider trading activity (buying/selling by CEOs and executives) for a stock.
    Use this to see if the people running the company are confident enough to buy their own stock.
    """
    try:
        tk = yf.Ticker(ticker)

        # 1. Get general insider ownership percentage
        info = tk.info
        insider_percent = info.get('heldPercentInsiders', 0) * 100
        summary = f"Overall Insider Ownership: {round(insider_percent, 2)}%\n"

        # 2. Try to get recent transactions (this returns a Pandas DataFrame)
        trades = tk.insider_transactions

        if trades is None or trades.empty:
            return summary + "No recent individual insider trades recorded."

        # 3. Extract the top 3 most recent executive trades
        trade_list = []
        for _, row in trades.head(3).iterrows():
            insider = row.get('Insider', 'Executive')
            action = row.get('Transaction', 'Traded')
            shares = row.get('Shares', 'some')
            trade_list.append(f"- {insider} {action} {shares} shares.")

        return summary + "Recent Insider Moves:\n" + "\n".join(trade_list)

    except Exception as e:
        return f"Error fetching insider data: {str(e)}"


# ==========================================
# THE BRAIN & AGENT
# ==========================================
llm = ChatGoogleGenerativeAI(
    model="gemini-1.5-flash",
    google_api_key=os.getenv("GEMINI_API_KEY"),
    convert_system_message_to_human=True, # Add this for better CrewAI compatibility
    allow_reuse=True
)

# 2. Pass it to the Agent
financial_analyst = Agent(
    role='Financial Analyst',
    goal='Analyze stock market data and provide investment recommendations',
    backstory='You are a senior investment strategist with 20 years of experience on Wall Street.',
    llm=llm,
    tools=[
        sma_strategy_tool,
        news_sentiment_tool,
        fundamental_health_tool,
        insider_trading_tool
    ],  # <--- YOU MUST ADD THIS LINE
    allow_delegation=False,
    verbose=True
)

def run_ai_analysis(user_query: str) -> str:
    analysis_task = Task(
        description=f"Answer the user's query: '{user_query}'. If they ask about a stock, use ALL FOUR of your tools to analyze it.",
        expected_output="""A perfectly formatted, highly structured Wall Street investment report.
        You MUST use the following exact structure with these emojis and headers:

        🎯 **Executive Summary**
        [State clearly whether it is a BUY, SELL, or HOLD, followed by a 2-sentence summary of your final verdict.]

        📊 **Technical Analysis**
        [Explain the moving averages and the current price trend.]

        🏢 **Fundamental Health**
        [Break down the P/E ratio, EPS, and revenue growth. Are they overvalued?]

        📰 **Recent News & Sentiment**
        [Summarize the latest headlines. Is the public sentiment fearful or greedy?]

        🕵️‍♂️ **Insider Activity**
        [What percentage of the company do insiders own? Have the CEO or executives been buying or selling recently?]
        """,
        agent=financial_analyst
    )

    crew = Crew(
        agents=[financial_analyst],
        tasks=[analysis_task],
        process=Process.sequential
    )

    result = crew.kickoff()
    return str(result)