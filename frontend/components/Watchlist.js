import React from 'react';

const Watchlist = ({ watchlist, isDarkMode, onStockClick, onRemove }) => {
  if (watchlist.length === 0) return null;

  return (
    <section className="card" style={{ marginTop: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
        <h2 style={{ margin: 0 }}>My Watchlist ({watchlist.length})</h2>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: `1px solid ${isDarkMode ? '#334155' : '#eee'}`, color: '#64748b', fontSize: '12px' }}>
              <th style={{ padding: '12px 8px' }}>COMPANY</th>
              <th style={{ padding: '12px 8px' }}>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {watchlist.map((ticker) => (
              <tr key={ticker} style={{ borderBottom: `1px solid ${isDarkMode ? '#1e293b' : '#f8fafc'}` }}>
                <td style={{ padding: '12px 8px' }}>
                  <button
                    onClick={() => onStockClick(ticker)}
                    style={{ background: 'none', color: '#0b5fff', border: 'none', fontWeight: 'bold', cursor: 'pointer', padding: 0 }}
                  >
                    {ticker.replace('.NS', '')}
                  </button>
                </td>
                <td style={{ padding: '12px 8px' }}>
                  <button
                    onClick={() => onRemove(ticker)}
                    style={{ background: '#fee2e2', color: '#ef4444', border: 'none', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer', fontSize: '11px' }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Watchlist;