import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { handleExportPDF } from '../utils/export';

const StockModal = ({ isOpen, onClose, details, isDarkMode, onViewChart, onGetAdvice }) => {
  if (!isOpen) return null;

  const exportPDF = () => {
    handleExportPDF(details?.ticker, isDarkMode);
  };

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
            {/* ADD THIS NEW SECTION BELOW THE BUTTONS */}
            {details?.recommendation && (
              <div style={{ marginTop: '20px', borderTop: `1px solid ${isDarkMode ? '#334155' : '#eee'}`, paddingTop: '15px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <h3 style={{ margin: 0, fontSize: '14px', color: isDarkMode ? '#94a3b8' : '#64748b' }}>
                    AI Analysis Report
                  </h3>
                  <button
                    onClick={exportPDF}
                    style={{
                      background: '#0b5fff',
                      fontSize: '11px',
                      padding: '5px 12px',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    📥 Export PDF
                  </button>
                </div>

                <div id="ai-advice-content" style={{
                  fontSize: '13px',
                  lineHeight: '1.6',
                  color: isDarkMode ? '#cbd5e1' : '#444',
                  padding: '12px',
                  borderRadius: '8px',
                  background: isDarkMode ? '#0f172a' : '#f8fafc',
                  border: `1px solid ${isDarkMode ? '#334155' : '#e2e8f0'}`
                }}>
                  {/* Ensure this matches the key where your AI text is stored */}
                  {details.recommendation}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default StockModal;