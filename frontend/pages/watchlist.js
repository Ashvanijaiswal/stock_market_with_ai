import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import WatchlistTable from '../components/Watchlist';
import StockModal from '../components/StockModal';

export default function WatchlistPage() {
  const [watchlist, setWatchlist] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStockDetails, setSelectedStockDetails] = useState(null);

  const apiBase = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:8000';

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setIsDarkMode(savedTheme === 'dark');
    const savedWatch = JSON.parse(localStorage.getItem('stock_watchlist') || '[]');
    setWatchlist(savedWatch);
  }, []);

  const handleRemove = (ticker) => {
    const updated = watchlist.filter(t => t !== ticker);
    setWatchlist(updated);
    localStorage.setItem('stock_watchlist', JSON.stringify(updated));
  };

  const showChart = (ticker) => {
      const m = ticker.includes('.NS') ? 'IN' : 'US';
      window.location.href = `/?ticker=${ticker}&action=chart&market=${m}`;
    };

    const askRecommend = (ticker) => {
      const m = ticker.includes('.NS') ? 'IN' : 'US';
      window.location.href = `/?ticker=${ticker}&action=recommend&market=${m}`;
    };

  async function handleStockClick(ticker) {
    setIsModalOpen(true);
    setSelectedStockDetails({ loading: true, ticker });
    try {
      const res = await fetch(`${apiBase}/stock-summary/${ticker}`);
      const data = await res.json();
      setSelectedStockDetails(data);
    } catch (err) {
      setSelectedStockDetails({ error: 'Failed to load', ticker });
    }
  }

  return (
    <> {/* Wrap in a Fragment to fix the build error */}
      <div className={isDarkMode ? 'dark-mode' : ''} style={{
        minHeight: '100vh',
        padding: '20px',
        background: isDarkMode ? '#0f172a' : '#f8fafc',
        transition: 'all 0.3s ease'
      }}>
        <Head>
          <title>My Watchlist | StockScreener</title>
        </Head>

        <nav style={{ marginBottom: '30px', display: 'flex', gap: '20px' }}>
          <Link href="/" style={{ color: '#0b5fff', textDecoration: 'none', fontWeight: 'bold' }}>
            ← Back to Screener
          </Link>
        </nav>

        <main style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={{ color: isDarkMode ? '#fff' : '#000', marginBottom: '20px' }}>Market Watch</h1>

         <WatchlistTable
           watchlist={watchlist}
           isDarkMode={isDarkMode}
           onStockClick={handleStockClick}
           onRemove={handleRemove}
         />

          {watchlist.length === 0 && (
            <div style={{ textAlign: 'center', marginTop: '100px', color: '#64748b' }}>
              <p>Your watchlist is empty.</p>
              <Link href="/" style={{ color: '#0b5fff' }}>Start adding stocks</Link>
            </div>
          )}
        </main>

        <style jsx global>{`
          .card {
            background: ${isDarkMode ? '#1e293b' : '#ffffff'};
            padding: 24px;
            border-radius: 12px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            color: ${isDarkMode ? '#f1f5f9' : '#1e293b'};
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
            padding: 25px;
            border-radius: 12px;
            width: 90%; max-width: 400px;
            position: relative;
          }
          .stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 15px; }
          .stat-item {
            background: ${isDarkMode ? '#0f172a' : '#f8fafc'};
            padding: 10px;
            border-radius: 6px;
          }
          .stat-item span { display: block; font-size: 11px; color: #64748b; text-transform: uppercase; }
          .close-btn {
            position: absolute; top: 10px; right: 15px;
            font-size: 24px; border: none; background: none;
            cursor: pointer; color: ${isDarkMode ? '#94a3b8' : '#666'};
          }
        `}</style>
      </div>

      <StockModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        details={selectedStockDetails}
        isDarkMode={isDarkMode}
        onViewChart={showChart}
        onGetAdvice={askRecommend}
      />
    </>
  );
}