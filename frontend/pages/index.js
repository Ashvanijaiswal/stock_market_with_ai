import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

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
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const apiBase = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:8000';

  const defaults = {
    US: 'AAPL,MSFT,GOOGL',
    IN: 'RELIANCE.NS,TCS.NS,INFY.NS'
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

      // 2. SMART FEEDBACK: If no matches found, alert the user specifically about the market
      if (data.matches && data.matches.length === 0) {
          const errorMsg = market === 'IN'
              ? "No matches found. Reminder: You are in the INDIA market. Only NSE stocks (e.g. TCS, RELIANCE) are valid here."
              : "No matches found. Please check your US ticker symbols (e.g. AAPL, TSLA).";
          alert(errorMsg);
      }

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
    try {
      const res = await fetch(`${apiBase}/events?limit=10`);
      const data = await res.json();
      setActivityLog(data.events || []);
    } catch (err) { console.error(err); }
  }

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
        <div style={{ display: 'flex', gap: '10px' }}>
            {/* DARK MODE TOGGLE */}
            <button
              onClick={toggleDarkMode}
              style={{ background: isDarkMode ? '#fde047' : '#1e293b', color: isDarkMode ? '#000' : '#fff', padding: '6px 12px' }}
            >
              {isDarkMode ? '☀️ Light' : '🌙 Dark'}
            </button>
            <button onClick={backToMarket} style={{ background: '#e2e8f0', color: '#475569' }}>Change Market</button>
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
                <div className="actions">
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
      {recommendation && !recommendation.loading && (
        <section className="card" id="recommendation-section" style={{
            borderTop: `6px solid ${getRiskInfo(selectedStockDetails?.pe).color}`,
            transition: 'all 0.3s ease'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
            <h2 style={{ margin: 0 }}>AI Recommendation</h2>

            {/* THE DYNAMIC RISK BADGE */}
            <div style={{
              backgroundColor: getRiskInfo(selectedStockDetails?.pe).color,
              color: 'white',
              padding: '6px 14px',
              borderRadius: '20px',
              fontSize: '11px',
              fontWeight: '900',
              letterSpacing: '0.5px',
              textTransform: 'uppercase'
            }}>
              {getRiskInfo(selectedStockDetails?.pe).label}
            </div>
          </div>

          <div style={{ background: '#f8fafc', padding: '15px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <p style={{ margin: '0 0 10px 0' }}>
              <strong>Ticker:</strong> {recommendation.ticker.replace('.NS', '')}
              <span style={{ color: '#94a3b8', fontSize: '12px', marginLeft: '5px' }}>
                  ({market === 'IN' ? 'NSE India' : 'US Market'})
              </span>
            </p>

            <p style={{ margin: '0 0 15px 0' }}>
              <strong>Action:</strong>
              <span style={{
                marginLeft: '10px',
                color: recommendation.action === 'BUY' ? '#10b981' : '#ef4444',
                fontSize: '22px',
                fontWeight: '900'
              }}>
                {recommendation.action}
              </span>
            </p>

            <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '10px' }}>
              <p style={{ lineHeight: '1.6', color: '#334155', margin: 0 }}>
                  <strong>Analyst Note:</strong> {recommendation.reason}
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
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems:'center' }}>
            <h2 style={{margin:0}}>Activity Log</h2>
            <button onClick={loadActivityLog} style={{ background: '#333' }}>Refresh</button>
          </div>
          <ul className="log-list">
            {activityLog.map(ev => (
              <li key={ev.id}><strong>{ev.event_type}</strong>: {JSON.stringify(ev.payload)}</li>
            ))}
          </ul>
        </section>
      </footer>

      {/* MODAL (MODIFIED) */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setIsModalOpen(false)}>×</button>
            {selectedStockDetails?.loading ? (
              <p>Loading {selectedStockDetails.ticker}...</p>
            ) : (
              <>
                <h2>{selectedStockDetails?.ticker} Overview</h2>
                <div className="stats-grid">
                  <div className="stat-item"><span>Price</span><strong>${selectedStockDetails?.price || 'N/A'}</strong></div>
                  <div className="stat-item"><span>P/E</span><strong>{selectedStockDetails?.pe || 'N/A'}</strong></div>
                  <div className="stat-item"><span>Growth</span><strong>{selectedStockDetails?.revenueGrowth ? (selectedStockDetails.revenueGrowth * 100).toFixed(1) + '%' : 'N/A'}</strong></div>
                </div>

                <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                  <button
                    style={{ flex: 1, background: '#0b5fff' }}
                    onClick={() => {
                      showChart(selectedStockDetails.ticker);
                      setIsModalOpen(false);
                    }}
                  >
                    📈 View Chart
                  </button>

                  <button
                    style={{ flex: 1, background: '#10b981' }}
                    onClick={() => {
                      // THIS IS THE FIX: Pass the ticker and close the modal
                      askRecommend(selectedStockDetails.ticker);
                      setIsModalOpen(false);
                    }}
                  >
                    🤖 Get Advice
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

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