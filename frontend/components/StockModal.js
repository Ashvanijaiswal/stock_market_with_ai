import React from 'react';

const StockModal = ({ isOpen, onClose, details, isDarkMode, onViewChart, onGetAdvice }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        {details?.loading ? (
          <p>Loading {details.ticker}...</p>
        ) : (
          <>
            <h2 style={{ color: isDarkMode ? '#f8fafc' : '#0f172a' }}>
              {details?.ticker} Overview
            </h2>
            <div className="stats-grid">
              <div className="stat-item">
                <span>Price</span>
                <strong style={{ color: isDarkMode ? '#fff' : '#000' }}>
                  ${details?.price || 'N/A'}
                </strong>
              </div>
              <div className="stat-item">
                <span>P/E</span>
                <strong style={{ color: isDarkMode ? '#fff' : '#000' }}>
                  {details?.pe || 'N/A'}
                </strong>
              </div>
              <div className="stat-item">
                <span>Growth</span>
                <strong style={{ color: isDarkMode ? '#fff' : '#000' }}>
                  {details?.revenueGrowth ? (details.revenueGrowth * 100).toFixed(1) + '%' : 'N/A'}
                </strong>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
              <button style={{ flex: 1, background: '#0b5fff' }} onClick={() => onViewChart(details.ticker)}>
                📈 View Chart
              </button>
              <button style={{ flex: 1, background: '#10b981' }} onClick={() => onGetAdvice(details.ticker)}>
                🤖 Get Advice
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default StockModal;