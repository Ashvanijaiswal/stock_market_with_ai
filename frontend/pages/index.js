import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Watchlist from '../components/Watchlist';
import Link from 'next/link';
import { useRouter } from 'next/router';
import StockModal from '../components/StockModal';

const getRiskInfo = (pe) => {
  const val = parseFloat(pe);
  if (!val || isNaN(val)) return { label: 'Unknown Risk', color: '#94a3b8' };
  if (val < 15) return { label: 'Low Risk (Value)', color: '#10b981' };
  if (val < 35) return { label: 'Medium Risk', color: '#f59e0b' };
  return { label: 'High Risk (Growth)', color: '#ef4444' };
};

export default function Home() {
  const [market, setMarket] = useState(null);
  const [tickers, setTickers] = useState('');
  const [minCagr, setMinCagr] = useState(8);
  const [years, setYears] = useState(10);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [selectedChart, setSelectedChart] = useState(null);
  const [recommendation, setRecommendation] = useState(null);
  const [activityLog, setActivityLog] = useState([]);
  const [chatQuery, setChatQuery] = useState('');
  const [chatResponse, setChatResponse] = useState('');
  const [isChatting, setIsChatting] = useState(false);
  const [topStocks, setTopStocks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStockDetails, setSelectedStockDetails] = useState(null);
  const [marketIndex, setMarketIndex] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light'); // Save it!
  };
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const { ticker, market: urlMarket, action } = router.query;

      if (urlMarket) {
        // 1. Force the market state so the selection screen hides
        setMarket(urlMarket);
        setTickers(defaults[urlMarket] || "");

        // 2. Trigger the action (Chart or AI)
        if (ticker) {
          // We use a small timeout to let the UI finish rendering the dashboard
          setTimeout(() => {
            if (action === 'chart') {
              showChart(ticker);
            } else if (action === 'recommend') {
              askRecommend(ticker);
            }
          }, 800);
        }
      }
    }
  }, [router.isReady, router.query]);

  // Add this to your existing useEffect in index.js to load the theme on start
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') setIsDarkMode(true);
  }, []);

  const [watchlist, setWatchlist] = useState([]);
  const apiBase = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:8000';

  const defaults = {
    US: 'AAPL,MSFT,GOOGL',
    IN: 'RELIANCE.NS,TCS.NS,INFY.NS'
  };

  const toggleWatchlist = (ticker) => {
          // 1. Determine the new state and the status for logging
          const isRemoving = watchlist.includes(ticker);
          const status = isRemoving ? "removed_from_watchlist" : "added_to_watchlist";

          let updated;
          if (isRemoving) {
            updated = watchlist.filter(t => t !== ticker);
          } else {
            updated = [...watchlist, ticker];
          }

          // 2. Update React State and LocalStorage immediately for instant UI response
          setWatchlist(updated);
          localStorage.setItem('stock_watchlist', JSON.stringify(updated));

          // 3. Log the event to your Python backend (Async)
          fetch(`${apiBase}/track`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              user_id: "local_user",
              event_type: status,
              payload: {
                ticker: ticker,
                market: market
              }
            })
          })
          .then(() => {
            console.log(`Event ${status} tracked successfully`);
            loadActivityLog(); // Refresh your log to show the new activity
          })
          .catch(err => console.error("Tracking failed:", err));
        };

  useEffect(() => {
    if (market) {
      const fetchIndex = async () => {
        try {
          const res = await fetch(`${apiBase}/market-index?market=${market}`);
          const data = await res.json();
          setMarketIndex(data);
        } catch (err) { console.error("Index fetch failed", err); }
      };
      fetchIndex();
      const interval = setInterval(fetchIndex, 60000); // Refresh every minute
      return () => clearInterval(interval);
    }
  }, [market]);

  useEffect(() => {
      const saved = JSON.parse(localStorage.getItem('stock_watchlist') || '[]');
      setWatchlist(saved);
    }, []);

  async function chooseMarket(m) {
    setMarket(m);
    setTickers(defaults[m] || '');
    setResults([]);
    setSelectedChart(null);
    setRecommendation(null);
    setTopStocks([]);
  }

  function backToMarket() {
    setMarket(null);
    setTickers('');
    setResults([]);
    setSelectedChart(null);
    setRecommendation(null);
    setTopStocks([]);
  }

  async function runScreener(e) {
    e.preventDefault();
    setLoading(true);
    setResults([]);

    // 1. Auto-Suffix logic
    const originalTickers = tickers.split(',').map(t => t.trim().toUpperCase()).filter(Boolean);
    const processedTickers = originalTickers.map(t => {
      if (market === 'IN') return t.includes('.') ? t : `${t}.NS`;
      return t;
    });

    try {
      const res = await fetch(`${apiBase}/screener`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tickers: processedTickers,
          min_cagr_pct: Number(minCagr),
          years: Number(years)
        })
      });
      const data = await res.json();
      setResults(data.matches || []);

      // --- NEW: TRACK THE EVENT IN DATABASE ---
      try {
        await fetch(`${apiBase}/track`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            user_id: "local_user",
            event_type: "run_screener",
            payload: {
              tickers: processedTickers.join(','),
              market: market,
              match_count: data.matches?.length || 0
            }
          })
        });
      } catch (trackErr) {
        console.error("Failed to track event:", trackErr);
      }
      // ---------------------------------------

      // 2. SMART FEEDBACK
      if (data.matches && data.matches.length === 0) {
          const errorMsg = market === 'IN'
              ? "No matches found. Reminder: You are in the INDIA market. Only NSE stocks (e.g. TCS, RELIANCE) are valid here."
              : "No matches found. Please check your US ticker symbols (e.g. AAPL, TSLA).";
          alert(errorMsg);
      }

      // 3. Refresh the log to show the new 'run_screener' event
      loadActivityLog();

    } catch (err) {
      console.error(err);
      alert("Connection error. Is the backend running?");
    } finally {
      setLoading(false);
    }
  }

  async function fetchTrending(m) {
    try {
      const res = await fetch(`${apiBase}/top-trending/${m}`);
      const data = await res.json();
      setTopStocks(data.stocks || []);
    } catch (err) {
      console.error("Fetch failed", err);
    }
  }

  async function handleStockClick(ticker) {
    setIsModalOpen(true);
    setSelectedStockDetails({ loading: true, ticker });
    try {
      const res = await fetch(`${apiBase}/stock-summary/${ticker}`);
      const data = await res.json();
      setSelectedStockDetails(data);
    } catch (err) {
      setSelectedStockDetails({ error: 'Could not load stock data', ticker });
    }
  }

  async function showChart(ticker) {
    setSelectedChart({ loading: true });
    try {
      const res = await fetch(`${apiBase}/chart/${ticker}?period=${years}y`);
      const data = await res.json();
      if (data.data) {
        setSelectedChart({ ticker, data: data.data });
        // Smooth scroll to chart after a tiny delay so the element exists
        setTimeout(() => {
          document.getElementById('chart-view')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } catch (err) { console.error(err); }
  }

async function askRecommend(ticker) {
    // 1. Set loading AND the ticker name immediately so the UI knows which stock is being analyzed
    setRecommendation({ loading: true, ticker: ticker });

    try {
      const res = await fetch(`${apiBase}/recommend`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ticker })
      });
      const data = await res.json();

      // 2. Spread the data but keep the ticker name
      setRecommendation({ ...data, ticker: ticker });

      // 3. Smooth scroll to recommendation section
      setTimeout(() => {
        document.getElementById('recommendation-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);

    } catch (err) {
      console.error(err);
      setRecommendation({ error: 'failed', ticker: ticker });
    }
  }

  async function askAgent(e) {
    e.preventDefault();
    if (!chatQuery.trim()) return;
    setIsChatting(true);
    setChatResponse('');
    try {
      const res = await fetch(`${apiBase}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: chatQuery })
      });
      const data = await res.json();
      setChatResponse(data.response);
    } catch (err) { setChatResponse('AI Analyst offline.'); } finally { setIsChatting(false); }
  }

async function loadActivityLog() {
  // 1. Check if market exists
  if (!market) return;

  try {
    const res = await fetch(`${apiBase}/events?market=${market}&limit=10`);
    const data = await res.json();

    // 2. Log the data to see if backend is responding
    console.log("Activity Log Data:", data);

    // 3. Set the log (Ensure you are using setActivityLog)
    setActivityLog(data.events || []);
  } catch (err) {
    console.error("Failed to load activity log:", err);
  }
}
  // Add this useEffect to refresh the log whenever you switch markets
  useEffect(() => {
    if (market) {
      loadActivityLog();
    }
  }, [market]);

if (!market) {
    return (
      <div style={{
        backgroundColor: isDarkMode ? '#0f172a' : '#f1f5f9',
        minHeight: '100vh',
        display: 'flex',           // Use Flexbox
        flexDirection: 'column',   // Stack elements vertically
        justifyContent: 'center',  // Center vertically
        alignItems: 'center',      // Center horizontally
        transition: 'all 0.3s ease',
        textAlign: 'center'
      }}>
        <div className="container" style={{ width: '100%', maxWidth: '500px' }}>
          <header style={{ marginBottom: '30px' }}>
            <h1 style={{ color: isDarkMode ? '#f8fafc' : '#0f172a', fontSize: '2.5rem' }}>
              Stock Screener MVP
            </h1>
          </header>

          <section className="card" style={{ padding: '40px' }}>
            <h2 style={{ color: isDarkMode ? '#f8fafc' : '#0f172a', marginBottom: '25px' }}>
              Select Market
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {/* Blue Primary Buttons */}
              <button
                onClick={() => chooseMarket('US')}
                style={{ background: '#0b5fff', fontSize: '1.1rem', padding: '12px' }}
              >
                🇺🇸 US Market
              </button>

              <button
                onClick={() => chooseMarket('IN')}
                style={{ background: '#0b5fff', fontSize: '1.1rem', padding: '12px' }}
              >
                🇮🇳 India Market
              </button>

              <hr style={{ border: '0', borderTop: `1px solid ${isDarkMode ? '#334155' : '#eee'}`, margin: '10px 0' }} />

              {/* Theme Toggle */}
              <button
                onClick={toggleDarkMode}
                style={{
                  background: isDarkMode ? '#334155' : '#e2e8f0',
                  color: isDarkMode ? '#fde047' : '#475569',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '10px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                {isDarkMode ? '☀️ Switch to Light Mode' : '🌙 Switch to Dark Mode'}
              </button>
            </div>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className="container">

    {marketIndex && (
      <div className="market-ticker">
        <span className="ticker-label">{marketIndex.symbol}:</span>
        <span className="ticker-price">{marketIndex.price?.toLocaleString() || '---'}</span>

        {/* NEW TIMESTAMP */}
        <span style={{ fontSize: '10px', color: '#64748b', marginTop: '2px' }}>
          Updated: {marketIndex.timestamp}
        </span>

        <span className={`ticker-change ${marketIndex.change >= 0 ? 'up' : 'down'}`}>
          {marketIndex.change >= 0 ? '▲' : '▼'} {Math.abs(marketIndex.change || 0)} ({Math.abs(marketIndex.change_pct || 0)}%)
        </span>

        <div style={{
          marginLeft: 'auto',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: marketIndex.status === 'OPEN' ? '#064e3b' : '#450a0a',
          padding: '4px 12px',
          borderRadius: '20px',
          border: `1px solid ${marketIndex.status === 'OPEN' ? '#10b981' : '#f87171'}`
        }}>
          <span className={marketIndex.status === 'OPEN' ? 'live-dot' : ''}
                style={{
                  backgroundColor: marketIndex.status === 'OPEN' ? '#10b981' : '#f87171',
                  width: '8px', height: '8px', borderRadius: '50%'
                }}></span>
          <span style={{ fontSize: '11px', fontWeight: '900', color: marketIndex.status === 'OPEN' ? '#10b981' : '#f87171' }}>
            MARKET {marketIndex.status}
          </span>
        </div>
      </div>
    )}

      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1 style={{ margin: 0 }}>Stock Screener ({market})</h1>

        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          {/* 1. Link to Watchlist Page */}
          <Link href="/watchlist">
            <button style={{ background: '#0b5fff', color: 'white', padding: '8px 16px', borderRadius: '6px' }}>
              My Watchlist {watchlist.length > 0 && `(${watchlist.length})`}
            </button>
          </Link>

          {/* 2. ONLY KEEP THIS TOGGLE (The Icon one) */}
          <button
            onClick={toggleDarkMode}
            style={{
              background: '#0b5fff',
              color: '#fff',
              padding: '8px 12px',
              borderRadius: '6px',
              fontSize: '18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>

          <button onClick={backToMarket} style={{ background: '#e2e8f0', color: '#475569' }}>
            Change Market
          </button>
        </div>
      </header>

      {/* TRENDING */}
      <section className="card" style={{ border: '2px solid #0b5fff' }}>
        <h2>Market Insights ({market})</h2>
        {topStocks.length === 0 ? (
          <button onClick={() => fetchTrending(market)} style={{ background: '#f59e0b' }}>🔥 Show Trending Stocks</button>
        ) : (
          <div className="grid-list">
            {topStocks.map(ticker => (
              <button
                    key={ticker}
                    className="stock-pill"
                    onClick={() => handleStockClick(ticker)} // Sends full ticker (RELIANCE.NS) to backend
                    style={{
                      background: '#0b5fff',
                      color: 'white',
                      borderRadius: '20px',
                      padding: '8px 16px',
                      border: 'none',
                      cursor: 'pointer',
                      fontWeight: 'bold'
                    }}
                  >
                    {/* DISPLAY LOGIC: Show 'RELIANCE' instead of 'RELIANCE.NS' */}
                    {ticker.replace('.NS', '').replace('.BO', '')}
                  </button>
                  ))}
            <button onClick={() => setTopStocks([])} style={{ background: 'none', color: '#666' }}>(Hide)</button>
          </div>
        )}
      </section>

      {/* SCREENER */}
      <section className="card">
        <form onSubmit={runScreener}>
          <label>Tickers</label>
          <input value={tickers} onChange={e => setTickers(e.target.value)} />
          <div style={{display:'flex', gap:'10px'}}>
             <div style={{flex:1}}><label>Min CAGR %</label><input type="number" value={minCagr} onChange={e => setMinCagr(e.target.value)} style={{width:'100%'}}/></div>
             <div style={{flex:1}}><label>Years</label><input type="number" value={years} onChange={e => setYears(e.target.value)} style={{width:'100%'}}/></div>
          </div>
          <button type="submit" disabled={loading} style={{marginTop:'10px'}}>{loading ? 'Running...' : 'Run Screener'}</button>
        </form>
      </section>

      {/* RESULTS */}
      {results.length > 0 && (
        <section className="card">
          <h2>Results</h2>
          <ul>
            {results.map(r => (
              <li key={r.ticker} className="result">
                <div><strong>{r.ticker}</strong> (CAGR: {r.cagr_pct}%)</div>
                <div className="actions" style={{ display: 'flex', gap: '8px' }}>
                  {/* THE WATCHLIST BUTTON */}
                  <button
                    onClick={() => toggleWatchlist(r.ticker)}
                    style={{
                      background: watchlist.includes(r.ticker) ? '#64748b' : '#3b82f6',
                      fontSize: '12px'
                    }}
                  >
                    {watchlist.includes(r.ticker) ? 'Remove' : 'Save'}
                  </button>

                  <button onClick={() => showChart(r.ticker)}>Chart</button>
                  <button onClick={() => askRecommend(r.ticker)} style={{background:'#10b981'}}>AI Advice</button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* CHART VIEW */}
      {selectedChart && (
        <section className="card" id="chart-view">
            <h2>{selectedChart.ticker} Performance</h2>
            <div style={{ width: '100%', height: 350 }}>
                <ResponsiveContainer>
                    <LineChart data={selectedChart.data}>
                      <Line type="monotone" dataKey="price" stroke="#3b82f6" strokeWidth={2} dot={false} />
                      <CartesianGrid stroke={isDarkMode ? "#334155" : "#ccc"} strokeDasharray="5 5" opacity={0.5} />
                      <XAxis dataKey="date" hide />
                      <YAxis
                        domain={['auto', 'auto']}
                        tick={{ fill: isDarkMode ? '#94a3b8' : '#64748b' }}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: isDarkMode ? '#1e293b' : '#fff',
                          borderColor: isDarkMode ? '#334155' : '#ddd',
                          color: isDarkMode ? '#fff' : '#000'
                        }}
                      />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </section>
      )}

      {/* RECOMMENDATION */}
      {/* RECOMMENDATION SECTION */}
      {recommendation && !recommendation.loading && (
        <section className="card" id="recommendation-section" style={{
            borderTop: `6px solid ${getRiskInfo(selectedStockDetails?.pe).color}`,
            transition: 'all 0.3s ease'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
            <h2 style={{ margin: 0 }}>AI Recommendation</h2>

            <div style={{
              backgroundColor: getRiskInfo(selectedStockDetails?.pe).color,
              color: 'white',
              padding: '6px 14px',
              borderRadius: '20px',
              fontSize: '11px',
              fontWeight: '900',
              textTransform: 'uppercase'
            }}>
              {getRiskInfo(selectedStockDetails?.pe).label}
            </div>
          </div>

          {/* The Container for the details - BACKGROUND FIX HERE */}
          <div style={{
            background: isDarkMode ? '#0f172a' : '#f8fafc', // Dark blue in dark mode, light gray in light mode
            padding: '15px',
            borderRadius: '8px',
            border: `1px solid ${isDarkMode ? '#334155' : '#e2e8f0'}`
          }}>
            <p style={{ margin: '0 0 10px 0', color: isDarkMode ? '#f1f5f9' : '#1e293b' }}>
              <strong style={{ color: isDarkMode ? '#94a3b8' : '#64748b' }}>Ticker:</strong> {recommendation.ticker.replace('.NS', '')}
              <span style={{ color: '#94a3b8', fontSize: '12px', marginLeft: '5px' }}>
                  ({market === 'IN' ? 'NSE India' : 'US Market'})
              </span>
            </p>

            <p style={{ margin: '0 0 15px 0', color: isDarkMode ? '#f1f5f9' : '#1e293b' }}>
              <strong style={{ color: isDarkMode ? '#94a3b8' : '#64748b' }}>Action:</strong>
              <span style={{
                marginLeft: '10px',
                color: recommendation.action === 'BUY' ? '#10b981' : '#ef4444',
                fontSize: '22px',
                fontWeight: '900'
              }}>
                {recommendation.action}
              </span>
            </p>

            <div style={{ borderTop: `1px solid ${isDarkMode ? '#334155' : '#e2e8f0'}`, paddingTop: '10px' }}>
              <p style={{ lineHeight: '1.6', color: isDarkMode ? '#cbd5e1' : '#334155', margin: 0 }}>
                  <strong style={{ color: isDarkMode ? '#94a3b8' : '#1e293b' }}>Analyst Note:</strong> {recommendation.reason}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer>
        <section className="card" style={{ border: '2px solid #e0e7ff' }}>
          <h2>Ask the AI Analyst</h2>
          <form onSubmit={askAgent} style={{ display: 'flex', gap: '8px' }}>
            <input style={{ flex: 1 }} value={chatQuery} onChange={e => setChatQuery(e.target.value)} placeholder="Ask about any stock..." />
            <button type="submit" disabled={isChatting}>{isChatting ? 'Thinking...' : 'Ask AI'}</button>
          </form>
          {chatResponse && <div className="chat-box">{chatResponse}</div>}
        </section>

        <section className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
            <h2 style={{ margin: 0 }}>Activity Log</h2>
            {/* Simplified button - no extra z-index needed if we use simple nesting */}
            <button
              type="button"
              className="refresh-btn" // Added class
              onClick={() => {
                console.log("Refresh Clicked!");
                loadActivityLog();
              }}
            >
              🔄 Refresh
            </button>
          </div>

          <ul className="log-list" style={{ listStyle: 'none', padding: 0 }}>
            {activityLog && activityLog.length > 0 ? (
              activityLog.map((ev, index) => {
                // Helper to make the payload look nice
                const getActionText = (type, payload) => {
                  if (type === 'run_screener') return `Screened tickers: ${payload.tickers || 'N/A'}`;
                  if (type === 'view_chart') return `Viewed chart for ${payload.ticker}`;
                  if (type === 'ai_advice') return `Requested AI analysis for ${payload.ticker}`;
                  return JSON.stringify(payload); // Fallback
                };

                return (
                  <li key={index} style={{
                    padding: '10px 0',
                    borderBottom: `1px solid ${isDarkMode ? '#334155' : '#eee'}`,
                    fontSize: '13px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <strong style={{ color: '#0b5fff', textTransform: 'uppercase', fontSize: '11px' }}>
                        {ev.event_type.replace('_', ' ')}
                      </strong>
                      <span style={{ color: '#64748b', fontSize: '10px' }}>{market} Market</span>
                    </div>
                    <span style={{ color: isDarkMode ? '#cbd5e1' : '#444' }}>
                      {getActionText(ev.event_type, ev.payload)}
                    </span>
                  </li>
                );
              })
            ) : (
              <li style={{ color: '#666', padding: '20px 0', textAlign: 'center' }}>
                No activity logged yet for the {market} market. Try running a search!
              </li>
            )}
          </ul>
        </section>
      </footer>


      {/* MODAL (MODIFIED FOR DARK MODE) */}
      <StockModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        details={selectedStockDetails}
        isDarkMode={isDarkMode}
        onViewChart={(ticker) => { showChart(ticker); setIsModalOpen(false); }}
        onGetAdvice={(ticker) => { askRecommend(ticker); setIsModalOpen(false); }}
      />

      <style jsx>{`
              /* GLOBAL BODY STYLE */
              :global(body) {
                background-color: ${isDarkMode ? '#0f172a' : '#f1f5f9'};
                margin: 0;
                transition: background-color 0.3s ease;
              }

              .container {
                max-width: 900px;
                margin: 24px auto;
                padding: 0 16px;
                font-family: sans-serif;
              }

              .card {
                background: ${isDarkMode ? '#1e293b' : '#fff'};
                color: ${isDarkMode ? '#f1f5f9' : '#1e293b'};
                padding: 16px;
                margin-bottom: 12px;
                border-radius: 8px;
                box-shadow: 0 1px 3px rgba(0,0,0,0.1);
                border: 1px solid ${isDarkMode ? '#334155' : 'transparent'};
              }

              h1, h2 { color: ${isDarkMode ? '#f8fafc' : '#0f172a'}; }

              label { color: ${isDarkMode ? '#94a3b8' : '#666'}; }

              form { display: grid; gap: 8px; }

              input {
                padding: 10px;
                border: 1px solid ${isDarkMode ? '#475569' : '#ddd'};
                border-radius: 4px;
                background: ${isDarkMode ? '#0f172a' : '#fff'};
                color: ${isDarkMode ? '#fff' : '#000'};
              }

              button {
                padding: 10px 16px;
                border-radius: 6px;
                border: none;
                background: #0b5fff;
                color: #fff;
                cursor: pointer;
                font-weight: bold;
              }

              .grid-list { display: flex; flex-wrap: wrap; gap: 8px; }

              .stock-pill {
                background: #0b5fff;
                color: white;
                border-radius: 20px;
                padding: 6px 14px;
                font-size: 13px;
              }

              .modal-overlay {
                position: fixed;
                top: 0; left: 0;
                width: 100%; height: 100%;
                background: rgba(0,0,0,0.8);
                display: flex; justify-content: center; align-items: center;
                z-index: 1000;
              }

              .modal-content {
                background: ${isDarkMode ? '#1e293b' : 'white'};
                color: ${isDarkMode ? '#f1f5f9' : '#1e293b'};
                padding: 25px;
                border-radius: 12px;
                width: 90%; max-width: 400px;
                position: relative;
                border: 1px solid ${isDarkMode ? '#334155' : 'transparent'};
              }

              .close-btn {
                position: absolute; top: 10px; right: 15px;
                font-size: 24px; border: none; background: none;
                cursor: pointer; color: ${isDarkMode ? '#94a3b8' : '#666'};
              }

              .stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 15px; }

              .stat-item {
                background: ${isDarkMode ? '#0f172a' : '#f8fafc'};
                padding: 10px;
                border-radius: 6px;
              }

              .stat-item span { display: block; font-size: 11px; color: ${isDarkMode ? '#64748b' : '#64748b'}; text-transform: uppercase; }

              .result {
                display: flex;
                justify-content: space-between;
                padding: 10px 0;
                border-bottom: 1px solid ${isDarkMode ? '#334155' : '#eee'};
                align-items: center;
              }

              .chat-box {
                background: ${isDarkMode ? '#0f172a' : '#f8fafc'};
                padding: 12px; margin-top: 10px; border-radius: 6px;
                border: 1px solid ${isDarkMode ? '#334155' : '#e2e8f0'};
                white-space: pre-wrap; font-size: 14px;
                color: ${isDarkMode ? '#cbd5e1' : '#334155'};
              }

              .log-list { maxHeight: 150px; overflow-y: auto; font-size: 11px; padding: 0; list-style: none; }

              .market-ticker {
                background: ${isDarkMode ? '#020617' : '#0f172a'};
                color: white;
                padding: 10px 20px;
                border-radius: 12px;
                margin-bottom: 25px;
                display: flex;
                align-items: center;
                gap: 15px;
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
              }

              .refresh-btn {
                  background: #0b5fff; /* Your Primary Blue */
                  color: #fff;
                  padding: 8px 16px;
                  border-radius: 6px;
                  cursor: pointer;
                  border: none;
                  font-weight: bold;
                  transition: all 0.2s ease;
                  display: flex;
                  align-items: center;
                  gap: 6px;
                  box-shadow: 0 2px 4px rgba(11, 95, 255, 0.2);
                }

                /* Hover State: Brightens slightly and adds a shadow */
                .refresh-btn:hover {
                  background: #2575ff;
                  transform: translateY(-1px);
                  box-shadow: 0 4px 12px rgba(11, 95, 255, 0.3);
                }

                /* Active State: The "Pressed" look */
                .refresh-btn:active {
                  transform: translateY(1px);
                  filter: brightness(0.9);
                  box-shadow: none;
                }

              .live-dot { animation: pulse 2s infinite; }

              @keyframes pulse {
                0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
                70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
                100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
              }
            `}</style>
    </div>
  );
}