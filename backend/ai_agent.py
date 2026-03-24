import os
from dotenv import load_dotenv
from crewai import Agent, Task, Crew, Process
from crewai.tools import tool
# from langchain_openai import ChatOpenAI
from langchain_google_genai import ChatGoogleGenerativeAI
import os
# Import your existing logic!
from strategist import recommend_simple

# Load the API key from the .env file
load_dotenv()

# 1. Define the Tool
@tool("SMA Strategy Analyzer")
def sma_strategy_tool(ticker: str) -> str:
    """
    Useful for analyzing a stock's long-term trend.
    Pass in a stock ticker symbol (e.g., 'AAPL' or 'RELIANCE.NS').
    It returns a BUY, SELL, or HOLD recommendation based on 50-day and 200-day moving averages.
    """
    try:
        # Call your EXACT existing function
        result_dict = recommend_simple(ticker)

        if result_dict is None or "error" in result_dict:
            return f"Error: Could not analyze {ticker}. Make sure the ticker is correct."

        # Convert the dictionary to a clean string for the AI to read
        return (f"Action: {result_dict['action']} | "
                f"Reason: {result_dict['reason']} | "
                f"Current Price: ${result_dict['latest']}")
    except Exception as e:
        return f"Tool error: {str(e)}"

# 2. Set up the Brain (Using GPT-4o-mini for speed and cost-efficiency)
# llm = ChatOpenAI(model="gpt-4o-mini")

llm = ChatGoogleGenerativeAI(
    model="gemini-2.5-flash",
    google_api_key=os.getenv("GEMINI_API_KEY")
)

# 3. Create the Agent
financial_analyst = Agent(
    role='Senior Technical Investment Analyst',
    goal='Provide clear, actionable stock analysis based on moving average trends.',
    backstory='You are an expert quantitative trader. You explain technical indicators '
              'in simple, easy-to-understand terms. You NEVER invent data. You rely ONLY '
              'on the tools provided to you.',
    verbose=True,
    allow_delegation=False,
    tools=[sma_strategy_tool],
    llm=llm
)

# 4. The main function we will call from FastAPI
def run_ai_analysis(user_query: str) -> str:
    """Takes a user's question, gives it to the Agent, and returns the response."""

    analysis_task = Task(
        description=f"Answer the user's query: '{user_query}'. If they ask about a stock, use your tool to analyze it.",
        expected_output="A 2-3 paragraph professional response answering the user's question, citing the exact technical data found.",
        agent=financial_analyst
    )

    crew = Crew(
        agents=[financial_analyst],
        tasks=[analysis_task],
        process=Process.sequential
    )

    # Kickoff the AI thought process
    result = crew.kickoff()

    # CrewAI returns a CrewOutput object in newer versions, so we convert it to a string
    return str(result)