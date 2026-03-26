import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Home() {
  // market selection: null -> show chooser, 'US' or 'IN' -> show screener
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
  const apiBase = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:8000';

  // default watchlists per market
  const defaults = {
    US: 'AAPL,MSFT,GOOGL',
    IN: 'RELIANCE.NS,TCS.NS,INFY.NS'
  };

  function chooseMarket(m) {
    setMarket(m);
    setTickers(defaults[m] || '');
    // reset previous results
    setResults([]);
    setSelectedChart(null);
    setRecommendation(null);
  }

  function backToMarket() {
    setMarket(null);
    setTickers('');
    setResults([]);
    setSelectedChart(null);
    setRecommendation(null);
  }

  async function runScreener(e) {
    e.preventDefault();
    setLoading(true);
    setResults([]);
    setSelectedChart(null);
    setRecommendation(null);

    const payload = {
      tickers: tickers.split(',').map(t => t.trim().toUpperCase()).filter(Boolean),
      min_cagr_pct: Number(minCagr),
      years: Number(years)
    };

    try {
      const res = await fetch(`${apiBase}/screener`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const text = await res.text();
        console.error('Screener error', res.status, text);
        alert(`Screener error: ${res.status} - ${text}`);
        setLoading(false);
        return;
      }

      const data = await res.json();
      setResults(data.matches || []);
    } catch (err) {
      console.error(err);
      alert('Error calling screener. Is the backend running at ' + apiBase + '? See console for details.');
    } finally {
      setLoading(false);
    }
  }

  // UPDATED: Now expects a raw JSON data array instead of an image
  async function showChart(ticker) {
    setSelectedChart({ loading: true });
    try {
      const res = await fetch(`${apiBase}/chart/${ticker}?period=${years}y`);
      const data = await res.json();

      if (data.data) {
        setSelectedChart({ ticker, data: data.data });
        // track view
        await fetch(`${apiBase}/track`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ user_id: 'anon', event_type: 'view_chart', payload: { ticker, market } })
        });
      } else {
        setSelectedChart({ error: data.error || 'No chart data' });
      }
    } catch (err) {
      console.error(err);
      setSelectedChart({ error: 'failed to fetch' });
    }
  }

  async function askRecommend(ticker) {
    setRecommendation({ loading: true });
    try {
      const res = await fetch(`${apiBase}/recommend`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ticker })
      });
      const data = await res.json();
      setRecommendation(data);
      // track event
      await fetch(`${apiBase}/track`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: 'anon', event_type: 'ask_recommend', payload: { ticker, result: data, market } })
      });
    } catch (err) {
      console.error(err);
      setRecommendation({ error: 'failed' });
    }
  }

  async function loadActivityLog() {
    try {
      const res = await fetch(`${apiBase}/events?limit=10`);
      const data = await res.json();
      setActivityLog(data.events || []);
    } catch (err) {
      console.error(err);
      alert('Failed to load events.');
    }
  }

  async function askAgent(e) {
      e.preventDefault();
      if (!chatQuery.trim()) return;

      setIsChatting(true);
      setChatResponse(''); // Clear old response

      try {
        const res = await fetch(`${apiBase}/chat`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query: chatQuery })
        });

        if (!res.ok) throw new Error('Network response was not ok');

        const data = await res.json();
        setChatResponse(data.response);
      } catch (err) {
        console.error(err);
        setChatResponse('The AI is a bit busy (Rate Limit). Please wait 60 seconds and try again!');
      } finally {
        setIsChatting(false);
      }
    }

  // If no market selected show chooser
  if (!market) {
    return (
      <div className="container">
        <header>
          <h1>Stock Screener MVP</h1>
        </header>
        <section className="card">
          <h2>Select Market / Country</h2>
          <p>Please choose which market you want to screen:</p>
          <div style={{ display: 'flex', gap: 12 }}>
            <button onClick={() => chooseMarket('US')}>US Market</button>
            <button onClick={() => chooseMarket('IN')}>India Market</button>
          </div>
        </section>

        <footer>
          <small>Backend assumed at {apiBase}</small>
        </footer>

        <style jsx>{`
          .container { max-width: 900px; margin: 24px auto; padding: 0 16px; }
          .card { background: #fff; padding: 12px; margin-bottom: 12px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.06); }
          button { padding: 8px 12px; border-radius: 4px; border: none; background: #0b5fff; color: #fff; cursor: pointer }
        `}</style>
      </div>
    );
  }

  return (
    <div className="container">

    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h1 style={{ margin: 0 }}>Stock Screener MVP ({market === 'US' ? 'US' : 'India'})</h1>
            <button onClick={backToMarket} style={{ background: '#e2e8f0', color: '#475569', fontSize: '13px', fontWeight: '600', padding: '6px 12px' }}>
              Change Market
            </button>
          </header>


      <section className="card">
          <form onSubmit={runScreener}>
            <label>Tickers (comma separated)</label>
            <input value={tickers} onChange={e => setTickers(e.target.value)} />

            <label>Min CAGR %</label>
            <input type="number" value={minCagr} onChange={e => setMinCagr(e.target.value)} />

            <label>Years</label>
            <input type="number" value={years} onChange={e => setYears(e.target.value)} />

            <button type="submit" disabled={loading}>{loading ? 'Running...' : 'Run Screener'}</button>
          </form>
      </section>

      <section className="card">
        <h2>Results</h2>
        {results.length === 0 && <p>No matches yet.</p>}
        <ul>
          {results.map(r => (
            <li key={r.ticker} className="result">
              <div>
                <strong>{r.ticker}</strong>
                <div>cagr: {r.cagr_pct}%</div>
              </div>
              <div className="actions">
                <button onClick={() => showChart(r.ticker)}>Chart</button>
                <button onClick={() => askRecommend(r.ticker)}>Recommend</button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* UPDATED: Interactive Recharts block instead of img tag */}
      <section className="card">
        <h2>Chart</h2>
        {selectedChart == null && <p>No chart selected.</p>}
        {selectedChart && selectedChart.loading && <p>Loading chart...</p>}
        {selectedChart && selectedChart.error && <p>Error: {selectedChart.error}</p>}
        {selectedChart && selectedChart.data && (
          <div style={{ width: '100%', height: 400 }}>
            <h3>{selectedChart.ticker}</h3>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={selectedChart.data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="price" stroke="#0b5fff" strokeWidth={2} dot={false} />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" opacity={0.5} />
                <XAxis dataKey="date" tick={{ fontSize: 12 }} minTickGap={30} />
                <YAxis domain={['auto', 'auto']} tick={{ fontSize: 12 }} />
                <Tooltip
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
                  formatter={(value) => [`$${value}`, 'Price']}
                  labelStyle={{ fontWeight: 'bold', color: '#333' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </section>

      <section className="card">
        <h2>Recommendation</h2>
        {recommendation == null && <p>No recommendation requested.</p>}
        {recommendation && recommendation.loading && <p>Thinking...</p>}
        {recommendation && recommendation.error && <p>Error: {recommendation.error}</p>}
        {recommendation && recommendation.action && (
          <div>
            <div><strong>{recommendation.ticker}</strong></div>
            <div>Action: {recommendation.action}</div>
            <div>Reason: {recommendation.reason}</div>
            <div>Latest: {recommendation.latest}</div>
          </div>
        )}
      </section>

      <footer>
          <section className="card" style={{ border: '2px solid #e0e7ff' }}>
              <h2>Ask the AI Analyst</h2>
              <p style={{ fontSize: '13px', color: '#666', marginTop: 0 }}>
                Chat with our CrewAI Agent. It can analyze technical indicators for any ticker you ask about!
              </p>

              <form onSubmit={askAgent} style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                <input
                  style={{ flex: 1, padding: '10px', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '14px' }}
                  value={chatQuery}
                  onChange={e => setChatQuery(e.target.value)}
                  placeholder="e.g., Should I buy AAPL? What about RELIANCE.NS?"
                />
                <button type="submit" disabled={isChatting} style={{ background: isChatting ? '#94a3b8' : '#10b981', padding: '0 20px', fontWeight: 'bold' }}>
                  {isChatting ? 'Thinking...' : 'Ask AI'}
                </button>
              </form>

              {chatResponse && (
                <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                  <h4 style={{ margin: '0 0 8px 0', color: '#0f172a' }}>AI Analyst Response:</h4>
                  <div style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6', color: '#334155', fontSize: '14px' }}>
                    {chatResponse}
                  </div>
                </div>
              )}
            </section>
        <section className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2>Admin Activity Log</h2>
            <button onClick={loadActivityLog} style={{ background: '#333', color: '#fff', padding: '6px 12px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}>Refresh Log</button>
          </div>

          {activityLog.length === 0 && <p>Click refresh to see database events.</p>}

          <ul style={{ maxHeight: '250px', overflowY: 'auto', fontSize: '13px', padding: 0 }}>
            {activityLog.map(ev => (
              <li key={ev.id} style={{ padding: '8px 0', borderBottom: '1px solid #eee', listStyle: 'none' }}>
                <div><strong>Event:</strong> {ev.event_type} | <strong>User:</strong> {ev.user_id}</div>
                <div style={{ color: '#666', marginTop: '4px', wordBreak: 'break-all' }}>
                  Payload: {JSON.stringify(ev.payload)}
                </div>
              </li>
            ))}
          </ul>
        </section>
        <small>Backend assumed at {apiBase}</small>
      </footer>

      <style jsx>{`
        .container { max-width: 900px; margin: 24px auto; padding: 0 16px; }
        header { margin-bottom: 16px }
        .card { background: #fff; padding: 12px; margin-bottom: 12px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.06); }
        form { display: grid; grid-template-columns: 1fr 160px; gap: 8px; align-items: center }
        label { grid-column: 1 / -1; font-size: 12px; color: #666 }
        input { padding: 8px; border: 1px solid #ddd; border-radius: 4px }
        button { padding: 8px 12px; border-radius: 4px; border: none; background: #0b5fff; color: #fff; cursor: pointer }
        ul { list-style: none; padding: 0 }
        .result { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #f0f0f0 }
        .actions button { margin-left: 8px }
      `}</style>
    </div>
  );
}