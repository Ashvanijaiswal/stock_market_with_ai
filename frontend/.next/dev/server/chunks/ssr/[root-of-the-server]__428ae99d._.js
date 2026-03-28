module.exports = [
"[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("styled-jsx/style.js", () => require("styled-jsx/style.js"));

module.exports = mod;
}),
"[externals]/react-dom [external] (react-dom, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}),
"[project]/frontend/pages/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/recharts/es6/chart/LineChart.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/recharts/es6/cartesian/Line.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/recharts/es6/cartesian/XAxis.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/recharts/es6/cartesian/YAxis.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/recharts/es6/cartesian/CartesianGrid.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/recharts/es6/component/Tooltip.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/recharts/es6/component/ResponsiveContainer.js [ssr] (ecmascript)");
;
;
;
;
const getRiskInfo = (pe)=>{
    const val = parseFloat(pe);
    if (!val || isNaN(val)) return {
        label: 'Unknown Risk',
        color: '#94a3b8'
    };
    if (val < 15) return {
        label: 'Low Risk (Value)',
        color: '#10b981'
    };
    if (val < 35) return {
        label: 'Medium Risk',
        color: '#f59e0b'
    };
    return {
        label: 'High Risk (Growth)',
        color: '#ef4444'
    };
};
function Home() {
    const [market, setMarket] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [tickers, setTickers] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [minCagr, setMinCagr] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(8);
    const [years, setYears] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(10);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [selectedChart, setSelectedChart] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [recommendation, setRecommendation] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [activityLog, setActivityLog] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [chatQuery, setChatQuery] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [chatResponse, setChatResponse] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [isChatting, setIsChatting] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [topStocks, setTopStocks] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [selectedStockDetails, setSelectedStockDetails] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [marketIndex, setMarketIndex] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [isDarkMode, setIsDarkMode] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const toggleDarkMode = ()=>setIsDarkMode(!isDarkMode);
    const apiBase = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:8000';
    const defaults = {
        US: 'AAPL,MSFT,GOOGL',
        IN: 'RELIANCE.NS,TCS.NS,INFY.NS'
    };
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (market) {
            const fetchIndex = async ()=>{
                try {
                    const res = await fetch(`${apiBase}/market-index?market=${market}`);
                    const data = await res.json();
                    setMarketIndex(data);
                } catch (err) {
                    console.error("Index fetch failed", err);
                }
            };
            fetchIndex();
            const interval = setInterval(fetchIndex, 60000); // Refresh every minute
            return ()=>clearInterval(interval);
        }
    }, [
        market
    ]);
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
        const originalTickers = tickers.split(',').map((t)=>t.trim().toUpperCase()).filter(Boolean);
        const processedTickers = originalTickers.map((t)=>{
            if (market === 'IN') return t.includes('.') ? t : `${t}.NS`;
            return t;
        });
        try {
            const res = await fetch(`${apiBase}/screener`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
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
                    headers: {
                        'Content-Type': 'application/json'
                    },
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
                const errorMsg = market === 'IN' ? "No matches found. Reminder: You are in the INDIA market. Only NSE stocks (e.g. TCS, RELIANCE) are valid here." : "No matches found. Please check your US ticker symbols (e.g. AAPL, TSLA).";
                alert(errorMsg);
            }
            // 3. Refresh the log to show the new 'run_screener' event
            loadActivityLog();
        } catch (err) {
            console.error(err);
            alert("Connection error. Is the backend running?");
        } finally{
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
        setSelectedStockDetails({
            loading: true,
            ticker
        });
        try {
            const res = await fetch(`${apiBase}/stock-summary/${ticker}`);
            const data = await res.json();
            setSelectedStockDetails(data);
        } catch (err) {
            setSelectedStockDetails({
                error: 'Could not load stock data',
                ticker
            });
        }
    }
    async function showChart(ticker) {
        setSelectedChart({
            loading: true
        });
        try {
            const res = await fetch(`${apiBase}/chart/${ticker}?period=${years}y`);
            const data = await res.json();
            if (data.data) {
                setSelectedChart({
                    ticker,
                    data: data.data
                });
                // Smooth scroll to chart after a tiny delay so the element exists
                setTimeout(()=>{
                    document.getElementById('chart-view')?.scrollIntoView({
                        behavior: 'smooth'
                    });
                }, 100);
            }
        } catch (err) {
            console.error(err);
        }
    }
    async function askRecommend(ticker) {
        // 1. Set loading AND the ticker name immediately so the UI knows which stock is being analyzed
        setRecommendation({
            loading: true,
            ticker: ticker
        });
        try {
            const res = await fetch(`${apiBase}/recommend`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ticker
                })
            });
            const data = await res.json();
            // 2. Spread the data but keep the ticker name
            setRecommendation({
                ...data,
                ticker: ticker
            });
            // 3. Smooth scroll to recommendation section
            setTimeout(()=>{
                document.getElementById('recommendation-section')?.scrollIntoView({
                    behavior: 'smooth'
                });
            }, 100);
        } catch (err) {
            console.error(err);
            setRecommendation({
                error: 'failed',
                ticker: ticker
            });
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
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    query: chatQuery
                })
            });
            const data = await res.json();
            setChatResponse(data.response);
        } catch (err) {
            setChatResponse('AI Analyst offline.');
        } finally{
            setIsChatting(false);
        }
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
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (market) {
            loadActivityLog();
        }
    }, [
        market
    ]);
    if (!market) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            style: {
                backgroundColor: isDarkMode ? '#0f172a' : '#f1f5f9',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                transition: 'all 0.3s ease',
                textAlign: 'center'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "container",
                style: {
                    width: '100%',
                    maxWidth: '500px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("header", {
                        style: {
                            marginBottom: '30px'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                            style: {
                                color: isDarkMode ? '#f8fafc' : '#0f172a',
                                fontSize: '2.5rem'
                            },
                            children: "Stock Screener MVP"
                        }, void 0, false, {
                            fileName: "[project]/frontend/pages/index.js",
                            lineNumber: 252,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/pages/index.js",
                        lineNumber: 251,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                        className: "card",
                        style: {
                            padding: '40px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                style: {
                                    color: isDarkMode ? '#f8fafc' : '#0f172a',
                                    marginBottom: '25px'
                                },
                                children: "Select Market"
                            }, void 0, false, {
                                fileName: "[project]/frontend/pages/index.js",
                                lineNumber: 258,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '15px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        onClick: ()=>chooseMarket('US'),
                                        style: {
                                            background: '#0b5fff',
                                            fontSize: '1.1rem',
                                            padding: '12px'
                                        },
                                        children: "🇺🇸 US Market"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/pages/index.js",
                                        lineNumber: 264,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        onClick: ()=>chooseMarket('IN'),
                                        style: {
                                            background: '#0b5fff',
                                            fontSize: '1.1rem',
                                            padding: '12px'
                                        },
                                        children: "🇮🇳 India Market"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/pages/index.js",
                                        lineNumber: 271,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("hr", {
                                        style: {
                                            border: '0',
                                            borderTop: `1px solid ${isDarkMode ? '#334155' : '#eee'}`,
                                            margin: '10px 0'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/pages/index.js",
                                        lineNumber: 278,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        onClick: toggleDarkMode,
                                        style: {
                                            background: isDarkMode ? '#334155' : '#e2e8f0',
                                            color: isDarkMode ? '#fde047' : '#475569',
                                            border: 'none',
                                            borderRadius: '6px',
                                            padding: '10px',
                                            cursor: 'pointer',
                                            fontWeight: 'bold'
                                        },
                                        children: isDarkMode ? '☀️ Switch to Light Mode' : '🌙 Switch to Dark Mode'
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/pages/index.js",
                                        lineNumber: 281,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/pages/index.js",
                                lineNumber: 262,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/pages/index.js",
                        lineNumber: 257,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/pages/index.js",
                lineNumber: 250,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/pages/index.js",
            lineNumber: 240,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
            [
                "2d61b444a67c0314",
                [
                    isDarkMode ? '#0f172a' : '#f1f5f9',
                    isDarkMode ? '#1e293b' : '#fff',
                    isDarkMode ? '#f1f5f9' : '#1e293b',
                    isDarkMode ? '#334155' : 'transparent',
                    isDarkMode ? '#f8fafc' : '#0f172a',
                    isDarkMode ? '#94a3b8' : '#666',
                    isDarkMode ? '#475569' : '#ddd',
                    isDarkMode ? '#0f172a' : '#fff',
                    isDarkMode ? '#fff' : '#000',
                    isDarkMode ? '#1e293b' : 'white',
                    isDarkMode ? '#f1f5f9' : '#1e293b',
                    isDarkMode ? '#334155' : 'transparent',
                    isDarkMode ? '#94a3b8' : '#666',
                    isDarkMode ? '#0f172a' : '#f8fafc',
                    isDarkMode ? '#64748b' : '#64748b',
                    isDarkMode ? '#334155' : '#eee',
                    isDarkMode ? '#0f172a' : '#f8fafc',
                    isDarkMode ? '#334155' : '#e2e8f0',
                    isDarkMode ? '#cbd5e1' : '#334155',
                    isDarkMode ? '#020617' : '#0f172a'
                ]
            ]
        ]) + " " + "container",
        children: [
            marketIndex && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                    [
                        "2d61b444a67c0314",
                        [
                            isDarkMode ? '#0f172a' : '#f1f5f9',
                            isDarkMode ? '#1e293b' : '#fff',
                            isDarkMode ? '#f1f5f9' : '#1e293b',
                            isDarkMode ? '#334155' : 'transparent',
                            isDarkMode ? '#f8fafc' : '#0f172a',
                            isDarkMode ? '#94a3b8' : '#666',
                            isDarkMode ? '#475569' : '#ddd',
                            isDarkMode ? '#0f172a' : '#fff',
                            isDarkMode ? '#fff' : '#000',
                            isDarkMode ? '#1e293b' : 'white',
                            isDarkMode ? '#f1f5f9' : '#1e293b',
                            isDarkMode ? '#334155' : 'transparent',
                            isDarkMode ? '#94a3b8' : '#666',
                            isDarkMode ? '#0f172a' : '#f8fafc',
                            isDarkMode ? '#64748b' : '#64748b',
                            isDarkMode ? '#334155' : '#eee',
                            isDarkMode ? '#0f172a' : '#f8fafc',
                            isDarkMode ? '#334155' : '#e2e8f0',
                            isDarkMode ? '#cbd5e1' : '#334155',
                            isDarkMode ? '#020617' : '#0f172a'
                        ]
                    ]
                ]) + " " + "market-ticker",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                            [
                                "2d61b444a67c0314",
                                [
                                    isDarkMode ? '#0f172a' : '#f1f5f9',
                                    isDarkMode ? '#1e293b' : '#fff',
                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                    isDarkMode ? '#334155' : 'transparent',
                                    isDarkMode ? '#f8fafc' : '#0f172a',
                                    isDarkMode ? '#94a3b8' : '#666',
                                    isDarkMode ? '#475569' : '#ddd',
                                    isDarkMode ? '#0f172a' : '#fff',
                                    isDarkMode ? '#fff' : '#000',
                                    isDarkMode ? '#1e293b' : 'white',
                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                    isDarkMode ? '#334155' : 'transparent',
                                    isDarkMode ? '#94a3b8' : '#666',
                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                    isDarkMode ? '#64748b' : '#64748b',
                                    isDarkMode ? '#334155' : '#eee',
                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                    isDarkMode ? '#334155' : '#e2e8f0',
                                    isDarkMode ? '#cbd5e1' : '#334155',
                                    isDarkMode ? '#020617' : '#0f172a'
                                ]
                            ]
                        ]) + " " + "ticker-label",
                        children: [
                            marketIndex.symbol,
                            ":"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/pages/index.js",
                        lineNumber: 307,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                            [
                                "2d61b444a67c0314",
                                [
                                    isDarkMode ? '#0f172a' : '#f1f5f9',
                                    isDarkMode ? '#1e293b' : '#fff',
                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                    isDarkMode ? '#334155' : 'transparent',
                                    isDarkMode ? '#f8fafc' : '#0f172a',
                                    isDarkMode ? '#94a3b8' : '#666',
                                    isDarkMode ? '#475569' : '#ddd',
                                    isDarkMode ? '#0f172a' : '#fff',
                                    isDarkMode ? '#fff' : '#000',
                                    isDarkMode ? '#1e293b' : 'white',
                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                    isDarkMode ? '#334155' : 'transparent',
                                    isDarkMode ? '#94a3b8' : '#666',
                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                    isDarkMode ? '#64748b' : '#64748b',
                                    isDarkMode ? '#334155' : '#eee',
                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                    isDarkMode ? '#334155' : '#e2e8f0',
                                    isDarkMode ? '#cbd5e1' : '#334155',
                                    isDarkMode ? '#020617' : '#0f172a'
                                ]
                            ]
                        ]) + " " + "ticker-price",
                        children: marketIndex.price?.toLocaleString() || '---'
                    }, void 0, false, {
                        fileName: "[project]/frontend/pages/index.js",
                        lineNumber: 308,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: '10px',
                            color: '#64748b',
                            marginTop: '2px'
                        },
                        className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                            [
                                "2d61b444a67c0314",
                                [
                                    isDarkMode ? '#0f172a' : '#f1f5f9',
                                    isDarkMode ? '#1e293b' : '#fff',
                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                    isDarkMode ? '#334155' : 'transparent',
                                    isDarkMode ? '#f8fafc' : '#0f172a',
                                    isDarkMode ? '#94a3b8' : '#666',
                                    isDarkMode ? '#475569' : '#ddd',
                                    isDarkMode ? '#0f172a' : '#fff',
                                    isDarkMode ? '#fff' : '#000',
                                    isDarkMode ? '#1e293b' : 'white',
                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                    isDarkMode ? '#334155' : 'transparent',
                                    isDarkMode ? '#94a3b8' : '#666',
                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                    isDarkMode ? '#64748b' : '#64748b',
                                    isDarkMode ? '#334155' : '#eee',
                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                    isDarkMode ? '#334155' : '#e2e8f0',
                                    isDarkMode ? '#cbd5e1' : '#334155',
                                    isDarkMode ? '#020617' : '#0f172a'
                                ]
                            ]
                        ]),
                        children: [
                            "Updated: ",
                            marketIndex.timestamp
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/pages/index.js",
                        lineNumber: 311,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                            [
                                "2d61b444a67c0314",
                                [
                                    isDarkMode ? '#0f172a' : '#f1f5f9',
                                    isDarkMode ? '#1e293b' : '#fff',
                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                    isDarkMode ? '#334155' : 'transparent',
                                    isDarkMode ? '#f8fafc' : '#0f172a',
                                    isDarkMode ? '#94a3b8' : '#666',
                                    isDarkMode ? '#475569' : '#ddd',
                                    isDarkMode ? '#0f172a' : '#fff',
                                    isDarkMode ? '#fff' : '#000',
                                    isDarkMode ? '#1e293b' : 'white',
                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                    isDarkMode ? '#334155' : 'transparent',
                                    isDarkMode ? '#94a3b8' : '#666',
                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                    isDarkMode ? '#64748b' : '#64748b',
                                    isDarkMode ? '#334155' : '#eee',
                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                    isDarkMode ? '#334155' : '#e2e8f0',
                                    isDarkMode ? '#cbd5e1' : '#334155',
                                    isDarkMode ? '#020617' : '#0f172a'
                                ]
                            ]
                        ]) + " " + `ticker-change ${marketIndex.change >= 0 ? 'up' : 'down'}`,
                        children: [
                            marketIndex.change >= 0 ? '▲' : '▼',
                            " ",
                            Math.abs(marketIndex.change || 0),
                            " (",
                            Math.abs(marketIndex.change_pct || 0),
                            "%)"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/pages/index.js",
                        lineNumber: 315,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            marginLeft: 'auto',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            background: marketIndex.status === 'OPEN' ? '#064e3b' : '#450a0a',
                            padding: '4px 12px',
                            borderRadius: '20px',
                            border: `1px solid ${marketIndex.status === 'OPEN' ? '#10b981' : '#f87171'}`
                        },
                        className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                            [
                                "2d61b444a67c0314",
                                [
                                    isDarkMode ? '#0f172a' : '#f1f5f9',
                                    isDarkMode ? '#1e293b' : '#fff',
                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                    isDarkMode ? '#334155' : 'transparent',
                                    isDarkMode ? '#f8fafc' : '#0f172a',
                                    isDarkMode ? '#94a3b8' : '#666',
                                    isDarkMode ? '#475569' : '#ddd',
                                    isDarkMode ? '#0f172a' : '#fff',
                                    isDarkMode ? '#fff' : '#000',
                                    isDarkMode ? '#1e293b' : 'white',
                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                    isDarkMode ? '#334155' : 'transparent',
                                    isDarkMode ? '#94a3b8' : '#666',
                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                    isDarkMode ? '#64748b' : '#64748b',
                                    isDarkMode ? '#334155' : '#eee',
                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                    isDarkMode ? '#334155' : '#e2e8f0',
                                    isDarkMode ? '#cbd5e1' : '#334155',
                                    isDarkMode ? '#020617' : '#0f172a'
                                ]
                            ]
                        ]),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                style: {
                                    backgroundColor: marketIndex.status === 'OPEN' ? '#10b981' : '#f87171',
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%'
                                },
                                className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                    [
                                        "2d61b444a67c0314",
                                        [
                                            isDarkMode ? '#0f172a' : '#f1f5f9',
                                            isDarkMode ? '#1e293b' : '#fff',
                                            isDarkMode ? '#f1f5f9' : '#1e293b',
                                            isDarkMode ? '#334155' : 'transparent',
                                            isDarkMode ? '#f8fafc' : '#0f172a',
                                            isDarkMode ? '#94a3b8' : '#666',
                                            isDarkMode ? '#475569' : '#ddd',
                                            isDarkMode ? '#0f172a' : '#fff',
                                            isDarkMode ? '#fff' : '#000',
                                            isDarkMode ? '#1e293b' : 'white',
                                            isDarkMode ? '#f1f5f9' : '#1e293b',
                                            isDarkMode ? '#334155' : 'transparent',
                                            isDarkMode ? '#94a3b8' : '#666',
                                            isDarkMode ? '#0f172a' : '#f8fafc',
                                            isDarkMode ? '#64748b' : '#64748b',
                                            isDarkMode ? '#334155' : '#eee',
                                            isDarkMode ? '#0f172a' : '#f8fafc',
                                            isDarkMode ? '#334155' : '#e2e8f0',
                                            isDarkMode ? '#cbd5e1' : '#334155',
                                            isDarkMode ? '#020617' : '#0f172a'
                                        ]
                                    ]
                                ]) + " " + ((marketIndex.status === 'OPEN' ? 'live-dot' : '') || "")
                            }, void 0, false, {
                                fileName: "[project]/frontend/pages/index.js",
                                lineNumber: 329,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: '11px',
                                    fontWeight: '900',
                                    color: marketIndex.status === 'OPEN' ? '#10b981' : '#f87171'
                                },
                                className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                    [
                                        "2d61b444a67c0314",
                                        [
                                            isDarkMode ? '#0f172a' : '#f1f5f9',
                                            isDarkMode ? '#1e293b' : '#fff',
                                            isDarkMode ? '#f1f5f9' : '#1e293b',
                                            isDarkMode ? '#334155' : 'transparent',
                                            isDarkMode ? '#f8fafc' : '#0f172a',
                                            isDarkMode ? '#94a3b8' : '#666',
                                            isDarkMode ? '#475569' : '#ddd',
                                            isDarkMode ? '#0f172a' : '#fff',
                                            isDarkMode ? '#fff' : '#000',
                                            isDarkMode ? '#1e293b' : 'white',
                                            isDarkMode ? '#f1f5f9' : '#1e293b',
                                            isDarkMode ? '#334155' : 'transparent',
                                            isDarkMode ? '#94a3b8' : '#666',
                                            isDarkMode ? '#0f172a' : '#f8fafc',
                                            isDarkMode ? '#64748b' : '#64748b',
                                            isDarkMode ? '#334155' : '#eee',
                                            isDarkMode ? '#0f172a' : '#f8fafc',
                                            isDarkMode ? '#334155' : '#e2e8f0',
                                            isDarkMode ? '#cbd5e1' : '#334155',
                                            isDarkMode ? '#020617' : '#0f172a'
                                        ]
                                    ]
                                ]),
                                children: [
                                    "MARKET ",
                                    marketIndex.status
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/pages/index.js",
                                lineNumber: 334,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/pages/index.js",
                        lineNumber: 319,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/pages/index.js",
                lineNumber: 306,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("header", {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '20px'
                },
                className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                    [
                        "2d61b444a67c0314",
                        [
                            isDarkMode ? '#0f172a' : '#f1f5f9',
                            isDarkMode ? '#1e293b' : '#fff',
                            isDarkMode ? '#f1f5f9' : '#1e293b',
                            isDarkMode ? '#334155' : 'transparent',
                            isDarkMode ? '#f8fafc' : '#0f172a',
                            isDarkMode ? '#94a3b8' : '#666',
                            isDarkMode ? '#475569' : '#ddd',
                            isDarkMode ? '#0f172a' : '#fff',
                            isDarkMode ? '#fff' : '#000',
                            isDarkMode ? '#1e293b' : 'white',
                            isDarkMode ? '#f1f5f9' : '#1e293b',
                            isDarkMode ? '#334155' : 'transparent',
                            isDarkMode ? '#94a3b8' : '#666',
                            isDarkMode ? '#0f172a' : '#f8fafc',
                            isDarkMode ? '#64748b' : '#64748b',
                            isDarkMode ? '#334155' : '#eee',
                            isDarkMode ? '#0f172a' : '#f8fafc',
                            isDarkMode ? '#334155' : '#e2e8f0',
                            isDarkMode ? '#cbd5e1' : '#334155',
                            isDarkMode ? '#020617' : '#0f172a'
                        ]
                    ]
                ]),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                        style: {
                            margin: 0
                        },
                        className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                            [
                                "2d61b444a67c0314",
                                [
                                    isDarkMode ? '#0f172a' : '#f1f5f9',
                                    isDarkMode ? '#1e293b' : '#fff',
                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                    isDarkMode ? '#334155' : 'transparent',
                                    isDarkMode ? '#f8fafc' : '#0f172a',
                                    isDarkMode ? '#94a3b8' : '#666',
                                    isDarkMode ? '#475569' : '#ddd',
                                    isDarkMode ? '#0f172a' : '#fff',
                                    isDarkMode ? '#fff' : '#000',
                                    isDarkMode ? '#1e293b' : 'white',
                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                    isDarkMode ? '#334155' : 'transparent',
                                    isDarkMode ? '#94a3b8' : '#666',
                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                    isDarkMode ? '#64748b' : '#64748b',
                                    isDarkMode ? '#334155' : '#eee',
                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                    isDarkMode ? '#334155' : '#e2e8f0',
                                    isDarkMode ? '#cbd5e1' : '#334155',
                                    isDarkMode ? '#020617' : '#0f172a'
                                ]
                            ]
                        ]),
                        children: [
                            "Stock Screener (",
                            market,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/pages/index.js",
                        lineNumber: 342,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: '10px'
                        },
                        className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                            [
                                "2d61b444a67c0314",
                                [
                                    isDarkMode ? '#0f172a' : '#f1f5f9',
                                    isDarkMode ? '#1e293b' : '#fff',
                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                    isDarkMode ? '#334155' : 'transparent',
                                    isDarkMode ? '#f8fafc' : '#0f172a',
                                    isDarkMode ? '#94a3b8' : '#666',
                                    isDarkMode ? '#475569' : '#ddd',
                                    isDarkMode ? '#0f172a' : '#fff',
                                    isDarkMode ? '#fff' : '#000',
                                    isDarkMode ? '#1e293b' : 'white',
                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                    isDarkMode ? '#334155' : 'transparent',
                                    isDarkMode ? '#94a3b8' : '#666',
                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                    isDarkMode ? '#64748b' : '#64748b',
                                    isDarkMode ? '#334155' : '#eee',
                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                    isDarkMode ? '#334155' : '#e2e8f0',
                                    isDarkMode ? '#cbd5e1' : '#334155',
                                    isDarkMode ? '#020617' : '#0f172a'
                                ]
                            ]
                        ]),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: toggleDarkMode,
                                style: {
                                    background: isDarkMode ? '#fde047' : '#1e293b',
                                    color: isDarkMode ? '#000' : '#fff',
                                    padding: '6px 12px'
                                },
                                className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                    [
                                        "2d61b444a67c0314",
                                        [
                                            isDarkMode ? '#0f172a' : '#f1f5f9',
                                            isDarkMode ? '#1e293b' : '#fff',
                                            isDarkMode ? '#f1f5f9' : '#1e293b',
                                            isDarkMode ? '#334155' : 'transparent',
                                            isDarkMode ? '#f8fafc' : '#0f172a',
                                            isDarkMode ? '#94a3b8' : '#666',
                                            isDarkMode ? '#475569' : '#ddd',
                                            isDarkMode ? '#0f172a' : '#fff',
                                            isDarkMode ? '#fff' : '#000',
                                            isDarkMode ? '#1e293b' : 'white',
                                            isDarkMode ? '#f1f5f9' : '#1e293b',
                                            isDarkMode ? '#334155' : 'transparent',
                                            isDarkMode ? '#94a3b8' : '#666',
                                            isDarkMode ? '#0f172a' : '#f8fafc',
                                            isDarkMode ? '#64748b' : '#64748b',
                                            isDarkMode ? '#334155' : '#eee',
                                            isDarkMode ? '#0f172a' : '#f8fafc',
                                            isDarkMode ? '#334155' : '#e2e8f0',
                                            isDarkMode ? '#cbd5e1' : '#334155',
                                            isDarkMode ? '#020617' : '#0f172a'
                                        ]
                                    ]
                                ]),
                                children: isDarkMode ? '☀️ Light' : '🌙 Dark'
                            }, void 0, false, {
                                fileName: "[project]/frontend/pages/index.js",
                                lineNumber: 345,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: backToMarket,
                                style: {
                                    background: '#e2e8f0',
                                    color: '#475569'
                                },
                                className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                    [
                                        "2d61b444a67c0314",
                                        [
                                            isDarkMode ? '#0f172a' : '#f1f5f9',
                                            isDarkMode ? '#1e293b' : '#fff',
                                            isDarkMode ? '#f1f5f9' : '#1e293b',
                                            isDarkMode ? '#334155' : 'transparent',
                                            isDarkMode ? '#f8fafc' : '#0f172a',
                                            isDarkMode ? '#94a3b8' : '#666',
                                            isDarkMode ? '#475569' : '#ddd',
                                            isDarkMode ? '#0f172a' : '#fff',
                                            isDarkMode ? '#fff' : '#000',
                                            isDarkMode ? '#1e293b' : 'white',
                                            isDarkMode ? '#f1f5f9' : '#1e293b',
                                            isDarkMode ? '#334155' : 'transparent',
                                            isDarkMode ? '#94a3b8' : '#666',
                                            isDarkMode ? '#0f172a' : '#f8fafc',
                                            isDarkMode ? '#64748b' : '#64748b',
                                            isDarkMode ? '#334155' : '#eee',
                                            isDarkMode ? '#0f172a' : '#f8fafc',
                                            isDarkMode ? '#334155' : '#e2e8f0',
                                            isDarkMode ? '#cbd5e1' : '#334155',
                                            isDarkMode ? '#020617' : '#0f172a'
                                        ]
                                    ]
                                ]),
                                children: "Change Market"
                            }, void 0, false, {
                                fileName: "[project]/frontend/pages/index.js",
                                lineNumber: 351,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/pages/index.js",
                        lineNumber: 343,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/pages/index.js",
                lineNumber: 341,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                style: {
                    border: '2px solid #0b5fff'
                },
                className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                    [
                        "2d61b444a67c0314",
                        [
                            isDarkMode ? '#0f172a' : '#f1f5f9',
                            isDarkMode ? '#1e293b' : '#fff',
                            isDarkMode ? '#f1f5f9' : '#1e293b',
                            isDarkMode ? '#334155' : 'transparent',
                            isDarkMode ? '#f8fafc' : '#0f172a',
                            isDarkMode ? '#94a3b8' : '#666',
                            isDarkMode ? '#475569' : '#ddd',
                            isDarkMode ? '#0f172a' : '#fff',
                            isDarkMode ? '#fff' : '#000',
                            isDarkMode ? '#1e293b' : 'white',
                            isDarkMode ? '#f1f5f9' : '#1e293b',
                            isDarkMode ? '#334155' : 'transparent',
                            isDarkMode ? '#94a3b8' : '#666',
                            isDarkMode ? '#0f172a' : '#f8fafc',
                            isDarkMode ? '#64748b' : '#64748b',
                            isDarkMode ? '#334155' : '#eee',
                            isDarkMode ? '#0f172a' : '#f8fafc',
                            isDarkMode ? '#334155' : '#e2e8f0',
                            isDarkMode ? '#cbd5e1' : '#334155',
                            isDarkMode ? '#020617' : '#0f172a'
                        ]
                    ]
                ]) + " " + "card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                            [
                                "2d61b444a67c0314",
                                [
                                    isDarkMode ? '#0f172a' : '#f1f5f9',
                                    isDarkMode ? '#1e293b' : '#fff',
                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                    isDarkMode ? '#334155' : 'transparent',
                                    isDarkMode ? '#f8fafc' : '#0f172a',
                                    isDarkMode ? '#94a3b8' : '#666',
                                    isDarkMode ? '#475569' : '#ddd',
                                    isDarkMode ? '#0f172a' : '#fff',
                                    isDarkMode ? '#fff' : '#000',
                                    isDarkMode ? '#1e293b' : 'white',
                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                    isDarkMode ? '#334155' : 'transparent',
                                    isDarkMode ? '#94a3b8' : '#666',
                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                    isDarkMode ? '#64748b' : '#64748b',
                                    isDarkMode ? '#334155' : '#eee',
                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                    isDarkMode ? '#334155' : '#e2e8f0',
                                    isDarkMode ? '#cbd5e1' : '#334155',
                                    isDarkMode ? '#020617' : '#0f172a'
                                ]
                            ]
                        ]),
                        children: [
                            "Market Insights (",
                            market,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/pages/index.js",
                        lineNumber: 357,
                        columnNumber: 9
                    }, this),
                    topStocks.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: ()=>fetchTrending(market),
                        style: {
                            background: '#f59e0b'
                        },
                        className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                            [
                                "2d61b444a67c0314",
                                [
                                    isDarkMode ? '#0f172a' : '#f1f5f9',
                                    isDarkMode ? '#1e293b' : '#fff',
                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                    isDarkMode ? '#334155' : 'transparent',
                                    isDarkMode ? '#f8fafc' : '#0f172a',
                                    isDarkMode ? '#94a3b8' : '#666',
                                    isDarkMode ? '#475569' : '#ddd',
                                    isDarkMode ? '#0f172a' : '#fff',
                                    isDarkMode ? '#fff' : '#000',
                                    isDarkMode ? '#1e293b' : 'white',
                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                    isDarkMode ? '#334155' : 'transparent',
                                    isDarkMode ? '#94a3b8' : '#666',
                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                    isDarkMode ? '#64748b' : '#64748b',
                                    isDarkMode ? '#334155' : '#eee',
                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                    isDarkMode ? '#334155' : '#e2e8f0',
                                    isDarkMode ? '#cbd5e1' : '#334155',
                                    isDarkMode ? '#020617' : '#0f172a'
                                ]
                            ]
                        ]),
                        children: "🔥 Show Trending Stocks"
                    }, void 0, false, {
                        fileName: "[project]/frontend/pages/index.js",
                        lineNumber: 359,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                            [
                                "2d61b444a67c0314",
                                [
                                    isDarkMode ? '#0f172a' : '#f1f5f9',
                                    isDarkMode ? '#1e293b' : '#fff',
                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                    isDarkMode ? '#334155' : 'transparent',
                                    isDarkMode ? '#f8fafc' : '#0f172a',
                                    isDarkMode ? '#94a3b8' : '#666',
                                    isDarkMode ? '#475569' : '#ddd',
                                    isDarkMode ? '#0f172a' : '#fff',
                                    isDarkMode ? '#fff' : '#000',
                                    isDarkMode ? '#1e293b' : 'white',
                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                    isDarkMode ? '#334155' : 'transparent',
                                    isDarkMode ? '#94a3b8' : '#666',
                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                    isDarkMode ? '#64748b' : '#64748b',
                                    isDarkMode ? '#334155' : '#eee',
                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                    isDarkMode ? '#334155' : '#e2e8f0',
                                    isDarkMode ? '#cbd5e1' : '#334155',
                                    isDarkMode ? '#020617' : '#0f172a'
                                ]
                            ]
                        ]) + " " + "grid-list",
                        children: [
                            topStocks.map((ticker)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleStockClick(ticker),
                                    style: {
                                        background: '#0b5fff',
                                        color: 'white',
                                        borderRadius: '20px',
                                        padding: '8px 16px',
                                        border: 'none',
                                        cursor: 'pointer',
                                        fontWeight: 'bold'
                                    },
                                    className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                        [
                                            "2d61b444a67c0314",
                                            [
                                                isDarkMode ? '#0f172a' : '#f1f5f9',
                                                isDarkMode ? '#1e293b' : '#fff',
                                                isDarkMode ? '#f1f5f9' : '#1e293b',
                                                isDarkMode ? '#334155' : 'transparent',
                                                isDarkMode ? '#f8fafc' : '#0f172a',
                                                isDarkMode ? '#94a3b8' : '#666',
                                                isDarkMode ? '#475569' : '#ddd',
                                                isDarkMode ? '#0f172a' : '#fff',
                                                isDarkMode ? '#fff' : '#000',
                                                isDarkMode ? '#1e293b' : 'white',
                                                isDarkMode ? '#f1f5f9' : '#1e293b',
                                                isDarkMode ? '#334155' : 'transparent',
                                                isDarkMode ? '#94a3b8' : '#666',
                                                isDarkMode ? '#0f172a' : '#f8fafc',
                                                isDarkMode ? '#64748b' : '#64748b',
                                                isDarkMode ? '#334155' : '#eee',
                                                isDarkMode ? '#0f172a' : '#f8fafc',
                                                isDarkMode ? '#334155' : '#e2e8f0',
                                                isDarkMode ? '#cbd5e1' : '#334155',
                                                isDarkMode ? '#020617' : '#0f172a'
                                            ]
                                        ]
                                    ]) + " " + "stock-pill",
                                    children: ticker.replace('.NS', '').replace('.BO', '')
                                }, ticker, false, {
                                    fileName: "[project]/frontend/pages/index.js",
                                    lineNumber: 363,
                                    columnNumber: 15
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: ()=>setTopStocks([]),
                                style: {
                                    background: 'none',
                                    color: '#666'
                                },
                                className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                    [
                                        "2d61b444a67c0314",
                                        [
                                            isDarkMode ? '#0f172a' : '#f1f5f9',
                                            isDarkMode ? '#1e293b' : '#fff',
                                            isDarkMode ? '#f1f5f9' : '#1e293b',
                                            isDarkMode ? '#334155' : 'transparent',
                                            isDarkMode ? '#f8fafc' : '#0f172a',
                                            isDarkMode ? '#94a3b8' : '#666',
                                            isDarkMode ? '#475569' : '#ddd',
                                            isDarkMode ? '#0f172a' : '#fff',
                                            isDarkMode ? '#fff' : '#000',
                                            isDarkMode ? '#1e293b' : 'white',
                                            isDarkMode ? '#f1f5f9' : '#1e293b',
                                            isDarkMode ? '#334155' : 'transparent',
                                            isDarkMode ? '#94a3b8' : '#666',
                                            isDarkMode ? '#0f172a' : '#f8fafc',
                                            isDarkMode ? '#64748b' : '#64748b',
                                            isDarkMode ? '#334155' : '#eee',
                                            isDarkMode ? '#0f172a' : '#f8fafc',
                                            isDarkMode ? '#334155' : '#e2e8f0',
                                            isDarkMode ? '#cbd5e1' : '#334155',
                                            isDarkMode ? '#020617' : '#0f172a'
                                        ]
                                    ]
                                ]),
                                children: "(Hide)"
                            }, void 0, false, {
                                fileName: "[project]/frontend/pages/index.js",
                                lineNumber: 381,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/pages/index.js",
                        lineNumber: 361,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/pages/index.js",
                lineNumber: 356,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                    [
                        "2d61b444a67c0314",
                        [
                            isDarkMode ? '#0f172a' : '#f1f5f9',
                            isDarkMode ? '#1e293b' : '#fff',
                            isDarkMode ? '#f1f5f9' : '#1e293b',
                            isDarkMode ? '#334155' : 'transparent',
                            isDarkMode ? '#f8fafc' : '#0f172a',
                            isDarkMode ? '#94a3b8' : '#666',
                            isDarkMode ? '#475569' : '#ddd',
                            isDarkMode ? '#0f172a' : '#fff',
                            isDarkMode ? '#fff' : '#000',
                            isDarkMode ? '#1e293b' : 'white',
                            isDarkMode ? '#f1f5f9' : '#1e293b',
                            isDarkMode ? '#334155' : 'transparent',
                            isDarkMode ? '#94a3b8' : '#666',
                            isDarkMode ? '#0f172a' : '#f8fafc',
                            isDarkMode ? '#64748b' : '#64748b',
                            isDarkMode ? '#334155' : '#eee',
                            isDarkMode ? '#0f172a' : '#f8fafc',
                            isDarkMode ? '#334155' : '#e2e8f0',
                            isDarkMode ? '#cbd5e1' : '#334155',
                            isDarkMode ? '#020617' : '#0f172a'
                        ]
                    ]
                ]) + " " + "card",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
                    onSubmit: runScreener,
                    className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                        [
                            "2d61b444a67c0314",
                            [
                                isDarkMode ? '#0f172a' : '#f1f5f9',
                                isDarkMode ? '#1e293b' : '#fff',
                                isDarkMode ? '#f1f5f9' : '#1e293b',
                                isDarkMode ? '#334155' : 'transparent',
                                isDarkMode ? '#f8fafc' : '#0f172a',
                                isDarkMode ? '#94a3b8' : '#666',
                                isDarkMode ? '#475569' : '#ddd',
                                isDarkMode ? '#0f172a' : '#fff',
                                isDarkMode ? '#fff' : '#000',
                                isDarkMode ? '#1e293b' : 'white',
                                isDarkMode ? '#f1f5f9' : '#1e293b',
                                isDarkMode ? '#334155' : 'transparent',
                                isDarkMode ? '#94a3b8' : '#666',
                                isDarkMode ? '#0f172a' : '#f8fafc',
                                isDarkMode ? '#64748b' : '#64748b',
                                isDarkMode ? '#334155' : '#eee',
                                isDarkMode ? '#0f172a' : '#f8fafc',
                                isDarkMode ? '#334155' : '#e2e8f0',
                                isDarkMode ? '#cbd5e1' : '#334155',
                                isDarkMode ? '#020617' : '#0f172a'
                            ]
                        ]
                    ]),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                            className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                [
                                    "2d61b444a67c0314",
                                    [
                                        isDarkMode ? '#0f172a' : '#f1f5f9',
                                        isDarkMode ? '#1e293b' : '#fff',
                                        isDarkMode ? '#f1f5f9' : '#1e293b',
                                        isDarkMode ? '#334155' : 'transparent',
                                        isDarkMode ? '#f8fafc' : '#0f172a',
                                        isDarkMode ? '#94a3b8' : '#666',
                                        isDarkMode ? '#475569' : '#ddd',
                                        isDarkMode ? '#0f172a' : '#fff',
                                        isDarkMode ? '#fff' : '#000',
                                        isDarkMode ? '#1e293b' : 'white',
                                        isDarkMode ? '#f1f5f9' : '#1e293b',
                                        isDarkMode ? '#334155' : 'transparent',
                                        isDarkMode ? '#94a3b8' : '#666',
                                        isDarkMode ? '#0f172a' : '#f8fafc',
                                        isDarkMode ? '#64748b' : '#64748b',
                                        isDarkMode ? '#334155' : '#eee',
                                        isDarkMode ? '#0f172a' : '#f8fafc',
                                        isDarkMode ? '#334155' : '#e2e8f0',
                                        isDarkMode ? '#cbd5e1' : '#334155',
                                        isDarkMode ? '#020617' : '#0f172a'
                                    ]
                                ]
                            ]),
                            children: "Tickers"
                        }, void 0, false, {
                            fileName: "[project]/frontend/pages/index.js",
                            lineNumber: 389,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                            value: tickers,
                            onChange: (e)=>setTickers(e.target.value),
                            className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                [
                                    "2d61b444a67c0314",
                                    [
                                        isDarkMode ? '#0f172a' : '#f1f5f9',
                                        isDarkMode ? '#1e293b' : '#fff',
                                        isDarkMode ? '#f1f5f9' : '#1e293b',
                                        isDarkMode ? '#334155' : 'transparent',
                                        isDarkMode ? '#f8fafc' : '#0f172a',
                                        isDarkMode ? '#94a3b8' : '#666',
                                        isDarkMode ? '#475569' : '#ddd',
                                        isDarkMode ? '#0f172a' : '#fff',
                                        isDarkMode ? '#fff' : '#000',
                                        isDarkMode ? '#1e293b' : 'white',
                                        isDarkMode ? '#f1f5f9' : '#1e293b',
                                        isDarkMode ? '#334155' : 'transparent',
                                        isDarkMode ? '#94a3b8' : '#666',
                                        isDarkMode ? '#0f172a' : '#f8fafc',
                                        isDarkMode ? '#64748b' : '#64748b',
                                        isDarkMode ? '#334155' : '#eee',
                                        isDarkMode ? '#0f172a' : '#f8fafc',
                                        isDarkMode ? '#334155' : '#e2e8f0',
                                        isDarkMode ? '#cbd5e1' : '#334155',
                                        isDarkMode ? '#020617' : '#0f172a'
                                    ]
                                ]
                            ])
                        }, void 0, false, {
                            fileName: "[project]/frontend/pages/index.js",
                            lineNumber: 390,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: '10px'
                            },
                            className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                [
                                    "2d61b444a67c0314",
                                    [
                                        isDarkMode ? '#0f172a' : '#f1f5f9',
                                        isDarkMode ? '#1e293b' : '#fff',
                                        isDarkMode ? '#f1f5f9' : '#1e293b',
                                        isDarkMode ? '#334155' : 'transparent',
                                        isDarkMode ? '#f8fafc' : '#0f172a',
                                        isDarkMode ? '#94a3b8' : '#666',
                                        isDarkMode ? '#475569' : '#ddd',
                                        isDarkMode ? '#0f172a' : '#fff',
                                        isDarkMode ? '#fff' : '#000',
                                        isDarkMode ? '#1e293b' : 'white',
                                        isDarkMode ? '#f1f5f9' : '#1e293b',
                                        isDarkMode ? '#334155' : 'transparent',
                                        isDarkMode ? '#94a3b8' : '#666',
                                        isDarkMode ? '#0f172a' : '#f8fafc',
                                        isDarkMode ? '#64748b' : '#64748b',
                                        isDarkMode ? '#334155' : '#eee',
                                        isDarkMode ? '#0f172a' : '#f8fafc',
                                        isDarkMode ? '#334155' : '#e2e8f0',
                                        isDarkMode ? '#cbd5e1' : '#334155',
                                        isDarkMode ? '#020617' : '#0f172a'
                                    ]
                                ]
                            ]),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: {
                                        flex: 1
                                    },
                                    className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                        [
                                            "2d61b444a67c0314",
                                            [
                                                isDarkMode ? '#0f172a' : '#f1f5f9',
                                                isDarkMode ? '#1e293b' : '#fff',
                                                isDarkMode ? '#f1f5f9' : '#1e293b',
                                                isDarkMode ? '#334155' : 'transparent',
                                                isDarkMode ? '#f8fafc' : '#0f172a',
                                                isDarkMode ? '#94a3b8' : '#666',
                                                isDarkMode ? '#475569' : '#ddd',
                                                isDarkMode ? '#0f172a' : '#fff',
                                                isDarkMode ? '#fff' : '#000',
                                                isDarkMode ? '#1e293b' : 'white',
                                                isDarkMode ? '#f1f5f9' : '#1e293b',
                                                isDarkMode ? '#334155' : 'transparent',
                                                isDarkMode ? '#94a3b8' : '#666',
                                                isDarkMode ? '#0f172a' : '#f8fafc',
                                                isDarkMode ? '#64748b' : '#64748b',
                                                isDarkMode ? '#334155' : '#eee',
                                                isDarkMode ? '#0f172a' : '#f8fafc',
                                                isDarkMode ? '#334155' : '#e2e8f0',
                                                isDarkMode ? '#cbd5e1' : '#334155',
                                                isDarkMode ? '#020617' : '#0f172a'
                                            ]
                                        ]
                                    ]),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                            className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                                [
                                                    "2d61b444a67c0314",
                                                    [
                                                        isDarkMode ? '#0f172a' : '#f1f5f9',
                                                        isDarkMode ? '#1e293b' : '#fff',
                                                        isDarkMode ? '#f1f5f9' : '#1e293b',
                                                        isDarkMode ? '#334155' : 'transparent',
                                                        isDarkMode ? '#f8fafc' : '#0f172a',
                                                        isDarkMode ? '#94a3b8' : '#666',
                                                        isDarkMode ? '#475569' : '#ddd',
                                                        isDarkMode ? '#0f172a' : '#fff',
                                                        isDarkMode ? '#fff' : '#000',
                                                        isDarkMode ? '#1e293b' : 'white',
                                                        isDarkMode ? '#f1f5f9' : '#1e293b',
                                                        isDarkMode ? '#334155' : 'transparent',
                                                        isDarkMode ? '#94a3b8' : '#666',
                                                        isDarkMode ? '#0f172a' : '#f8fafc',
                                                        isDarkMode ? '#64748b' : '#64748b',
                                                        isDarkMode ? '#334155' : '#eee',
                                                        isDarkMode ? '#0f172a' : '#f8fafc',
                                                        isDarkMode ? '#334155' : '#e2e8f0',
                                                        isDarkMode ? '#cbd5e1' : '#334155',
                                                        isDarkMode ? '#020617' : '#0f172a'
                                                    ]
                                                ]
                                            ]),
                                            children: "Min CAGR %"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/pages/index.js",
                                            lineNumber: 392,
                                            columnNumber: 36
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            value: minCagr,
                                            onChange: (e)=>setMinCagr(e.target.value),
                                            style: {
                                                width: '100%'
                                            },
                                            className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                                [
                                                    "2d61b444a67c0314",
                                                    [
                                                        isDarkMode ? '#0f172a' : '#f1f5f9',
                                                        isDarkMode ? '#1e293b' : '#fff',
                                                        isDarkMode ? '#f1f5f9' : '#1e293b',
                                                        isDarkMode ? '#334155' : 'transparent',
                                                        isDarkMode ? '#f8fafc' : '#0f172a',
                                                        isDarkMode ? '#94a3b8' : '#666',
                                                        isDarkMode ? '#475569' : '#ddd',
                                                        isDarkMode ? '#0f172a' : '#fff',
                                                        isDarkMode ? '#fff' : '#000',
                                                        isDarkMode ? '#1e293b' : 'white',
                                                        isDarkMode ? '#f1f5f9' : '#1e293b',
                                                        isDarkMode ? '#334155' : 'transparent',
                                                        isDarkMode ? '#94a3b8' : '#666',
                                                        isDarkMode ? '#0f172a' : '#f8fafc',
                                                        isDarkMode ? '#64748b' : '#64748b',
                                                        isDarkMode ? '#334155' : '#eee',
                                                        isDarkMode ? '#0f172a' : '#f8fafc',
                                                        isDarkMode ? '#334155' : '#e2e8f0',
                                                        isDarkMode ? '#cbd5e1' : '#334155',
                                                        isDarkMode ? '#020617' : '#0f172a'
                                                    ]
                                                ]
                                            ])
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/pages/index.js",
                                            lineNumber: 392,
                                            columnNumber: 61
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/pages/index.js",
                                    lineNumber: 392,
                                    columnNumber: 14
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: {
                                        flex: 1
                                    },
                                    className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                        [
                                            "2d61b444a67c0314",
                                            [
                                                isDarkMode ? '#0f172a' : '#f1f5f9',
                                                isDarkMode ? '#1e293b' : '#fff',
                                                isDarkMode ? '#f1f5f9' : '#1e293b',
                                                isDarkMode ? '#334155' : 'transparent',
                                                isDarkMode ? '#f8fafc' : '#0f172a',
                                                isDarkMode ? '#94a3b8' : '#666',
                                                isDarkMode ? '#475569' : '#ddd',
                                                isDarkMode ? '#0f172a' : '#fff',
                                                isDarkMode ? '#fff' : '#000',
                                                isDarkMode ? '#1e293b' : 'white',
                                                isDarkMode ? '#f1f5f9' : '#1e293b',
                                                isDarkMode ? '#334155' : 'transparent',
                                                isDarkMode ? '#94a3b8' : '#666',
                                                isDarkMode ? '#0f172a' : '#f8fafc',
                                                isDarkMode ? '#64748b' : '#64748b',
                                                isDarkMode ? '#334155' : '#eee',
                                                isDarkMode ? '#0f172a' : '#f8fafc',
                                                isDarkMode ? '#334155' : '#e2e8f0',
                                                isDarkMode ? '#cbd5e1' : '#334155',
                                                isDarkMode ? '#020617' : '#0f172a'
                                            ]
                                        ]
                                    ]),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                            className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                                [
                                                    "2d61b444a67c0314",
                                                    [
                                                        isDarkMode ? '#0f172a' : '#f1f5f9',
                                                        isDarkMode ? '#1e293b' : '#fff',
                                                        isDarkMode ? '#f1f5f9' : '#1e293b',
                                                        isDarkMode ? '#334155' : 'transparent',
                                                        isDarkMode ? '#f8fafc' : '#0f172a',
                                                        isDarkMode ? '#94a3b8' : '#666',
                                                        isDarkMode ? '#475569' : '#ddd',
                                                        isDarkMode ? '#0f172a' : '#fff',
                                                        isDarkMode ? '#fff' : '#000',
                                                        isDarkMode ? '#1e293b' : 'white',
                                                        isDarkMode ? '#f1f5f9' : '#1e293b',
                                                        isDarkMode ? '#334155' : 'transparent',
                                                        isDarkMode ? '#94a3b8' : '#666',
                                                        isDarkMode ? '#0f172a' : '#f8fafc',
                                                        isDarkMode ? '#64748b' : '#64748b',
                                                        isDarkMode ? '#334155' : '#eee',
                                                        isDarkMode ? '#0f172a' : '#f8fafc',
                                                        isDarkMode ? '#334155' : '#e2e8f0',
                                                        isDarkMode ? '#cbd5e1' : '#334155',
                                                        isDarkMode ? '#020617' : '#0f172a'
                                                    ]
                                                ]
                                            ]),
                                            children: "Years"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/pages/index.js",
                                            lineNumber: 393,
                                            columnNumber: 36
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            value: years,
                                            onChange: (e)=>setYears(e.target.value),
                                            style: {
                                                width: '100%'
                                            },
                                            className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                                [
                                                    "2d61b444a67c0314",
                                                    [
                                                        isDarkMode ? '#0f172a' : '#f1f5f9',
                                                        isDarkMode ? '#1e293b' : '#fff',
                                                        isDarkMode ? '#f1f5f9' : '#1e293b',
                                                        isDarkMode ? '#334155' : 'transparent',
                                                        isDarkMode ? '#f8fafc' : '#0f172a',
                                                        isDarkMode ? '#94a3b8' : '#666',
                                                        isDarkMode ? '#475569' : '#ddd',
                                                        isDarkMode ? '#0f172a' : '#fff',
                                                        isDarkMode ? '#fff' : '#000',
                                                        isDarkMode ? '#1e293b' : 'white',
                                                        isDarkMode ? '#f1f5f9' : '#1e293b',
                                                        isDarkMode ? '#334155' : 'transparent',
                                                        isDarkMode ? '#94a3b8' : '#666',
                                                        isDarkMode ? '#0f172a' : '#f8fafc',
                                                        isDarkMode ? '#64748b' : '#64748b',
                                                        isDarkMode ? '#334155' : '#eee',
                                                        isDarkMode ? '#0f172a' : '#f8fafc',
                                                        isDarkMode ? '#334155' : '#e2e8f0',
                                                        isDarkMode ? '#cbd5e1' : '#334155',
                                                        isDarkMode ? '#020617' : '#0f172a'
                                                    ]
                                                ]
                                            ])
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/pages/index.js",
                                            lineNumber: 393,
                                            columnNumber: 56
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/pages/index.js",
                                    lineNumber: 393,
                                    columnNumber: 14
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/pages/index.js",
                            lineNumber: 391,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: loading,
                            style: {
                                marginTop: '10px'
                            },
                            className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                [
                                    "2d61b444a67c0314",
                                    [
                                        isDarkMode ? '#0f172a' : '#f1f5f9',
                                        isDarkMode ? '#1e293b' : '#fff',
                                        isDarkMode ? '#f1f5f9' : '#1e293b',
                                        isDarkMode ? '#334155' : 'transparent',
                                        isDarkMode ? '#f8fafc' : '#0f172a',
                                        isDarkMode ? '#94a3b8' : '#666',
                                        isDarkMode ? '#475569' : '#ddd',
                                        isDarkMode ? '#0f172a' : '#fff',
                                        isDarkMode ? '#fff' : '#000',
                                        isDarkMode ? '#1e293b' : 'white',
                                        isDarkMode ? '#f1f5f9' : '#1e293b',
                                        isDarkMode ? '#334155' : 'transparent',
                                        isDarkMode ? '#94a3b8' : '#666',
                                        isDarkMode ? '#0f172a' : '#f8fafc',
                                        isDarkMode ? '#64748b' : '#64748b',
                                        isDarkMode ? '#334155' : '#eee',
                                        isDarkMode ? '#0f172a' : '#f8fafc',
                                        isDarkMode ? '#334155' : '#e2e8f0',
                                        isDarkMode ? '#cbd5e1' : '#334155',
                                        isDarkMode ? '#020617' : '#0f172a'
                                    ]
                                ]
                            ]),
                            children: loading ? 'Running...' : 'Run Screener'
                        }, void 0, false, {
                            fileName: "[project]/frontend/pages/index.js",
                            lineNumber: 395,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/pages/index.js",
                    lineNumber: 388,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/pages/index.js",
                lineNumber: 387,
                columnNumber: 7
            }, this),
            results.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                    [
                        "2d61b444a67c0314",
                        [
                            isDarkMode ? '#0f172a' : '#f1f5f9',
                            isDarkMode ? '#1e293b' : '#fff',
                            isDarkMode ? '#f1f5f9' : '#1e293b',
                            isDarkMode ? '#334155' : 'transparent',
                            isDarkMode ? '#f8fafc' : '#0f172a',
                            isDarkMode ? '#94a3b8' : '#666',
                            isDarkMode ? '#475569' : '#ddd',
                            isDarkMode ? '#0f172a' : '#fff',
                            isDarkMode ? '#fff' : '#000',
                            isDarkMode ? '#1e293b' : 'white',
                            isDarkMode ? '#f1f5f9' : '#1e293b',
                            isDarkMode ? '#334155' : 'transparent',
                            isDarkMode ? '#94a3b8' : '#666',
                            isDarkMode ? '#0f172a' : '#f8fafc',
                            isDarkMode ? '#64748b' : '#64748b',
                            isDarkMode ? '#334155' : '#eee',
                            isDarkMode ? '#0f172a' : '#f8fafc',
                            isDarkMode ? '#334155' : '#e2e8f0',
                            isDarkMode ? '#cbd5e1' : '#334155',
                            isDarkMode ? '#020617' : '#0f172a'
                        ]
                    ]
                ]) + " " + "card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                            [
                                "2d61b444a67c0314",
                                [
                                    isDarkMode ? '#0f172a' : '#f1f5f9',
                                    isDarkMode ? '#1e293b' : '#fff',
                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                    isDarkMode ? '#334155' : 'transparent',
                                    isDarkMode ? '#f8fafc' : '#0f172a',
                                    isDarkMode ? '#94a3b8' : '#666',
                                    isDarkMode ? '#475569' : '#ddd',
                                    isDarkMode ? '#0f172a' : '#fff',
                                    isDarkMode ? '#fff' : '#000',
                                    isDarkMode ? '#1e293b' : 'white',
                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                    isDarkMode ? '#334155' : 'transparent',
                                    isDarkMode ? '#94a3b8' : '#666',
                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                    isDarkMode ? '#64748b' : '#64748b',
                                    isDarkMode ? '#334155' : '#eee',
                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                    isDarkMode ? '#334155' : '#e2e8f0',
                                    isDarkMode ? '#cbd5e1' : '#334155',
                                    isDarkMode ? '#020617' : '#0f172a'
                                ]
                            ]
                        ]),
                        children: "Results"
                    }, void 0, false, {
                        fileName: "[project]/frontend/pages/index.js",
                        lineNumber: 402,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                        className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                            [
                                "2d61b444a67c0314",
                                [
                                    isDarkMode ? '#0f172a' : '#f1f5f9',
                                    isDarkMode ? '#1e293b' : '#fff',
                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                    isDarkMode ? '#334155' : 'transparent',
                                    isDarkMode ? '#f8fafc' : '#0f172a',
                                    isDarkMode ? '#94a3b8' : '#666',
                                    isDarkMode ? '#475569' : '#ddd',
                                    isDarkMode ? '#0f172a' : '#fff',
                                    isDarkMode ? '#fff' : '#000',
                                    isDarkMode ? '#1e293b' : 'white',
                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                    isDarkMode ? '#334155' : 'transparent',
                                    isDarkMode ? '#94a3b8' : '#666',
                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                    isDarkMode ? '#64748b' : '#64748b',
                                    isDarkMode ? '#334155' : '#eee',
                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                    isDarkMode ? '#334155' : '#e2e8f0',
                                    isDarkMode ? '#cbd5e1' : '#334155',
                                    isDarkMode ? '#020617' : '#0f172a'
                                ]
                            ]
                        ]),
                        children: results.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                    [
                                        "2d61b444a67c0314",
                                        [
                                            isDarkMode ? '#0f172a' : '#f1f5f9',
                                            isDarkMode ? '#1e293b' : '#fff',
                                            isDarkMode ? '#f1f5f9' : '#1e293b',
                                            isDarkMode ? '#334155' : 'transparent',
                                            isDarkMode ? '#f8fafc' : '#0f172a',
                                            isDarkMode ? '#94a3b8' : '#666',
                                            isDarkMode ? '#475569' : '#ddd',
                                            isDarkMode ? '#0f172a' : '#fff',
                                            isDarkMode ? '#fff' : '#000',
                                            isDarkMode ? '#1e293b' : 'white',
                                            isDarkMode ? '#f1f5f9' : '#1e293b',
                                            isDarkMode ? '#334155' : 'transparent',
                                            isDarkMode ? '#94a3b8' : '#666',
                                            isDarkMode ? '#0f172a' : '#f8fafc',
                                            isDarkMode ? '#64748b' : '#64748b',
                                            isDarkMode ? '#334155' : '#eee',
                                            isDarkMode ? '#0f172a' : '#f8fafc',
                                            isDarkMode ? '#334155' : '#e2e8f0',
                                            isDarkMode ? '#cbd5e1' : '#334155',
                                            isDarkMode ? '#020617' : '#0f172a'
                                        ]
                                    ]
                                ]) + " " + "result",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                            [
                                                "2d61b444a67c0314",
                                                [
                                                    isDarkMode ? '#0f172a' : '#f1f5f9',
                                                    isDarkMode ? '#1e293b' : '#fff',
                                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                                    isDarkMode ? '#334155' : 'transparent',
                                                    isDarkMode ? '#f8fafc' : '#0f172a',
                                                    isDarkMode ? '#94a3b8' : '#666',
                                                    isDarkMode ? '#475569' : '#ddd',
                                                    isDarkMode ? '#0f172a' : '#fff',
                                                    isDarkMode ? '#fff' : '#000',
                                                    isDarkMode ? '#1e293b' : 'white',
                                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                                    isDarkMode ? '#334155' : 'transparent',
                                                    isDarkMode ? '#94a3b8' : '#666',
                                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                                    isDarkMode ? '#64748b' : '#64748b',
                                                    isDarkMode ? '#334155' : '#eee',
                                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                                    isDarkMode ? '#334155' : '#e2e8f0',
                                                    isDarkMode ? '#cbd5e1' : '#334155',
                                                    isDarkMode ? '#020617' : '#0f172a'
                                                ]
                                            ]
                                        ]),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                                className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                                    [
                                                        "2d61b444a67c0314",
                                                        [
                                                            isDarkMode ? '#0f172a' : '#f1f5f9',
                                                            isDarkMode ? '#1e293b' : '#fff',
                                                            isDarkMode ? '#f1f5f9' : '#1e293b',
                                                            isDarkMode ? '#334155' : 'transparent',
                                                            isDarkMode ? '#f8fafc' : '#0f172a',
                                                            isDarkMode ? '#94a3b8' : '#666',
                                                            isDarkMode ? '#475569' : '#ddd',
                                                            isDarkMode ? '#0f172a' : '#fff',
                                                            isDarkMode ? '#fff' : '#000',
                                                            isDarkMode ? '#1e293b' : 'white',
                                                            isDarkMode ? '#f1f5f9' : '#1e293b',
                                                            isDarkMode ? '#334155' : 'transparent',
                                                            isDarkMode ? '#94a3b8' : '#666',
                                                            isDarkMode ? '#0f172a' : '#f8fafc',
                                                            isDarkMode ? '#64748b' : '#64748b',
                                                            isDarkMode ? '#334155' : '#eee',
                                                            isDarkMode ? '#0f172a' : '#f8fafc',
                                                            isDarkMode ? '#334155' : '#e2e8f0',
                                                            isDarkMode ? '#cbd5e1' : '#334155',
                                                            isDarkMode ? '#020617' : '#0f172a'
                                                        ]
                                                    ]
                                                ]),
                                                children: r.ticker
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/pages/index.js",
                                                lineNumber: 406,
                                                columnNumber: 22
                                            }, this),
                                            " (CAGR: ",
                                            r.cagr_pct,
                                            "%)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/pages/index.js",
                                        lineNumber: 406,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                            [
                                                "2d61b444a67c0314",
                                                [
                                                    isDarkMode ? '#0f172a' : '#f1f5f9',
                                                    isDarkMode ? '#1e293b' : '#fff',
                                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                                    isDarkMode ? '#334155' : 'transparent',
                                                    isDarkMode ? '#f8fafc' : '#0f172a',
                                                    isDarkMode ? '#94a3b8' : '#666',
                                                    isDarkMode ? '#475569' : '#ddd',
                                                    isDarkMode ? '#0f172a' : '#fff',
                                                    isDarkMode ? '#fff' : '#000',
                                                    isDarkMode ? '#1e293b' : 'white',
                                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                                    isDarkMode ? '#334155' : 'transparent',
                                                    isDarkMode ? '#94a3b8' : '#666',
                                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                                    isDarkMode ? '#64748b' : '#64748b',
                                                    isDarkMode ? '#334155' : '#eee',
                                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                                    isDarkMode ? '#334155' : '#e2e8f0',
                                                    isDarkMode ? '#cbd5e1' : '#334155',
                                                    isDarkMode ? '#020617' : '#0f172a'
                                                ]
                                            ]
                                        ]) + " " + "actions",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                onClick: ()=>showChart(r.ticker),
                                                className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                                    [
                                                        "2d61b444a67c0314",
                                                        [
                                                            isDarkMode ? '#0f172a' : '#f1f5f9',
                                                            isDarkMode ? '#1e293b' : '#fff',
                                                            isDarkMode ? '#f1f5f9' : '#1e293b',
                                                            isDarkMode ? '#334155' : 'transparent',
                                                            isDarkMode ? '#f8fafc' : '#0f172a',
                                                            isDarkMode ? '#94a3b8' : '#666',
                                                            isDarkMode ? '#475569' : '#ddd',
                                                            isDarkMode ? '#0f172a' : '#fff',
                                                            isDarkMode ? '#fff' : '#000',
                                                            isDarkMode ? '#1e293b' : 'white',
                                                            isDarkMode ? '#f1f5f9' : '#1e293b',
                                                            isDarkMode ? '#334155' : 'transparent',
                                                            isDarkMode ? '#94a3b8' : '#666',
                                                            isDarkMode ? '#0f172a' : '#f8fafc',
                                                            isDarkMode ? '#64748b' : '#64748b',
                                                            isDarkMode ? '#334155' : '#eee',
                                                            isDarkMode ? '#0f172a' : '#f8fafc',
                                                            isDarkMode ? '#334155' : '#e2e8f0',
                                                            isDarkMode ? '#cbd5e1' : '#334155',
                                                            isDarkMode ? '#020617' : '#0f172a'
                                                        ]
                                                    ]
                                                ]),
                                                children: "Chart"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/pages/index.js",
                                                lineNumber: 408,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                onClick: ()=>askRecommend(r.ticker),
                                                style: {
                                                    background: '#10b981'
                                                },
                                                className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                                    [
                                                        "2d61b444a67c0314",
                                                        [
                                                            isDarkMode ? '#0f172a' : '#f1f5f9',
                                                            isDarkMode ? '#1e293b' : '#fff',
                                                            isDarkMode ? '#f1f5f9' : '#1e293b',
                                                            isDarkMode ? '#334155' : 'transparent',
                                                            isDarkMode ? '#f8fafc' : '#0f172a',
                                                            isDarkMode ? '#94a3b8' : '#666',
                                                            isDarkMode ? '#475569' : '#ddd',
                                                            isDarkMode ? '#0f172a' : '#fff',
                                                            isDarkMode ? '#fff' : '#000',
                                                            isDarkMode ? '#1e293b' : 'white',
                                                            isDarkMode ? '#f1f5f9' : '#1e293b',
                                                            isDarkMode ? '#334155' : 'transparent',
                                                            isDarkMode ? '#94a3b8' : '#666',
                                                            isDarkMode ? '#0f172a' : '#f8fafc',
                                                            isDarkMode ? '#64748b' : '#64748b',
                                                            isDarkMode ? '#334155' : '#eee',
                                                            isDarkMode ? '#0f172a' : '#f8fafc',
                                                            isDarkMode ? '#334155' : '#e2e8f0',
                                                            isDarkMode ? '#cbd5e1' : '#334155',
                                                            isDarkMode ? '#020617' : '#0f172a'
                                                        ]
                                                    ]
                                                ]),
                                                children: "AI Advice"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/pages/index.js",
                                                lineNumber: 409,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/pages/index.js",
                                        lineNumber: 407,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, r.ticker, true, {
                                fileName: "[project]/frontend/pages/index.js",
                                lineNumber: 405,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/frontend/pages/index.js",
                        lineNumber: 403,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/pages/index.js",
                lineNumber: 401,
                columnNumber: 9
            }, this),
            selectedChart && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                id: "chart-view",
                className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                    [
                        "2d61b444a67c0314",
                        [
                            isDarkMode ? '#0f172a' : '#f1f5f9',
                            isDarkMode ? '#1e293b' : '#fff',
                            isDarkMode ? '#f1f5f9' : '#1e293b',
                            isDarkMode ? '#334155' : 'transparent',
                            isDarkMode ? '#f8fafc' : '#0f172a',
                            isDarkMode ? '#94a3b8' : '#666',
                            isDarkMode ? '#475569' : '#ddd',
                            isDarkMode ? '#0f172a' : '#fff',
                            isDarkMode ? '#fff' : '#000',
                            isDarkMode ? '#1e293b' : 'white',
                            isDarkMode ? '#f1f5f9' : '#1e293b',
                            isDarkMode ? '#334155' : 'transparent',
                            isDarkMode ? '#94a3b8' : '#666',
                            isDarkMode ? '#0f172a' : '#f8fafc',
                            isDarkMode ? '#64748b' : '#64748b',
                            isDarkMode ? '#334155' : '#eee',
                            isDarkMode ? '#0f172a' : '#f8fafc',
                            isDarkMode ? '#334155' : '#e2e8f0',
                            isDarkMode ? '#cbd5e1' : '#334155',
                            isDarkMode ? '#020617' : '#0f172a'
                        ]
                    ]
                ]) + " " + "card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                            [
                                "2d61b444a67c0314",
                                [
                                    isDarkMode ? '#0f172a' : '#f1f5f9',
                                    isDarkMode ? '#1e293b' : '#fff',
                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                    isDarkMode ? '#334155' : 'transparent',
                                    isDarkMode ? '#f8fafc' : '#0f172a',
                                    isDarkMode ? '#94a3b8' : '#666',
                                    isDarkMode ? '#475569' : '#ddd',
                                    isDarkMode ? '#0f172a' : '#fff',
                                    isDarkMode ? '#fff' : '#000',
                                    isDarkMode ? '#1e293b' : 'white',
                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                    isDarkMode ? '#334155' : 'transparent',
                                    isDarkMode ? '#94a3b8' : '#666',
                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                    isDarkMode ? '#64748b' : '#64748b',
                                    isDarkMode ? '#334155' : '#eee',
                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                    isDarkMode ? '#334155' : '#e2e8f0',
                                    isDarkMode ? '#cbd5e1' : '#334155',
                                    isDarkMode ? '#020617' : '#0f172a'
                                ]
                            ]
                        ]),
                        children: [
                            selectedChart.ticker,
                            " Performance"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/pages/index.js",
                        lineNumber: 420,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            width: '100%',
                            height: 350
                        },
                        className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                            [
                                "2d61b444a67c0314",
                                [
                                    isDarkMode ? '#0f172a' : '#f1f5f9',
                                    isDarkMode ? '#1e293b' : '#fff',
                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                    isDarkMode ? '#334155' : 'transparent',
                                    isDarkMode ? '#f8fafc' : '#0f172a',
                                    isDarkMode ? '#94a3b8' : '#666',
                                    isDarkMode ? '#475569' : '#ddd',
                                    isDarkMode ? '#0f172a' : '#fff',
                                    isDarkMode ? '#fff' : '#000',
                                    isDarkMode ? '#1e293b' : 'white',
                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                    isDarkMode ? '#334155' : 'transparent',
                                    isDarkMode ? '#94a3b8' : '#666',
                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                    isDarkMode ? '#64748b' : '#64748b',
                                    isDarkMode ? '#334155' : '#eee',
                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                    isDarkMode ? '#334155' : '#e2e8f0',
                                    isDarkMode ? '#cbd5e1' : '#334155',
                                    isDarkMode ? '#020617' : '#0f172a'
                                ]
                            ]
                        ]),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["LineChart"], {
                                data: selectedChart.data,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Line"], {
                                        type: "monotone",
                                        dataKey: "price",
                                        stroke: "#3b82f6",
                                        strokeWidth: 2,
                                        dot: false
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/pages/index.js",
                                        lineNumber: 424,
                                        columnNumber: 23
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                        stroke: isDarkMode ? "#334155" : "#ccc",
                                        strokeDasharray: "5 5",
                                        opacity: 0.5
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/pages/index.js",
                                        lineNumber: 425,
                                        columnNumber: 23
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
                                        dataKey: "date",
                                        hide: true
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/pages/index.js",
                                        lineNumber: 426,
                                        columnNumber: 23
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
                                        domain: [
                                            'auto',
                                            'auto'
                                        ],
                                        tick: {
                                            fill: isDarkMode ? '#94a3b8' : '#64748b'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/pages/index.js",
                                        lineNumber: 427,
                                        columnNumber: 23
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                                        contentStyle: {
                                            backgroundColor: isDarkMode ? '#1e293b' : '#fff',
                                            borderColor: isDarkMode ? '#334155' : '#ddd',
                                            color: isDarkMode ? '#fff' : '#000'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/pages/index.js",
                                        lineNumber: 431,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/pages/index.js",
                                lineNumber: 423,
                                columnNumber: 21
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/pages/index.js",
                            lineNumber: 422,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/pages/index.js",
                        lineNumber: 421,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/pages/index.js",
                lineNumber: 419,
                columnNumber: 9
            }, this),
            recommendation && !recommendation.loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                id: "recommendation-section",
                style: {
                    borderTop: `6px solid ${getRiskInfo(selectedStockDetails?.pe).color}`,
                    transition: 'all 0.3s ease'
                },
                className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                    [
                        "2d61b444a67c0314",
                        [
                            isDarkMode ? '#0f172a' : '#f1f5f9',
                            isDarkMode ? '#1e293b' : '#fff',
                            isDarkMode ? '#f1f5f9' : '#1e293b',
                            isDarkMode ? '#334155' : 'transparent',
                            isDarkMode ? '#f8fafc' : '#0f172a',
                            isDarkMode ? '#94a3b8' : '#666',
                            isDarkMode ? '#475569' : '#ddd',
                            isDarkMode ? '#0f172a' : '#fff',
                            isDarkMode ? '#fff' : '#000',
                            isDarkMode ? '#1e293b' : 'white',
                            isDarkMode ? '#f1f5f9' : '#1e293b',
                            isDarkMode ? '#334155' : 'transparent',
                            isDarkMode ? '#94a3b8' : '#666',
                            isDarkMode ? '#0f172a' : '#f8fafc',
                            isDarkMode ? '#64748b' : '#64748b',
                            isDarkMode ? '#334155' : '#eee',
                            isDarkMode ? '#0f172a' : '#f8fafc',
                            isDarkMode ? '#334155' : '#e2e8f0',
                            isDarkMode ? '#cbd5e1' : '#334155',
                            isDarkMode ? '#020617' : '#0f172a'
                        ]
                    ]
                ]) + " " + "card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '15px'
                        },
                        className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                            [
                                "2d61b444a67c0314",
                                [
                                    isDarkMode ? '#0f172a' : '#f1f5f9',
                                    isDarkMode ? '#1e293b' : '#fff',
                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                    isDarkMode ? '#334155' : 'transparent',
                                    isDarkMode ? '#f8fafc' : '#0f172a',
                                    isDarkMode ? '#94a3b8' : '#666',
                                    isDarkMode ? '#475569' : '#ddd',
                                    isDarkMode ? '#0f172a' : '#fff',
                                    isDarkMode ? '#fff' : '#000',
                                    isDarkMode ? '#1e293b' : 'white',
                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                    isDarkMode ? '#334155' : 'transparent',
                                    isDarkMode ? '#94a3b8' : '#666',
                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                    isDarkMode ? '#64748b' : '#64748b',
                                    isDarkMode ? '#334155' : '#eee',
                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                    isDarkMode ? '#334155' : '#e2e8f0',
                                    isDarkMode ? '#cbd5e1' : '#334155',
                                    isDarkMode ? '#020617' : '#0f172a'
                                ]
                            ]
                        ]),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                style: {
                                    margin: 0
                                },
                                className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                    [
                                        "2d61b444a67c0314",
                                        [
                                            isDarkMode ? '#0f172a' : '#f1f5f9',
                                            isDarkMode ? '#1e293b' : '#fff',
                                            isDarkMode ? '#f1f5f9' : '#1e293b',
                                            isDarkMode ? '#334155' : 'transparent',
                                            isDarkMode ? '#f8fafc' : '#0f172a',
                                            isDarkMode ? '#94a3b8' : '#666',
                                            isDarkMode ? '#475569' : '#ddd',
                                            isDarkMode ? '#0f172a' : '#fff',
                                            isDarkMode ? '#fff' : '#000',
                                            isDarkMode ? '#1e293b' : 'white',
                                            isDarkMode ? '#f1f5f9' : '#1e293b',
                                            isDarkMode ? '#334155' : 'transparent',
                                            isDarkMode ? '#94a3b8' : '#666',
                                            isDarkMode ? '#0f172a' : '#f8fafc',
                                            isDarkMode ? '#64748b' : '#64748b',
                                            isDarkMode ? '#334155' : '#eee',
                                            isDarkMode ? '#0f172a' : '#f8fafc',
                                            isDarkMode ? '#334155' : '#e2e8f0',
                                            isDarkMode ? '#cbd5e1' : '#334155',
                                            isDarkMode ? '#020617' : '#0f172a'
                                        ]
                                    ]
                                ]),
                                children: "AI Recommendation"
                            }, void 0, false, {
                                fileName: "[project]/frontend/pages/index.js",
                                lineNumber: 452,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    backgroundColor: getRiskInfo(selectedStockDetails?.pe).color,
                                    color: 'white',
                                    padding: '6px 14px',
                                    borderRadius: '20px',
                                    fontSize: '11px',
                                    fontWeight: '900',
                                    textTransform: 'uppercase'
                                },
                                className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                    [
                                        "2d61b444a67c0314",
                                        [
                                            isDarkMode ? '#0f172a' : '#f1f5f9',
                                            isDarkMode ? '#1e293b' : '#fff',
                                            isDarkMode ? '#f1f5f9' : '#1e293b',
                                            isDarkMode ? '#334155' : 'transparent',
                                            isDarkMode ? '#f8fafc' : '#0f172a',
                                            isDarkMode ? '#94a3b8' : '#666',
                                            isDarkMode ? '#475569' : '#ddd',
                                            isDarkMode ? '#0f172a' : '#fff',
                                            isDarkMode ? '#fff' : '#000',
                                            isDarkMode ? '#1e293b' : 'white',
                                            isDarkMode ? '#f1f5f9' : '#1e293b',
                                            isDarkMode ? '#334155' : 'transparent',
                                            isDarkMode ? '#94a3b8' : '#666',
                                            isDarkMode ? '#0f172a' : '#f8fafc',
                                            isDarkMode ? '#64748b' : '#64748b',
                                            isDarkMode ? '#334155' : '#eee',
                                            isDarkMode ? '#0f172a' : '#f8fafc',
                                            isDarkMode ? '#334155' : '#e2e8f0',
                                            isDarkMode ? '#cbd5e1' : '#334155',
                                            isDarkMode ? '#020617' : '#0f172a'
                                        ]
                                    ]
                                ]),
                                children: getRiskInfo(selectedStockDetails?.pe).label
                            }, void 0, false, {
                                fileName: "[project]/frontend/pages/index.js",
                                lineNumber: 454,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/pages/index.js",
                        lineNumber: 451,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            background: isDarkMode ? '#0f172a' : '#f8fafc',
                            padding: '15px',
                            borderRadius: '8px',
                            border: `1px solid ${isDarkMode ? '#334155' : '#e2e8f0'}`
                        },
                        className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                            [
                                "2d61b444a67c0314",
                                [
                                    isDarkMode ? '#0f172a' : '#f1f5f9',
                                    isDarkMode ? '#1e293b' : '#fff',
                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                    isDarkMode ? '#334155' : 'transparent',
                                    isDarkMode ? '#f8fafc' : '#0f172a',
                                    isDarkMode ? '#94a3b8' : '#666',
                                    isDarkMode ? '#475569' : '#ddd',
                                    isDarkMode ? '#0f172a' : '#fff',
                                    isDarkMode ? '#fff' : '#000',
                                    isDarkMode ? '#1e293b' : 'white',
                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                    isDarkMode ? '#334155' : 'transparent',
                                    isDarkMode ? '#94a3b8' : '#666',
                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                    isDarkMode ? '#64748b' : '#64748b',
                                    isDarkMode ? '#334155' : '#eee',
                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                    isDarkMode ? '#334155' : '#e2e8f0',
                                    isDarkMode ? '#cbd5e1' : '#334155',
                                    isDarkMode ? '#020617' : '#0f172a'
                                ]
                            ]
                        ]),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                style: {
                                    margin: '0 0 10px 0',
                                    color: isDarkMode ? '#f1f5f9' : '#1e293b'
                                },
                                className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                    [
                                        "2d61b444a67c0314",
                                        [
                                            isDarkMode ? '#0f172a' : '#f1f5f9',
                                            isDarkMode ? '#1e293b' : '#fff',
                                            isDarkMode ? '#f1f5f9' : '#1e293b',
                                            isDarkMode ? '#334155' : 'transparent',
                                            isDarkMode ? '#f8fafc' : '#0f172a',
                                            isDarkMode ? '#94a3b8' : '#666',
                                            isDarkMode ? '#475569' : '#ddd',
                                            isDarkMode ? '#0f172a' : '#fff',
                                            isDarkMode ? '#fff' : '#000',
                                            isDarkMode ? '#1e293b' : 'white',
                                            isDarkMode ? '#f1f5f9' : '#1e293b',
                                            isDarkMode ? '#334155' : 'transparent',
                                            isDarkMode ? '#94a3b8' : '#666',
                                            isDarkMode ? '#0f172a' : '#f8fafc',
                                            isDarkMode ? '#64748b' : '#64748b',
                                            isDarkMode ? '#334155' : '#eee',
                                            isDarkMode ? '#0f172a' : '#f8fafc',
                                            isDarkMode ? '#334155' : '#e2e8f0',
                                            isDarkMode ? '#cbd5e1' : '#334155',
                                            isDarkMode ? '#020617' : '#0f172a'
                                        ]
                                    ]
                                ]),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                        style: {
                                            color: isDarkMode ? '#94a3b8' : '#64748b'
                                        },
                                        className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                            [
                                                "2d61b444a67c0314",
                                                [
                                                    isDarkMode ? '#0f172a' : '#f1f5f9',
                                                    isDarkMode ? '#1e293b' : '#fff',
                                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                                    isDarkMode ? '#334155' : 'transparent',
                                                    isDarkMode ? '#f8fafc' : '#0f172a',
                                                    isDarkMode ? '#94a3b8' : '#666',
                                                    isDarkMode ? '#475569' : '#ddd',
                                                    isDarkMode ? '#0f172a' : '#fff',
                                                    isDarkMode ? '#fff' : '#000',
                                                    isDarkMode ? '#1e293b' : 'white',
                                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                                    isDarkMode ? '#334155' : 'transparent',
                                                    isDarkMode ? '#94a3b8' : '#666',
                                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                                    isDarkMode ? '#64748b' : '#64748b',
                                                    isDarkMode ? '#334155' : '#eee',
                                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                                    isDarkMode ? '#334155' : '#e2e8f0',
                                                    isDarkMode ? '#cbd5e1' : '#334155',
                                                    isDarkMode ? '#020617' : '#0f172a'
                                                ]
                                            ]
                                        ]),
                                        children: "Ticker:"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/pages/index.js",
                                        lineNumber: 475,
                                        columnNumber: 15
                                    }, this),
                                    " ",
                                    recommendation.ticker.replace('.NS', ''),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: '#94a3b8',
                                            fontSize: '12px',
                                            marginLeft: '5px'
                                        },
                                        className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                            [
                                                "2d61b444a67c0314",
                                                [
                                                    isDarkMode ? '#0f172a' : '#f1f5f9',
                                                    isDarkMode ? '#1e293b' : '#fff',
                                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                                    isDarkMode ? '#334155' : 'transparent',
                                                    isDarkMode ? '#f8fafc' : '#0f172a',
                                                    isDarkMode ? '#94a3b8' : '#666',
                                                    isDarkMode ? '#475569' : '#ddd',
                                                    isDarkMode ? '#0f172a' : '#fff',
                                                    isDarkMode ? '#fff' : '#000',
                                                    isDarkMode ? '#1e293b' : 'white',
                                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                                    isDarkMode ? '#334155' : 'transparent',
                                                    isDarkMode ? '#94a3b8' : '#666',
                                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                                    isDarkMode ? '#64748b' : '#64748b',
                                                    isDarkMode ? '#334155' : '#eee',
                                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                                    isDarkMode ? '#334155' : '#e2e8f0',
                                                    isDarkMode ? '#cbd5e1' : '#334155',
                                                    isDarkMode ? '#020617' : '#0f172a'
                                                ]
                                            ]
                                        ]),
                                        children: [
                                            "(",
                                            market === 'IN' ? 'NSE India' : 'US Market',
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/pages/index.js",
                                        lineNumber: 476,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/pages/index.js",
                                lineNumber: 474,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                style: {
                                    margin: '0 0 15px 0',
                                    color: isDarkMode ? '#f1f5f9' : '#1e293b'
                                },
                                className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                    [
                                        "2d61b444a67c0314",
                                        [
                                            isDarkMode ? '#0f172a' : '#f1f5f9',
                                            isDarkMode ? '#1e293b' : '#fff',
                                            isDarkMode ? '#f1f5f9' : '#1e293b',
                                            isDarkMode ? '#334155' : 'transparent',
                                            isDarkMode ? '#f8fafc' : '#0f172a',
                                            isDarkMode ? '#94a3b8' : '#666',
                                            isDarkMode ? '#475569' : '#ddd',
                                            isDarkMode ? '#0f172a' : '#fff',
                                            isDarkMode ? '#fff' : '#000',
                                            isDarkMode ? '#1e293b' : 'white',
                                            isDarkMode ? '#f1f5f9' : '#1e293b',
                                            isDarkMode ? '#334155' : 'transparent',
                                            isDarkMode ? '#94a3b8' : '#666',
                                            isDarkMode ? '#0f172a' : '#f8fafc',
                                            isDarkMode ? '#64748b' : '#64748b',
                                            isDarkMode ? '#334155' : '#eee',
                                            isDarkMode ? '#0f172a' : '#f8fafc',
                                            isDarkMode ? '#334155' : '#e2e8f0',
                                            isDarkMode ? '#cbd5e1' : '#334155',
                                            isDarkMode ? '#020617' : '#0f172a'
                                        ]
                                    ]
                                ]),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                        style: {
                                            color: isDarkMode ? '#94a3b8' : '#64748b'
                                        },
                                        className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                            [
                                                "2d61b444a67c0314",
                                                [
                                                    isDarkMode ? '#0f172a' : '#f1f5f9',
                                                    isDarkMode ? '#1e293b' : '#fff',
                                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                                    isDarkMode ? '#334155' : 'transparent',
                                                    isDarkMode ? '#f8fafc' : '#0f172a',
                                                    isDarkMode ? '#94a3b8' : '#666',
                                                    isDarkMode ? '#475569' : '#ddd',
                                                    isDarkMode ? '#0f172a' : '#fff',
                                                    isDarkMode ? '#fff' : '#000',
                                                    isDarkMode ? '#1e293b' : 'white',
                                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                                    isDarkMode ? '#334155' : 'transparent',
                                                    isDarkMode ? '#94a3b8' : '#666',
                                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                                    isDarkMode ? '#64748b' : '#64748b',
                                                    isDarkMode ? '#334155' : '#eee',
                                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                                    isDarkMode ? '#334155' : '#e2e8f0',
                                                    isDarkMode ? '#cbd5e1' : '#334155',
                                                    isDarkMode ? '#020617' : '#0f172a'
                                                ]
                                            ]
                                        ]),
                                        children: "Action:"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/pages/index.js",
                                        lineNumber: 482,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        style: {
                                            marginLeft: '10px',
                                            color: recommendation.action === 'BUY' ? '#10b981' : '#ef4444',
                                            fontSize: '22px',
                                            fontWeight: '900'
                                        },
                                        className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                            [
                                                "2d61b444a67c0314",
                                                [
                                                    isDarkMode ? '#0f172a' : '#f1f5f9',
                                                    isDarkMode ? '#1e293b' : '#fff',
                                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                                    isDarkMode ? '#334155' : 'transparent',
                                                    isDarkMode ? '#f8fafc' : '#0f172a',
                                                    isDarkMode ? '#94a3b8' : '#666',
                                                    isDarkMode ? '#475569' : '#ddd',
                                                    isDarkMode ? '#0f172a' : '#fff',
                                                    isDarkMode ? '#fff' : '#000',
                                                    isDarkMode ? '#1e293b' : 'white',
                                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                                    isDarkMode ? '#334155' : 'transparent',
                                                    isDarkMode ? '#94a3b8' : '#666',
                                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                                    isDarkMode ? '#64748b' : '#64748b',
                                                    isDarkMode ? '#334155' : '#eee',
                                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                                    isDarkMode ? '#334155' : '#e2e8f0',
                                                    isDarkMode ? '#cbd5e1' : '#334155',
                                                    isDarkMode ? '#020617' : '#0f172a'
                                                ]
                                            ]
                                        ]),
                                        children: recommendation.action
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/pages/index.js",
                                        lineNumber: 483,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/pages/index.js",
                                lineNumber: 481,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    borderTop: `1px solid ${isDarkMode ? '#334155' : '#e2e8f0'}`,
                                    paddingTop: '10px'
                                },
                                className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                    [
                                        "2d61b444a67c0314",
                                        [
                                            isDarkMode ? '#0f172a' : '#f1f5f9',
                                            isDarkMode ? '#1e293b' : '#fff',
                                            isDarkMode ? '#f1f5f9' : '#1e293b',
                                            isDarkMode ? '#334155' : 'transparent',
                                            isDarkMode ? '#f8fafc' : '#0f172a',
                                            isDarkMode ? '#94a3b8' : '#666',
                                            isDarkMode ? '#475569' : '#ddd',
                                            isDarkMode ? '#0f172a' : '#fff',
                                            isDarkMode ? '#fff' : '#000',
                                            isDarkMode ? '#1e293b' : 'white',
                                            isDarkMode ? '#f1f5f9' : '#1e293b',
                                            isDarkMode ? '#334155' : 'transparent',
                                            isDarkMode ? '#94a3b8' : '#666',
                                            isDarkMode ? '#0f172a' : '#f8fafc',
                                            isDarkMode ? '#64748b' : '#64748b',
                                            isDarkMode ? '#334155' : '#eee',
                                            isDarkMode ? '#0f172a' : '#f8fafc',
                                            isDarkMode ? '#334155' : '#e2e8f0',
                                            isDarkMode ? '#cbd5e1' : '#334155',
                                            isDarkMode ? '#020617' : '#0f172a'
                                        ]
                                    ]
                                ]),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    style: {
                                        lineHeight: '1.6',
                                        color: isDarkMode ? '#cbd5e1' : '#334155',
                                        margin: 0
                                    },
                                    className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                        [
                                            "2d61b444a67c0314",
                                            [
                                                isDarkMode ? '#0f172a' : '#f1f5f9',
                                                isDarkMode ? '#1e293b' : '#fff',
                                                isDarkMode ? '#f1f5f9' : '#1e293b',
                                                isDarkMode ? '#334155' : 'transparent',
                                                isDarkMode ? '#f8fafc' : '#0f172a',
                                                isDarkMode ? '#94a3b8' : '#666',
                                                isDarkMode ? '#475569' : '#ddd',
                                                isDarkMode ? '#0f172a' : '#fff',
                                                isDarkMode ? '#fff' : '#000',
                                                isDarkMode ? '#1e293b' : 'white',
                                                isDarkMode ? '#f1f5f9' : '#1e293b',
                                                isDarkMode ? '#334155' : 'transparent',
                                                isDarkMode ? '#94a3b8' : '#666',
                                                isDarkMode ? '#0f172a' : '#f8fafc',
                                                isDarkMode ? '#64748b' : '#64748b',
                                                isDarkMode ? '#334155' : '#eee',
                                                isDarkMode ? '#0f172a' : '#f8fafc',
                                                isDarkMode ? '#334155' : '#e2e8f0',
                                                isDarkMode ? '#cbd5e1' : '#334155',
                                                isDarkMode ? '#020617' : '#0f172a'
                                            ]
                                        ]
                                    ]),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                            style: {
                                                color: isDarkMode ? '#94a3b8' : '#1e293b'
                                            },
                                            className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                                [
                                                    "2d61b444a67c0314",
                                                    [
                                                        isDarkMode ? '#0f172a' : '#f1f5f9',
                                                        isDarkMode ? '#1e293b' : '#fff',
                                                        isDarkMode ? '#f1f5f9' : '#1e293b',
                                                        isDarkMode ? '#334155' : 'transparent',
                                                        isDarkMode ? '#f8fafc' : '#0f172a',
                                                        isDarkMode ? '#94a3b8' : '#666',
                                                        isDarkMode ? '#475569' : '#ddd',
                                                        isDarkMode ? '#0f172a' : '#fff',
                                                        isDarkMode ? '#fff' : '#000',
                                                        isDarkMode ? '#1e293b' : 'white',
                                                        isDarkMode ? '#f1f5f9' : '#1e293b',
                                                        isDarkMode ? '#334155' : 'transparent',
                                                        isDarkMode ? '#94a3b8' : '#666',
                                                        isDarkMode ? '#0f172a' : '#f8fafc',
                                                        isDarkMode ? '#64748b' : '#64748b',
                                                        isDarkMode ? '#334155' : '#eee',
                                                        isDarkMode ? '#0f172a' : '#f8fafc',
                                                        isDarkMode ? '#334155' : '#e2e8f0',
                                                        isDarkMode ? '#cbd5e1' : '#334155',
                                                        isDarkMode ? '#020617' : '#0f172a'
                                                    ]
                                                ]
                                            ]),
                                            children: "Analyst Note:"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/pages/index.js",
                                            lineNumber: 495,
                                            columnNumber: 19
                                        }, this),
                                        " ",
                                        recommendation.reason
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/pages/index.js",
                                    lineNumber: 494,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/pages/index.js",
                                lineNumber: 493,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/pages/index.js",
                        lineNumber: 468,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/pages/index.js",
                lineNumber: 447,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("footer", {
                className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                    [
                        "2d61b444a67c0314",
                        [
                            isDarkMode ? '#0f172a' : '#f1f5f9',
                            isDarkMode ? '#1e293b' : '#fff',
                            isDarkMode ? '#f1f5f9' : '#1e293b',
                            isDarkMode ? '#334155' : 'transparent',
                            isDarkMode ? '#f8fafc' : '#0f172a',
                            isDarkMode ? '#94a3b8' : '#666',
                            isDarkMode ? '#475569' : '#ddd',
                            isDarkMode ? '#0f172a' : '#fff',
                            isDarkMode ? '#fff' : '#000',
                            isDarkMode ? '#1e293b' : 'white',
                            isDarkMode ? '#f1f5f9' : '#1e293b',
                            isDarkMode ? '#334155' : 'transparent',
                            isDarkMode ? '#94a3b8' : '#666',
                            isDarkMode ? '#0f172a' : '#f8fafc',
                            isDarkMode ? '#64748b' : '#64748b',
                            isDarkMode ? '#334155' : '#eee',
                            isDarkMode ? '#0f172a' : '#f8fafc',
                            isDarkMode ? '#334155' : '#e2e8f0',
                            isDarkMode ? '#cbd5e1' : '#334155',
                            isDarkMode ? '#020617' : '#0f172a'
                        ]
                    ]
                ]),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                        style: {
                            border: '2px solid #e0e7ff'
                        },
                        className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                            [
                                "2d61b444a67c0314",
                                [
                                    isDarkMode ? '#0f172a' : '#f1f5f9',
                                    isDarkMode ? '#1e293b' : '#fff',
                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                    isDarkMode ? '#334155' : 'transparent',
                                    isDarkMode ? '#f8fafc' : '#0f172a',
                                    isDarkMode ? '#94a3b8' : '#666',
                                    isDarkMode ? '#475569' : '#ddd',
                                    isDarkMode ? '#0f172a' : '#fff',
                                    isDarkMode ? '#fff' : '#000',
                                    isDarkMode ? '#1e293b' : 'white',
                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                    isDarkMode ? '#334155' : 'transparent',
                                    isDarkMode ? '#94a3b8' : '#666',
                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                    isDarkMode ? '#64748b' : '#64748b',
                                    isDarkMode ? '#334155' : '#eee',
                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                    isDarkMode ? '#334155' : '#e2e8f0',
                                    isDarkMode ? '#cbd5e1' : '#334155',
                                    isDarkMode ? '#020617' : '#0f172a'
                                ]
                            ]
                        ]) + " " + "card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                    [
                                        "2d61b444a67c0314",
                                        [
                                            isDarkMode ? '#0f172a' : '#f1f5f9',
                                            isDarkMode ? '#1e293b' : '#fff',
                                            isDarkMode ? '#f1f5f9' : '#1e293b',
                                            isDarkMode ? '#334155' : 'transparent',
                                            isDarkMode ? '#f8fafc' : '#0f172a',
                                            isDarkMode ? '#94a3b8' : '#666',
                                            isDarkMode ? '#475569' : '#ddd',
                                            isDarkMode ? '#0f172a' : '#fff',
                                            isDarkMode ? '#fff' : '#000',
                                            isDarkMode ? '#1e293b' : 'white',
                                            isDarkMode ? '#f1f5f9' : '#1e293b',
                                            isDarkMode ? '#334155' : 'transparent',
                                            isDarkMode ? '#94a3b8' : '#666',
                                            isDarkMode ? '#0f172a' : '#f8fafc',
                                            isDarkMode ? '#64748b' : '#64748b',
                                            isDarkMode ? '#334155' : '#eee',
                                            isDarkMode ? '#0f172a' : '#f8fafc',
                                            isDarkMode ? '#334155' : '#e2e8f0',
                                            isDarkMode ? '#cbd5e1' : '#334155',
                                            isDarkMode ? '#020617' : '#0f172a'
                                        ]
                                    ]
                                ]),
                                children: "Ask the AI Analyst"
                            }, void 0, false, {
                                fileName: "[project]/frontend/pages/index.js",
                                lineNumber: 505,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
                                onSubmit: askAgent,
                                style: {
                                    display: 'flex',
                                    gap: '8px'
                                },
                                className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                    [
                                        "2d61b444a67c0314",
                                        [
                                            isDarkMode ? '#0f172a' : '#f1f5f9',
                                            isDarkMode ? '#1e293b' : '#fff',
                                            isDarkMode ? '#f1f5f9' : '#1e293b',
                                            isDarkMode ? '#334155' : 'transparent',
                                            isDarkMode ? '#f8fafc' : '#0f172a',
                                            isDarkMode ? '#94a3b8' : '#666',
                                            isDarkMode ? '#475569' : '#ddd',
                                            isDarkMode ? '#0f172a' : '#fff',
                                            isDarkMode ? '#fff' : '#000',
                                            isDarkMode ? '#1e293b' : 'white',
                                            isDarkMode ? '#f1f5f9' : '#1e293b',
                                            isDarkMode ? '#334155' : 'transparent',
                                            isDarkMode ? '#94a3b8' : '#666',
                                            isDarkMode ? '#0f172a' : '#f8fafc',
                                            isDarkMode ? '#64748b' : '#64748b',
                                            isDarkMode ? '#334155' : '#eee',
                                            isDarkMode ? '#0f172a' : '#f8fafc',
                                            isDarkMode ? '#334155' : '#e2e8f0',
                                            isDarkMode ? '#cbd5e1' : '#334155',
                                            isDarkMode ? '#020617' : '#0f172a'
                                        ]
                                    ]
                                ]),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                        style: {
                                            flex: 1
                                        },
                                        value: chatQuery,
                                        onChange: (e)=>setChatQuery(e.target.value),
                                        placeholder: "Ask about any stock...",
                                        className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                            [
                                                "2d61b444a67c0314",
                                                [
                                                    isDarkMode ? '#0f172a' : '#f1f5f9',
                                                    isDarkMode ? '#1e293b' : '#fff',
                                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                                    isDarkMode ? '#334155' : 'transparent',
                                                    isDarkMode ? '#f8fafc' : '#0f172a',
                                                    isDarkMode ? '#94a3b8' : '#666',
                                                    isDarkMode ? '#475569' : '#ddd',
                                                    isDarkMode ? '#0f172a' : '#fff',
                                                    isDarkMode ? '#fff' : '#000',
                                                    isDarkMode ? '#1e293b' : 'white',
                                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                                    isDarkMode ? '#334155' : 'transparent',
                                                    isDarkMode ? '#94a3b8' : '#666',
                                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                                    isDarkMode ? '#64748b' : '#64748b',
                                                    isDarkMode ? '#334155' : '#eee',
                                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                                    isDarkMode ? '#334155' : '#e2e8f0',
                                                    isDarkMode ? '#cbd5e1' : '#334155',
                                                    isDarkMode ? '#020617' : '#0f172a'
                                                ]
                                            ]
                                        ])
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/pages/index.js",
                                        lineNumber: 507,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: isChatting,
                                        className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                            [
                                                "2d61b444a67c0314",
                                                [
                                                    isDarkMode ? '#0f172a' : '#f1f5f9',
                                                    isDarkMode ? '#1e293b' : '#fff',
                                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                                    isDarkMode ? '#334155' : 'transparent',
                                                    isDarkMode ? '#f8fafc' : '#0f172a',
                                                    isDarkMode ? '#94a3b8' : '#666',
                                                    isDarkMode ? '#475569' : '#ddd',
                                                    isDarkMode ? '#0f172a' : '#fff',
                                                    isDarkMode ? '#fff' : '#000',
                                                    isDarkMode ? '#1e293b' : 'white',
                                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                                    isDarkMode ? '#334155' : 'transparent',
                                                    isDarkMode ? '#94a3b8' : '#666',
                                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                                    isDarkMode ? '#64748b' : '#64748b',
                                                    isDarkMode ? '#334155' : '#eee',
                                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                                    isDarkMode ? '#334155' : '#e2e8f0',
                                                    isDarkMode ? '#cbd5e1' : '#334155',
                                                    isDarkMode ? '#020617' : '#0f172a'
                                                ]
                                            ]
                                        ]),
                                        children: isChatting ? 'Thinking...' : 'Ask AI'
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/pages/index.js",
                                        lineNumber: 508,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/pages/index.js",
                                lineNumber: 506,
                                columnNumber: 11
                            }, this),
                            chatResponse && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                    [
                                        "2d61b444a67c0314",
                                        [
                                            isDarkMode ? '#0f172a' : '#f1f5f9',
                                            isDarkMode ? '#1e293b' : '#fff',
                                            isDarkMode ? '#f1f5f9' : '#1e293b',
                                            isDarkMode ? '#334155' : 'transparent',
                                            isDarkMode ? '#f8fafc' : '#0f172a',
                                            isDarkMode ? '#94a3b8' : '#666',
                                            isDarkMode ? '#475569' : '#ddd',
                                            isDarkMode ? '#0f172a' : '#fff',
                                            isDarkMode ? '#fff' : '#000',
                                            isDarkMode ? '#1e293b' : 'white',
                                            isDarkMode ? '#f1f5f9' : '#1e293b',
                                            isDarkMode ? '#334155' : 'transparent',
                                            isDarkMode ? '#94a3b8' : '#666',
                                            isDarkMode ? '#0f172a' : '#f8fafc',
                                            isDarkMode ? '#64748b' : '#64748b',
                                            isDarkMode ? '#334155' : '#eee',
                                            isDarkMode ? '#0f172a' : '#f8fafc',
                                            isDarkMode ? '#334155' : '#e2e8f0',
                                            isDarkMode ? '#cbd5e1' : '#334155',
                                            isDarkMode ? '#020617' : '#0f172a'
                                        ]
                                    ]
                                ]) + " " + "chat-box",
                                children: chatResponse
                            }, void 0, false, {
                                fileName: "[project]/frontend/pages/index.js",
                                lineNumber: 510,
                                columnNumber: 28
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/pages/index.js",
                        lineNumber: 504,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                            [
                                "2d61b444a67c0314",
                                [
                                    isDarkMode ? '#0f172a' : '#f1f5f9',
                                    isDarkMode ? '#1e293b' : '#fff',
                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                    isDarkMode ? '#334155' : 'transparent',
                                    isDarkMode ? '#f8fafc' : '#0f172a',
                                    isDarkMode ? '#94a3b8' : '#666',
                                    isDarkMode ? '#475569' : '#ddd',
                                    isDarkMode ? '#0f172a' : '#fff',
                                    isDarkMode ? '#fff' : '#000',
                                    isDarkMode ? '#1e293b' : 'white',
                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                    isDarkMode ? '#334155' : 'transparent',
                                    isDarkMode ? '#94a3b8' : '#666',
                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                    isDarkMode ? '#64748b' : '#64748b',
                                    isDarkMode ? '#334155' : '#eee',
                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                    isDarkMode ? '#334155' : '#e2e8f0',
                                    isDarkMode ? '#cbd5e1' : '#334155',
                                    isDarkMode ? '#020617' : '#0f172a'
                                ]
                            ]
                        ]) + " " + "card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom: '15px'
                                },
                                className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                    [
                                        "2d61b444a67c0314",
                                        [
                                            isDarkMode ? '#0f172a' : '#f1f5f9',
                                            isDarkMode ? '#1e293b' : '#fff',
                                            isDarkMode ? '#f1f5f9' : '#1e293b',
                                            isDarkMode ? '#334155' : 'transparent',
                                            isDarkMode ? '#f8fafc' : '#0f172a',
                                            isDarkMode ? '#94a3b8' : '#666',
                                            isDarkMode ? '#475569' : '#ddd',
                                            isDarkMode ? '#0f172a' : '#fff',
                                            isDarkMode ? '#fff' : '#000',
                                            isDarkMode ? '#1e293b' : 'white',
                                            isDarkMode ? '#f1f5f9' : '#1e293b',
                                            isDarkMode ? '#334155' : 'transparent',
                                            isDarkMode ? '#94a3b8' : '#666',
                                            isDarkMode ? '#0f172a' : '#f8fafc',
                                            isDarkMode ? '#64748b' : '#64748b',
                                            isDarkMode ? '#334155' : '#eee',
                                            isDarkMode ? '#0f172a' : '#f8fafc',
                                            isDarkMode ? '#334155' : '#e2e8f0',
                                            isDarkMode ? '#cbd5e1' : '#334155',
                                            isDarkMode ? '#020617' : '#0f172a'
                                        ]
                                    ]
                                ]),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                        style: {
                                            margin: 0
                                        },
                                        className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                            [
                                                "2d61b444a67c0314",
                                                [
                                                    isDarkMode ? '#0f172a' : '#f1f5f9',
                                                    isDarkMode ? '#1e293b' : '#fff',
                                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                                    isDarkMode ? '#334155' : 'transparent',
                                                    isDarkMode ? '#f8fafc' : '#0f172a',
                                                    isDarkMode ? '#94a3b8' : '#666',
                                                    isDarkMode ? '#475569' : '#ddd',
                                                    isDarkMode ? '#0f172a' : '#fff',
                                                    isDarkMode ? '#fff' : '#000',
                                                    isDarkMode ? '#1e293b' : 'white',
                                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                                    isDarkMode ? '#334155' : 'transparent',
                                                    isDarkMode ? '#94a3b8' : '#666',
                                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                                    isDarkMode ? '#64748b' : '#64748b',
                                                    isDarkMode ? '#334155' : '#eee',
                                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                                    isDarkMode ? '#334155' : '#e2e8f0',
                                                    isDarkMode ? '#cbd5e1' : '#334155',
                                                    isDarkMode ? '#020617' : '#0f172a'
                                                ]
                                            ]
                                        ]),
                                        children: "Activity Log"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/pages/index.js",
                                        lineNumber: 515,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            console.log("Refresh Clicked!");
                                            loadActivityLog();
                                        },
                                        className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                            [
                                                "2d61b444a67c0314",
                                                [
                                                    isDarkMode ? '#0f172a' : '#f1f5f9',
                                                    isDarkMode ? '#1e293b' : '#fff',
                                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                                    isDarkMode ? '#334155' : 'transparent',
                                                    isDarkMode ? '#f8fafc' : '#0f172a',
                                                    isDarkMode ? '#94a3b8' : '#666',
                                                    isDarkMode ? '#475569' : '#ddd',
                                                    isDarkMode ? '#0f172a' : '#fff',
                                                    isDarkMode ? '#fff' : '#000',
                                                    isDarkMode ? '#1e293b' : 'white',
                                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                                    isDarkMode ? '#334155' : 'transparent',
                                                    isDarkMode ? '#94a3b8' : '#666',
                                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                                    isDarkMode ? '#64748b' : '#64748b',
                                                    isDarkMode ? '#334155' : '#eee',
                                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                                    isDarkMode ? '#334155' : '#e2e8f0',
                                                    isDarkMode ? '#cbd5e1' : '#334155',
                                                    isDarkMode ? '#020617' : '#0f172a'
                                                ]
                                            ]
                                        ]) + " " + "refresh-btn",
                                        children: "🔄 Refresh"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/pages/index.js",
                                        lineNumber: 517,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/pages/index.js",
                                lineNumber: 514,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                style: {
                                    listStyle: 'none',
                                    padding: 0
                                },
                                className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                    [
                                        "2d61b444a67c0314",
                                        [
                                            isDarkMode ? '#0f172a' : '#f1f5f9',
                                            isDarkMode ? '#1e293b' : '#fff',
                                            isDarkMode ? '#f1f5f9' : '#1e293b',
                                            isDarkMode ? '#334155' : 'transparent',
                                            isDarkMode ? '#f8fafc' : '#0f172a',
                                            isDarkMode ? '#94a3b8' : '#666',
                                            isDarkMode ? '#475569' : '#ddd',
                                            isDarkMode ? '#0f172a' : '#fff',
                                            isDarkMode ? '#fff' : '#000',
                                            isDarkMode ? '#1e293b' : 'white',
                                            isDarkMode ? '#f1f5f9' : '#1e293b',
                                            isDarkMode ? '#334155' : 'transparent',
                                            isDarkMode ? '#94a3b8' : '#666',
                                            isDarkMode ? '#0f172a' : '#f8fafc',
                                            isDarkMode ? '#64748b' : '#64748b',
                                            isDarkMode ? '#334155' : '#eee',
                                            isDarkMode ? '#0f172a' : '#f8fafc',
                                            isDarkMode ? '#334155' : '#e2e8f0',
                                            isDarkMode ? '#cbd5e1' : '#334155',
                                            isDarkMode ? '#020617' : '#0f172a'
                                        ]
                                    ]
                                ]) + " " + "log-list",
                                children: activityLog && activityLog.length > 0 ? activityLog.map((ev, index)=>{
                                    // Helper to make the payload look nice
                                    const getActionText = (type, payload)=>{
                                        if (type === 'run_screener') return `Screened tickers: ${payload.tickers || 'N/A'}`;
                                        if (type === 'view_chart') return `Viewed chart for ${payload.ticker}`;
                                        if (type === 'ai_advice') return `Requested AI analysis for ${payload.ticker}`;
                                        return JSON.stringify(payload); // Fallback
                                    };
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        style: {
                                            padding: '10px 0',
                                            borderBottom: `1px solid ${isDarkMode ? '#334155' : '#eee'}`,
                                            fontSize: '13px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '4px'
                                        },
                                        className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                            [
                                                "2d61b444a67c0314",
                                                [
                                                    isDarkMode ? '#0f172a' : '#f1f5f9',
                                                    isDarkMode ? '#1e293b' : '#fff',
                                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                                    isDarkMode ? '#334155' : 'transparent',
                                                    isDarkMode ? '#f8fafc' : '#0f172a',
                                                    isDarkMode ? '#94a3b8' : '#666',
                                                    isDarkMode ? '#475569' : '#ddd',
                                                    isDarkMode ? '#0f172a' : '#fff',
                                                    isDarkMode ? '#fff' : '#000',
                                                    isDarkMode ? '#1e293b' : 'white',
                                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                                    isDarkMode ? '#334155' : 'transparent',
                                                    isDarkMode ? '#94a3b8' : '#666',
                                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                                    isDarkMode ? '#64748b' : '#64748b',
                                                    isDarkMode ? '#334155' : '#eee',
                                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                                    isDarkMode ? '#334155' : '#e2e8f0',
                                                    isDarkMode ? '#cbd5e1' : '#334155',
                                                    isDarkMode ? '#020617' : '#0f172a'
                                                ]
                                            ]
                                        ]),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    justifyContent: 'space-between'
                                                },
                                                className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                                    [
                                                        "2d61b444a67c0314",
                                                        [
                                                            isDarkMode ? '#0f172a' : '#f1f5f9',
                                                            isDarkMode ? '#1e293b' : '#fff',
                                                            isDarkMode ? '#f1f5f9' : '#1e293b',
                                                            isDarkMode ? '#334155' : 'transparent',
                                                            isDarkMode ? '#f8fafc' : '#0f172a',
                                                            isDarkMode ? '#94a3b8' : '#666',
                                                            isDarkMode ? '#475569' : '#ddd',
                                                            isDarkMode ? '#0f172a' : '#fff',
                                                            isDarkMode ? '#fff' : '#000',
                                                            isDarkMode ? '#1e293b' : 'white',
                                                            isDarkMode ? '#f1f5f9' : '#1e293b',
                                                            isDarkMode ? '#334155' : 'transparent',
                                                            isDarkMode ? '#94a3b8' : '#666',
                                                            isDarkMode ? '#0f172a' : '#f8fafc',
                                                            isDarkMode ? '#64748b' : '#64748b',
                                                            isDarkMode ? '#334155' : '#eee',
                                                            isDarkMode ? '#0f172a' : '#f8fafc',
                                                            isDarkMode ? '#334155' : '#e2e8f0',
                                                            isDarkMode ? '#cbd5e1' : '#334155',
                                                            isDarkMode ? '#020617' : '#0f172a'
                                                        ]
                                                    ]
                                                ]),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                                        style: {
                                                            color: '#0b5fff',
                                                            textTransform: 'uppercase',
                                                            fontSize: '11px'
                                                        },
                                                        className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                                            [
                                                                "2d61b444a67c0314",
                                                                [
                                                                    isDarkMode ? '#0f172a' : '#f1f5f9',
                                                                    isDarkMode ? '#1e293b' : '#fff',
                                                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                                                    isDarkMode ? '#334155' : 'transparent',
                                                                    isDarkMode ? '#f8fafc' : '#0f172a',
                                                                    isDarkMode ? '#94a3b8' : '#666',
                                                                    isDarkMode ? '#475569' : '#ddd',
                                                                    isDarkMode ? '#0f172a' : '#fff',
                                                                    isDarkMode ? '#fff' : '#000',
                                                                    isDarkMode ? '#1e293b' : 'white',
                                                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                                                    isDarkMode ? '#334155' : 'transparent',
                                                                    isDarkMode ? '#94a3b8' : '#666',
                                                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                                                    isDarkMode ? '#64748b' : '#64748b',
                                                                    isDarkMode ? '#334155' : '#eee',
                                                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                                                    isDarkMode ? '#334155' : '#e2e8f0',
                                                                    isDarkMode ? '#cbd5e1' : '#334155',
                                                                    isDarkMode ? '#020617' : '#0f172a'
                                                                ]
                                                            ]
                                                        ]),
                                                        children: ev.event_type.replace('_', ' ')
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/pages/index.js",
                                                        lineNumber: 550,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: '#64748b',
                                                            fontSize: '10px'
                                                        },
                                                        className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                                            [
                                                                "2d61b444a67c0314",
                                                                [
                                                                    isDarkMode ? '#0f172a' : '#f1f5f9',
                                                                    isDarkMode ? '#1e293b' : '#fff',
                                                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                                                    isDarkMode ? '#334155' : 'transparent',
                                                                    isDarkMode ? '#f8fafc' : '#0f172a',
                                                                    isDarkMode ? '#94a3b8' : '#666',
                                                                    isDarkMode ? '#475569' : '#ddd',
                                                                    isDarkMode ? '#0f172a' : '#fff',
                                                                    isDarkMode ? '#fff' : '#000',
                                                                    isDarkMode ? '#1e293b' : 'white',
                                                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                                                    isDarkMode ? '#334155' : 'transparent',
                                                                    isDarkMode ? '#94a3b8' : '#666',
                                                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                                                    isDarkMode ? '#64748b' : '#64748b',
                                                                    isDarkMode ? '#334155' : '#eee',
                                                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                                                    isDarkMode ? '#334155' : '#e2e8f0',
                                                                    isDarkMode ? '#cbd5e1' : '#334155',
                                                                    isDarkMode ? '#020617' : '#0f172a'
                                                                ]
                                                            ]
                                                        ]),
                                                        children: [
                                                            market,
                                                            " Market"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/pages/index.js",
                                                        lineNumber: 553,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/pages/index.js",
                                                lineNumber: 549,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: isDarkMode ? '#cbd5e1' : '#444'
                                                },
                                                className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                                    [
                                                        "2d61b444a67c0314",
                                                        [
                                                            isDarkMode ? '#0f172a' : '#f1f5f9',
                                                            isDarkMode ? '#1e293b' : '#fff',
                                                            isDarkMode ? '#f1f5f9' : '#1e293b',
                                                            isDarkMode ? '#334155' : 'transparent',
                                                            isDarkMode ? '#f8fafc' : '#0f172a',
                                                            isDarkMode ? '#94a3b8' : '#666',
                                                            isDarkMode ? '#475569' : '#ddd',
                                                            isDarkMode ? '#0f172a' : '#fff',
                                                            isDarkMode ? '#fff' : '#000',
                                                            isDarkMode ? '#1e293b' : 'white',
                                                            isDarkMode ? '#f1f5f9' : '#1e293b',
                                                            isDarkMode ? '#334155' : 'transparent',
                                                            isDarkMode ? '#94a3b8' : '#666',
                                                            isDarkMode ? '#0f172a' : '#f8fafc',
                                                            isDarkMode ? '#64748b' : '#64748b',
                                                            isDarkMode ? '#334155' : '#eee',
                                                            isDarkMode ? '#0f172a' : '#f8fafc',
                                                            isDarkMode ? '#334155' : '#e2e8f0',
                                                            isDarkMode ? '#cbd5e1' : '#334155',
                                                            isDarkMode ? '#020617' : '#0f172a'
                                                        ]
                                                    ]
                                                ]),
                                                children: getActionText(ev.event_type, ev.payload)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/pages/index.js",
                                                lineNumber: 555,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/frontend/pages/index.js",
                                        lineNumber: 541,
                                        columnNumber: 19
                                    }, this);
                                }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                    style: {
                                        color: '#666',
                                        padding: '20px 0',
                                        textAlign: 'center'
                                    },
                                    className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                        [
                                            "2d61b444a67c0314",
                                            [
                                                isDarkMode ? '#0f172a' : '#f1f5f9',
                                                isDarkMode ? '#1e293b' : '#fff',
                                                isDarkMode ? '#f1f5f9' : '#1e293b',
                                                isDarkMode ? '#334155' : 'transparent',
                                                isDarkMode ? '#f8fafc' : '#0f172a',
                                                isDarkMode ? '#94a3b8' : '#666',
                                                isDarkMode ? '#475569' : '#ddd',
                                                isDarkMode ? '#0f172a' : '#fff',
                                                isDarkMode ? '#fff' : '#000',
                                                isDarkMode ? '#1e293b' : 'white',
                                                isDarkMode ? '#f1f5f9' : '#1e293b',
                                                isDarkMode ? '#334155' : 'transparent',
                                                isDarkMode ? '#94a3b8' : '#666',
                                                isDarkMode ? '#0f172a' : '#f8fafc',
                                                isDarkMode ? '#64748b' : '#64748b',
                                                isDarkMode ? '#334155' : '#eee',
                                                isDarkMode ? '#0f172a' : '#f8fafc',
                                                isDarkMode ? '#334155' : '#e2e8f0',
                                                isDarkMode ? '#cbd5e1' : '#334155',
                                                isDarkMode ? '#020617' : '#0f172a'
                                            ]
                                        ]
                                    ]),
                                    children: [
                                        "No activity logged yet for the ",
                                        market,
                                        " market. Try running a search!"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/pages/index.js",
                                    lineNumber: 562,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/pages/index.js",
                                lineNumber: 529,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/pages/index.js",
                        lineNumber: 513,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/pages/index.js",
                lineNumber: 503,
                columnNumber: 7
            }, this),
            isModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                onClick: ()=>setIsModalOpen(false),
                className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                    [
                        "2d61b444a67c0314",
                        [
                            isDarkMode ? '#0f172a' : '#f1f5f9',
                            isDarkMode ? '#1e293b' : '#fff',
                            isDarkMode ? '#f1f5f9' : '#1e293b',
                            isDarkMode ? '#334155' : 'transparent',
                            isDarkMode ? '#f8fafc' : '#0f172a',
                            isDarkMode ? '#94a3b8' : '#666',
                            isDarkMode ? '#475569' : '#ddd',
                            isDarkMode ? '#0f172a' : '#fff',
                            isDarkMode ? '#fff' : '#000',
                            isDarkMode ? '#1e293b' : 'white',
                            isDarkMode ? '#f1f5f9' : '#1e293b',
                            isDarkMode ? '#334155' : 'transparent',
                            isDarkMode ? '#94a3b8' : '#666',
                            isDarkMode ? '#0f172a' : '#f8fafc',
                            isDarkMode ? '#64748b' : '#64748b',
                            isDarkMode ? '#334155' : '#eee',
                            isDarkMode ? '#0f172a' : '#f8fafc',
                            isDarkMode ? '#334155' : '#e2e8f0',
                            isDarkMode ? '#cbd5e1' : '#334155',
                            isDarkMode ? '#020617' : '#0f172a'
                        ]
                    ]
                ]) + " " + "modal-overlay",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    onClick: (e)=>e.stopPropagation(),
                    className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                        [
                            "2d61b444a67c0314",
                            [
                                isDarkMode ? '#0f172a' : '#f1f5f9',
                                isDarkMode ? '#1e293b' : '#fff',
                                isDarkMode ? '#f1f5f9' : '#1e293b',
                                isDarkMode ? '#334155' : 'transparent',
                                isDarkMode ? '#f8fafc' : '#0f172a',
                                isDarkMode ? '#94a3b8' : '#666',
                                isDarkMode ? '#475569' : '#ddd',
                                isDarkMode ? '#0f172a' : '#fff',
                                isDarkMode ? '#fff' : '#000',
                                isDarkMode ? '#1e293b' : 'white',
                                isDarkMode ? '#f1f5f9' : '#1e293b',
                                isDarkMode ? '#334155' : 'transparent',
                                isDarkMode ? '#94a3b8' : '#666',
                                isDarkMode ? '#0f172a' : '#f8fafc',
                                isDarkMode ? '#64748b' : '#64748b',
                                isDarkMode ? '#334155' : '#eee',
                                isDarkMode ? '#0f172a' : '#f8fafc',
                                isDarkMode ? '#334155' : '#e2e8f0',
                                isDarkMode ? '#cbd5e1' : '#334155',
                                isDarkMode ? '#020617' : '#0f172a'
                            ]
                        ]
                    ]) + " " + "modal-content",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsModalOpen(false),
                            className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                [
                                    "2d61b444a67c0314",
                                    [
                                        isDarkMode ? '#0f172a' : '#f1f5f9',
                                        isDarkMode ? '#1e293b' : '#fff',
                                        isDarkMode ? '#f1f5f9' : '#1e293b',
                                        isDarkMode ? '#334155' : 'transparent',
                                        isDarkMode ? '#f8fafc' : '#0f172a',
                                        isDarkMode ? '#94a3b8' : '#666',
                                        isDarkMode ? '#475569' : '#ddd',
                                        isDarkMode ? '#0f172a' : '#fff',
                                        isDarkMode ? '#fff' : '#000',
                                        isDarkMode ? '#1e293b' : 'white',
                                        isDarkMode ? '#f1f5f9' : '#1e293b',
                                        isDarkMode ? '#334155' : 'transparent',
                                        isDarkMode ? '#94a3b8' : '#666',
                                        isDarkMode ? '#0f172a' : '#f8fafc',
                                        isDarkMode ? '#64748b' : '#64748b',
                                        isDarkMode ? '#334155' : '#eee',
                                        isDarkMode ? '#0f172a' : '#f8fafc',
                                        isDarkMode ? '#334155' : '#e2e8f0',
                                        isDarkMode ? '#cbd5e1' : '#334155',
                                        isDarkMode ? '#020617' : '#0f172a'
                                    ]
                                ]
                            ]) + " " + "close-btn",
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/frontend/pages/index.js",
                            lineNumber: 575,
                            columnNumber: 13
                        }, this),
                        selectedStockDetails?.loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                [
                                    "2d61b444a67c0314",
                                    [
                                        isDarkMode ? '#0f172a' : '#f1f5f9',
                                        isDarkMode ? '#1e293b' : '#fff',
                                        isDarkMode ? '#f1f5f9' : '#1e293b',
                                        isDarkMode ? '#334155' : 'transparent',
                                        isDarkMode ? '#f8fafc' : '#0f172a',
                                        isDarkMode ? '#94a3b8' : '#666',
                                        isDarkMode ? '#475569' : '#ddd',
                                        isDarkMode ? '#0f172a' : '#fff',
                                        isDarkMode ? '#fff' : '#000',
                                        isDarkMode ? '#1e293b' : 'white',
                                        isDarkMode ? '#f1f5f9' : '#1e293b',
                                        isDarkMode ? '#334155' : 'transparent',
                                        isDarkMode ? '#94a3b8' : '#666',
                                        isDarkMode ? '#0f172a' : '#f8fafc',
                                        isDarkMode ? '#64748b' : '#64748b',
                                        isDarkMode ? '#334155' : '#eee',
                                        isDarkMode ? '#0f172a' : '#f8fafc',
                                        isDarkMode ? '#334155' : '#e2e8f0',
                                        isDarkMode ? '#cbd5e1' : '#334155',
                                        isDarkMode ? '#020617' : '#0f172a'
                                    ]
                                ]
                            ]),
                            children: [
                                "Loading ",
                                selectedStockDetails.ticker,
                                "..."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/pages/index.js",
                            lineNumber: 577,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                    style: {
                                        color: isDarkMode ? '#f8fafc' : '#0f172a'
                                    },
                                    className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                        [
                                            "2d61b444a67c0314",
                                            [
                                                isDarkMode ? '#0f172a' : '#f1f5f9',
                                                isDarkMode ? '#1e293b' : '#fff',
                                                isDarkMode ? '#f1f5f9' : '#1e293b',
                                                isDarkMode ? '#334155' : 'transparent',
                                                isDarkMode ? '#f8fafc' : '#0f172a',
                                                isDarkMode ? '#94a3b8' : '#666',
                                                isDarkMode ? '#475569' : '#ddd',
                                                isDarkMode ? '#0f172a' : '#fff',
                                                isDarkMode ? '#fff' : '#000',
                                                isDarkMode ? '#1e293b' : 'white',
                                                isDarkMode ? '#f1f5f9' : '#1e293b',
                                                isDarkMode ? '#334155' : 'transparent',
                                                isDarkMode ? '#94a3b8' : '#666',
                                                isDarkMode ? '#0f172a' : '#f8fafc',
                                                isDarkMode ? '#64748b' : '#64748b',
                                                isDarkMode ? '#334155' : '#eee',
                                                isDarkMode ? '#0f172a' : '#f8fafc',
                                                isDarkMode ? '#334155' : '#e2e8f0',
                                                isDarkMode ? '#cbd5e1' : '#334155',
                                                isDarkMode ? '#020617' : '#0f172a'
                                            ]
                                        ]
                                    ]),
                                    children: [
                                        selectedStockDetails?.ticker,
                                        " Overview"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/pages/index.js",
                                    lineNumber: 580,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                        [
                                            "2d61b444a67c0314",
                                            [
                                                isDarkMode ? '#0f172a' : '#f1f5f9',
                                                isDarkMode ? '#1e293b' : '#fff',
                                                isDarkMode ? '#f1f5f9' : '#1e293b',
                                                isDarkMode ? '#334155' : 'transparent',
                                                isDarkMode ? '#f8fafc' : '#0f172a',
                                                isDarkMode ? '#94a3b8' : '#666',
                                                isDarkMode ? '#475569' : '#ddd',
                                                isDarkMode ? '#0f172a' : '#fff',
                                                isDarkMode ? '#fff' : '#000',
                                                isDarkMode ? '#1e293b' : 'white',
                                                isDarkMode ? '#f1f5f9' : '#1e293b',
                                                isDarkMode ? '#334155' : 'transparent',
                                                isDarkMode ? '#94a3b8' : '#666',
                                                isDarkMode ? '#0f172a' : '#f8fafc',
                                                isDarkMode ? '#64748b' : '#64748b',
                                                isDarkMode ? '#334155' : '#eee',
                                                isDarkMode ? '#0f172a' : '#f8fafc',
                                                isDarkMode ? '#334155' : '#e2e8f0',
                                                isDarkMode ? '#cbd5e1' : '#334155',
                                                isDarkMode ? '#020617' : '#0f172a'
                                            ]
                                        ]
                                    ]) + " " + "stats-grid",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                                [
                                                    "2d61b444a67c0314",
                                                    [
                                                        isDarkMode ? '#0f172a' : '#f1f5f9',
                                                        isDarkMode ? '#1e293b' : '#fff',
                                                        isDarkMode ? '#f1f5f9' : '#1e293b',
                                                        isDarkMode ? '#334155' : 'transparent',
                                                        isDarkMode ? '#f8fafc' : '#0f172a',
                                                        isDarkMode ? '#94a3b8' : '#666',
                                                        isDarkMode ? '#475569' : '#ddd',
                                                        isDarkMode ? '#0f172a' : '#fff',
                                                        isDarkMode ? '#fff' : '#000',
                                                        isDarkMode ? '#1e293b' : 'white',
                                                        isDarkMode ? '#f1f5f9' : '#1e293b',
                                                        isDarkMode ? '#334155' : 'transparent',
                                                        isDarkMode ? '#94a3b8' : '#666',
                                                        isDarkMode ? '#0f172a' : '#f8fafc',
                                                        isDarkMode ? '#64748b' : '#64748b',
                                                        isDarkMode ? '#334155' : '#eee',
                                                        isDarkMode ? '#0f172a' : '#f8fafc',
                                                        isDarkMode ? '#334155' : '#e2e8f0',
                                                        isDarkMode ? '#cbd5e1' : '#334155',
                                                        isDarkMode ? '#020617' : '#0f172a'
                                                    ]
                                                ]
                                            ]) + " " + "stat-item",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                                        [
                                                            "2d61b444a67c0314",
                                                            [
                                                                isDarkMode ? '#0f172a' : '#f1f5f9',
                                                                isDarkMode ? '#1e293b' : '#fff',
                                                                isDarkMode ? '#f1f5f9' : '#1e293b',
                                                                isDarkMode ? '#334155' : 'transparent',
                                                                isDarkMode ? '#f8fafc' : '#0f172a',
                                                                isDarkMode ? '#94a3b8' : '#666',
                                                                isDarkMode ? '#475569' : '#ddd',
                                                                isDarkMode ? '#0f172a' : '#fff',
                                                                isDarkMode ? '#fff' : '#000',
                                                                isDarkMode ? '#1e293b' : 'white',
                                                                isDarkMode ? '#f1f5f9' : '#1e293b',
                                                                isDarkMode ? '#334155' : 'transparent',
                                                                isDarkMode ? '#94a3b8' : '#666',
                                                                isDarkMode ? '#0f172a' : '#f8fafc',
                                                                isDarkMode ? '#64748b' : '#64748b',
                                                                isDarkMode ? '#334155' : '#eee',
                                                                isDarkMode ? '#0f172a' : '#f8fafc',
                                                                isDarkMode ? '#334155' : '#e2e8f0',
                                                                isDarkMode ? '#cbd5e1' : '#334155',
                                                                isDarkMode ? '#020617' : '#0f172a'
                                                            ]
                                                        ]
                                                    ]),
                                                    children: "Price"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/pages/index.js",
                                                    lineNumber: 585,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                                    style: {
                                                        color: isDarkMode ? '#fff' : '#000'
                                                    },
                                                    className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                                        [
                                                            "2d61b444a67c0314",
                                                            [
                                                                isDarkMode ? '#0f172a' : '#f1f5f9',
                                                                isDarkMode ? '#1e293b' : '#fff',
                                                                isDarkMode ? '#f1f5f9' : '#1e293b',
                                                                isDarkMode ? '#334155' : 'transparent',
                                                                isDarkMode ? '#f8fafc' : '#0f172a',
                                                                isDarkMode ? '#94a3b8' : '#666',
                                                                isDarkMode ? '#475569' : '#ddd',
                                                                isDarkMode ? '#0f172a' : '#fff',
                                                                isDarkMode ? '#fff' : '#000',
                                                                isDarkMode ? '#1e293b' : 'white',
                                                                isDarkMode ? '#f1f5f9' : '#1e293b',
                                                                isDarkMode ? '#334155' : 'transparent',
                                                                isDarkMode ? '#94a3b8' : '#666',
                                                                isDarkMode ? '#0f172a' : '#f8fafc',
                                                                isDarkMode ? '#64748b' : '#64748b',
                                                                isDarkMode ? '#334155' : '#eee',
                                                                isDarkMode ? '#0f172a' : '#f8fafc',
                                                                isDarkMode ? '#334155' : '#e2e8f0',
                                                                isDarkMode ? '#cbd5e1' : '#334155',
                                                                isDarkMode ? '#020617' : '#0f172a'
                                                            ]
                                                        ]
                                                    ]),
                                                    children: [
                                                        "$",
                                                        selectedStockDetails?.price || 'N/A'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/pages/index.js",
                                                    lineNumber: 587,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/pages/index.js",
                                            lineNumber: 584,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                                [
                                                    "2d61b444a67c0314",
                                                    [
                                                        isDarkMode ? '#0f172a' : '#f1f5f9',
                                                        isDarkMode ? '#1e293b' : '#fff',
                                                        isDarkMode ? '#f1f5f9' : '#1e293b',
                                                        isDarkMode ? '#334155' : 'transparent',
                                                        isDarkMode ? '#f8fafc' : '#0f172a',
                                                        isDarkMode ? '#94a3b8' : '#666',
                                                        isDarkMode ? '#475569' : '#ddd',
                                                        isDarkMode ? '#0f172a' : '#fff',
                                                        isDarkMode ? '#fff' : '#000',
                                                        isDarkMode ? '#1e293b' : 'white',
                                                        isDarkMode ? '#f1f5f9' : '#1e293b',
                                                        isDarkMode ? '#334155' : 'transparent',
                                                        isDarkMode ? '#94a3b8' : '#666',
                                                        isDarkMode ? '#0f172a' : '#f8fafc',
                                                        isDarkMode ? '#64748b' : '#64748b',
                                                        isDarkMode ? '#334155' : '#eee',
                                                        isDarkMode ? '#0f172a' : '#f8fafc',
                                                        isDarkMode ? '#334155' : '#e2e8f0',
                                                        isDarkMode ? '#cbd5e1' : '#334155',
                                                        isDarkMode ? '#020617' : '#0f172a'
                                                    ]
                                                ]
                                            ]) + " " + "stat-item",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                                        [
                                                            "2d61b444a67c0314",
                                                            [
                                                                isDarkMode ? '#0f172a' : '#f1f5f9',
                                                                isDarkMode ? '#1e293b' : '#fff',
                                                                isDarkMode ? '#f1f5f9' : '#1e293b',
                                                                isDarkMode ? '#334155' : 'transparent',
                                                                isDarkMode ? '#f8fafc' : '#0f172a',
                                                                isDarkMode ? '#94a3b8' : '#666',
                                                                isDarkMode ? '#475569' : '#ddd',
                                                                isDarkMode ? '#0f172a' : '#fff',
                                                                isDarkMode ? '#fff' : '#000',
                                                                isDarkMode ? '#1e293b' : 'white',
                                                                isDarkMode ? '#f1f5f9' : '#1e293b',
                                                                isDarkMode ? '#334155' : 'transparent',
                                                                isDarkMode ? '#94a3b8' : '#666',
                                                                isDarkMode ? '#0f172a' : '#f8fafc',
                                                                isDarkMode ? '#64748b' : '#64748b',
                                                                isDarkMode ? '#334155' : '#eee',
                                                                isDarkMode ? '#0f172a' : '#f8fafc',
                                                                isDarkMode ? '#334155' : '#e2e8f0',
                                                                isDarkMode ? '#cbd5e1' : '#334155',
                                                                isDarkMode ? '#020617' : '#0f172a'
                                                            ]
                                                        ]
                                                    ]),
                                                    children: "P/E"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/pages/index.js",
                                                    lineNumber: 592,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                                    style: {
                                                        color: isDarkMode ? '#fff' : '#000'
                                                    },
                                                    className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                                        [
                                                            "2d61b444a67c0314",
                                                            [
                                                                isDarkMode ? '#0f172a' : '#f1f5f9',
                                                                isDarkMode ? '#1e293b' : '#fff',
                                                                isDarkMode ? '#f1f5f9' : '#1e293b',
                                                                isDarkMode ? '#334155' : 'transparent',
                                                                isDarkMode ? '#f8fafc' : '#0f172a',
                                                                isDarkMode ? '#94a3b8' : '#666',
                                                                isDarkMode ? '#475569' : '#ddd',
                                                                isDarkMode ? '#0f172a' : '#fff',
                                                                isDarkMode ? '#fff' : '#000',
                                                                isDarkMode ? '#1e293b' : 'white',
                                                                isDarkMode ? '#f1f5f9' : '#1e293b',
                                                                isDarkMode ? '#334155' : 'transparent',
                                                                isDarkMode ? '#94a3b8' : '#666',
                                                                isDarkMode ? '#0f172a' : '#f8fafc',
                                                                isDarkMode ? '#64748b' : '#64748b',
                                                                isDarkMode ? '#334155' : '#eee',
                                                                isDarkMode ? '#0f172a' : '#f8fafc',
                                                                isDarkMode ? '#334155' : '#e2e8f0',
                                                                isDarkMode ? '#cbd5e1' : '#334155',
                                                                isDarkMode ? '#020617' : '#0f172a'
                                                            ]
                                                        ]
                                                    ]),
                                                    children: selectedStockDetails?.pe || 'N/A'
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/pages/index.js",
                                                    lineNumber: 593,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/pages/index.js",
                                            lineNumber: 591,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                                [
                                                    "2d61b444a67c0314",
                                                    [
                                                        isDarkMode ? '#0f172a' : '#f1f5f9',
                                                        isDarkMode ? '#1e293b' : '#fff',
                                                        isDarkMode ? '#f1f5f9' : '#1e293b',
                                                        isDarkMode ? '#334155' : 'transparent',
                                                        isDarkMode ? '#f8fafc' : '#0f172a',
                                                        isDarkMode ? '#94a3b8' : '#666',
                                                        isDarkMode ? '#475569' : '#ddd',
                                                        isDarkMode ? '#0f172a' : '#fff',
                                                        isDarkMode ? '#fff' : '#000',
                                                        isDarkMode ? '#1e293b' : 'white',
                                                        isDarkMode ? '#f1f5f9' : '#1e293b',
                                                        isDarkMode ? '#334155' : 'transparent',
                                                        isDarkMode ? '#94a3b8' : '#666',
                                                        isDarkMode ? '#0f172a' : '#f8fafc',
                                                        isDarkMode ? '#64748b' : '#64748b',
                                                        isDarkMode ? '#334155' : '#eee',
                                                        isDarkMode ? '#0f172a' : '#f8fafc',
                                                        isDarkMode ? '#334155' : '#e2e8f0',
                                                        isDarkMode ? '#cbd5e1' : '#334155',
                                                        isDarkMode ? '#020617' : '#0f172a'
                                                    ]
                                                ]
                                            ]) + " " + "stat-item",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                                        [
                                                            "2d61b444a67c0314",
                                                            [
                                                                isDarkMode ? '#0f172a' : '#f1f5f9',
                                                                isDarkMode ? '#1e293b' : '#fff',
                                                                isDarkMode ? '#f1f5f9' : '#1e293b',
                                                                isDarkMode ? '#334155' : 'transparent',
                                                                isDarkMode ? '#f8fafc' : '#0f172a',
                                                                isDarkMode ? '#94a3b8' : '#666',
                                                                isDarkMode ? '#475569' : '#ddd',
                                                                isDarkMode ? '#0f172a' : '#fff',
                                                                isDarkMode ? '#fff' : '#000',
                                                                isDarkMode ? '#1e293b' : 'white',
                                                                isDarkMode ? '#f1f5f9' : '#1e293b',
                                                                isDarkMode ? '#334155' : 'transparent',
                                                                isDarkMode ? '#94a3b8' : '#666',
                                                                isDarkMode ? '#0f172a' : '#f8fafc',
                                                                isDarkMode ? '#64748b' : '#64748b',
                                                                isDarkMode ? '#334155' : '#eee',
                                                                isDarkMode ? '#0f172a' : '#f8fafc',
                                                                isDarkMode ? '#334155' : '#e2e8f0',
                                                                isDarkMode ? '#cbd5e1' : '#334155',
                                                                isDarkMode ? '#020617' : '#0f172a'
                                                            ]
                                                        ]
                                                    ]),
                                                    children: "Growth"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/pages/index.js",
                                                    lineNumber: 598,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                                    style: {
                                                        color: isDarkMode ? '#fff' : '#000'
                                                    },
                                                    className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                                        [
                                                            "2d61b444a67c0314",
                                                            [
                                                                isDarkMode ? '#0f172a' : '#f1f5f9',
                                                                isDarkMode ? '#1e293b' : '#fff',
                                                                isDarkMode ? '#f1f5f9' : '#1e293b',
                                                                isDarkMode ? '#334155' : 'transparent',
                                                                isDarkMode ? '#f8fafc' : '#0f172a',
                                                                isDarkMode ? '#94a3b8' : '#666',
                                                                isDarkMode ? '#475569' : '#ddd',
                                                                isDarkMode ? '#0f172a' : '#fff',
                                                                isDarkMode ? '#fff' : '#000',
                                                                isDarkMode ? '#1e293b' : 'white',
                                                                isDarkMode ? '#f1f5f9' : '#1e293b',
                                                                isDarkMode ? '#334155' : 'transparent',
                                                                isDarkMode ? '#94a3b8' : '#666',
                                                                isDarkMode ? '#0f172a' : '#f8fafc',
                                                                isDarkMode ? '#64748b' : '#64748b',
                                                                isDarkMode ? '#334155' : '#eee',
                                                                isDarkMode ? '#0f172a' : '#f8fafc',
                                                                isDarkMode ? '#334155' : '#e2e8f0',
                                                                isDarkMode ? '#cbd5e1' : '#334155',
                                                                isDarkMode ? '#020617' : '#0f172a'
                                                            ]
                                                        ]
                                                    ]),
                                                    children: selectedStockDetails?.revenueGrowth ? (selectedStockDetails.revenueGrowth * 100).toFixed(1) + '%' : 'N/A'
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/pages/index.js",
                                                    lineNumber: 599,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/pages/index.js",
                                            lineNumber: 597,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/pages/index.js",
                                    lineNumber: 583,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        gap: '10px',
                                        marginTop: '20px'
                                    },
                                    className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                        [
                                            "2d61b444a67c0314",
                                            [
                                                isDarkMode ? '#0f172a' : '#f1f5f9',
                                                isDarkMode ? '#1e293b' : '#fff',
                                                isDarkMode ? '#f1f5f9' : '#1e293b',
                                                isDarkMode ? '#334155' : 'transparent',
                                                isDarkMode ? '#f8fafc' : '#0f172a',
                                                isDarkMode ? '#94a3b8' : '#666',
                                                isDarkMode ? '#475569' : '#ddd',
                                                isDarkMode ? '#0f172a' : '#fff',
                                                isDarkMode ? '#fff' : '#000',
                                                isDarkMode ? '#1e293b' : 'white',
                                                isDarkMode ? '#f1f5f9' : '#1e293b',
                                                isDarkMode ? '#334155' : 'transparent',
                                                isDarkMode ? '#94a3b8' : '#666',
                                                isDarkMode ? '#0f172a' : '#f8fafc',
                                                isDarkMode ? '#64748b' : '#64748b',
                                                isDarkMode ? '#334155' : '#eee',
                                                isDarkMode ? '#0f172a' : '#f8fafc',
                                                isDarkMode ? '#334155' : '#e2e8f0',
                                                isDarkMode ? '#cbd5e1' : '#334155',
                                                isDarkMode ? '#020617' : '#0f172a'
                                            ]
                                        ]
                                    ]),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            style: {
                                                flex: 1,
                                                background: '#0b5fff'
                                            },
                                            onClick: ()=>{
                                                showChart(selectedStockDetails.ticker);
                                                setIsModalOpen(false);
                                            },
                                            className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                                [
                                                    "2d61b444a67c0314",
                                                    [
                                                        isDarkMode ? '#0f172a' : '#f1f5f9',
                                                        isDarkMode ? '#1e293b' : '#fff',
                                                        isDarkMode ? '#f1f5f9' : '#1e293b',
                                                        isDarkMode ? '#334155' : 'transparent',
                                                        isDarkMode ? '#f8fafc' : '#0f172a',
                                                        isDarkMode ? '#94a3b8' : '#666',
                                                        isDarkMode ? '#475569' : '#ddd',
                                                        isDarkMode ? '#0f172a' : '#fff',
                                                        isDarkMode ? '#fff' : '#000',
                                                        isDarkMode ? '#1e293b' : 'white',
                                                        isDarkMode ? '#f1f5f9' : '#1e293b',
                                                        isDarkMode ? '#334155' : 'transparent',
                                                        isDarkMode ? '#94a3b8' : '#666',
                                                        isDarkMode ? '#0f172a' : '#f8fafc',
                                                        isDarkMode ? '#64748b' : '#64748b',
                                                        isDarkMode ? '#334155' : '#eee',
                                                        isDarkMode ? '#0f172a' : '#f8fafc',
                                                        isDarkMode ? '#334155' : '#e2e8f0',
                                                        isDarkMode ? '#cbd5e1' : '#334155',
                                                        isDarkMode ? '#020617' : '#0f172a'
                                                    ]
                                                ]
                                            ]),
                                            children: "📈 View Chart"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/pages/index.js",
                                            lineNumber: 606,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            style: {
                                                flex: 1,
                                                background: '#10b981'
                                            },
                                            onClick: ()=>{
                                                askRecommend(selectedStockDetails.ticker);
                                                setIsModalOpen(false);
                                            },
                                            className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                                [
                                                    "2d61b444a67c0314",
                                                    [
                                                        isDarkMode ? '#0f172a' : '#f1f5f9',
                                                        isDarkMode ? '#1e293b' : '#fff',
                                                        isDarkMode ? '#f1f5f9' : '#1e293b',
                                                        isDarkMode ? '#334155' : 'transparent',
                                                        isDarkMode ? '#f8fafc' : '#0f172a',
                                                        isDarkMode ? '#94a3b8' : '#666',
                                                        isDarkMode ? '#475569' : '#ddd',
                                                        isDarkMode ? '#0f172a' : '#fff',
                                                        isDarkMode ? '#fff' : '#000',
                                                        isDarkMode ? '#1e293b' : 'white',
                                                        isDarkMode ? '#f1f5f9' : '#1e293b',
                                                        isDarkMode ? '#334155' : 'transparent',
                                                        isDarkMode ? '#94a3b8' : '#666',
                                                        isDarkMode ? '#0f172a' : '#f8fafc',
                                                        isDarkMode ? '#64748b' : '#64748b',
                                                        isDarkMode ? '#334155' : '#eee',
                                                        isDarkMode ? '#0f172a' : '#f8fafc',
                                                        isDarkMode ? '#334155' : '#e2e8f0',
                                                        isDarkMode ? '#cbd5e1' : '#334155',
                                                        isDarkMode ? '#020617' : '#0f172a'
                                                    ]
                                                ]
                                            ]),
                                            children: "🤖 Get Advice"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/pages/index.js",
                                            lineNumber: 609,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/pages/index.js",
                                    lineNumber: 605,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/pages/index.js",
                    lineNumber: 574,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/pages/index.js",
                lineNumber: 573,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"], {
                id: "2d61b444a67c0314",
                dynamic: [
                    isDarkMode ? '#0f172a' : '#f1f5f9',
                    isDarkMode ? '#1e293b' : '#fff',
                    isDarkMode ? '#f1f5f9' : '#1e293b',
                    isDarkMode ? '#334155' : 'transparent',
                    isDarkMode ? '#f8fafc' : '#0f172a',
                    isDarkMode ? '#94a3b8' : '#666',
                    isDarkMode ? '#475569' : '#ddd',
                    isDarkMode ? '#0f172a' : '#fff',
                    isDarkMode ? '#fff' : '#000',
                    isDarkMode ? '#1e293b' : 'white',
                    isDarkMode ? '#f1f5f9' : '#1e293b',
                    isDarkMode ? '#334155' : 'transparent',
                    isDarkMode ? '#94a3b8' : '#666',
                    isDarkMode ? '#0f172a' : '#f8fafc',
                    isDarkMode ? '#64748b' : '#64748b',
                    isDarkMode ? '#334155' : '#eee',
                    isDarkMode ? '#0f172a' : '#f8fafc',
                    isDarkMode ? '#334155' : '#e2e8f0',
                    isDarkMode ? '#cbd5e1' : '#334155',
                    isDarkMode ? '#020617' : '#0f172a'
                ],
                children: `body{background-color:${isDarkMode ? '#0f172a' : '#f1f5f9'};margin:0;transition:background-color .3s}.container.__jsx-style-dynamic-selector{max-width:900px;margin:24px auto;padding:0 16px;font-family:sans-serif}.card.__jsx-style-dynamic-selector{background:${isDarkMode ? '#1e293b' : '#fff'};color:${isDarkMode ? '#f1f5f9' : '#1e293b'};border:1px solid ${isDarkMode ? '#334155' : 'transparent'};border-radius:8px;margin-bottom:12px;padding:16px;box-shadow:0 1px 3px #0000001a}h1.__jsx-style-dynamic-selector,h2.__jsx-style-dynamic-selector{color:${isDarkMode ? '#f8fafc' : '#0f172a'}}label.__jsx-style-dynamic-selector{color:${isDarkMode ? '#94a3b8' : '#666'}}form.__jsx-style-dynamic-selector{gap:8px;display:grid}input.__jsx-style-dynamic-selector{border:1px solid ${isDarkMode ? '#475569' : '#ddd'};background:${isDarkMode ? '#0f172a' : '#fff'};color:${isDarkMode ? '#fff' : '#000'};border-radius:4px;padding:10px}button.__jsx-style-dynamic-selector{color:#fff;cursor:pointer;background:#0b5fff;border:none;border-radius:6px;padding:10px 16px;font-weight:700}.grid-list.__jsx-style-dynamic-selector{flex-wrap:wrap;gap:8px;display:flex}.stock-pill.__jsx-style-dynamic-selector{color:#fff;background:#0b5fff;border-radius:20px;padding:6px 14px;font-size:13px}.modal-overlay.__jsx-style-dynamic-selector{z-index:1000;background:#000c;justify-content:center;align-items:center;width:100%;height:100%;display:flex;position:fixed;top:0;left:0}.modal-content.__jsx-style-dynamic-selector{background:${isDarkMode ? '#1e293b' : 'white'};color:${isDarkMode ? '#f1f5f9' : '#1e293b'};border:1px solid ${isDarkMode ? '#334155' : 'transparent'};border-radius:12px;width:90%;max-width:400px;padding:25px;position:relative}.close-btn.__jsx-style-dynamic-selector{cursor:pointer;color:${isDarkMode ? '#94a3b8' : '#666'};background:0 0;border:none;font-size:24px;position:absolute;top:10px;right:15px}.stats-grid.__jsx-style-dynamic-selector{grid-template-columns:1fr 1fr;gap:10px;margin-top:15px;display:grid}.stat-item.__jsx-style-dynamic-selector{background:${isDarkMode ? '#0f172a' : '#f8fafc'};border-radius:6px;padding:10px}.stat-item.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{color:${isDarkMode ? '#64748b' : '#64748b'};text-transform:uppercase;font-size:11px;display:block}.result.__jsx-style-dynamic-selector{border-bottom:1px solid ${isDarkMode ? '#334155' : '#eee'};justify-content:space-between;align-items:center;padding:10px 0;display:flex}.chat-box.__jsx-style-dynamic-selector{background:${isDarkMode ? '#0f172a' : '#f8fafc'};border:1px solid ${isDarkMode ? '#334155' : '#e2e8f0'};white-space:pre-wrap;color:${isDarkMode ? '#cbd5e1' : '#334155'};border-radius:6px;margin-top:10px;padding:12px;font-size:14px}.log-list.__jsx-style-dynamic-selector{maxHeight:150px;padding:0;font-size:11px;list-style:none;overflow-y:auto}.market-ticker.__jsx-style-dynamic-selector{background:${isDarkMode ? '#020617' : '#0f172a'};color:#fff;border-radius:12px;align-items:center;gap:15px;margin-bottom:25px;padding:10px 20px;display:flex;box-shadow:0 4px 6px -1px #0000001a}.refresh-btn.__jsx-style-dynamic-selector{color:#fff;cursor:pointer;background:#0b5fff;border:none;border-radius:6px;align-items:center;gap:6px;padding:8px 16px;font-weight:700;transition:all .2s;display:flex;box-shadow:0 2px 4px #0b5fff33}.refresh-btn.__jsx-style-dynamic-selector:hover{background:#2575ff;transform:translateY(-1px);box-shadow:0 4px 12px #0b5fff4d}.refresh-btn.__jsx-style-dynamic-selector:active{filter:brightness(.9);box-shadow:none;transform:translateY(1px)}.live-dot.__jsx-style-dynamic-selector{animation:2s infinite pulse}@keyframes pulse{0%{transform:scale(.95);box-shadow:0 0 #10b981b3}70%{transform:scale(1);box-shadow:0 0 0 6px #10b98100}to{transform:scale(.95);box-shadow:0 0 #10b98100}}`
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/pages/index.js",
        lineNumber: 303,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__428ae99d._.js.map