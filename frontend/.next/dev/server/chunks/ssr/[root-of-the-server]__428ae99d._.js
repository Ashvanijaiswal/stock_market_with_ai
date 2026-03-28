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
    const apiBase = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:8000';
    const defaults = {
        US: 'AAPL,MSFT,GOOGL',
        IN: 'RELIANCE.NS,TCS.NS,INFY.NS'
    };
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
            // 2. SMART FEEDBACK: If no matches found, alert the user specifically about the market
            if (data.matches && data.matches.length === 0) {
                const errorMsg = market === 'IN' ? "No matches found. Reminder: You are in the INDIA market. Only NSE stocks (e.g. TCS, RELIANCE) are valid here." : "No matches found. Please check your US ticker symbols (e.g. AAPL, TSLA).";
                alert(errorMsg);
            }
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
        try {
            const res = await fetch(`${apiBase}/events?limit=10`);
            const data = await res.json();
            setActivityLog(data.events || []);
        } catch (err) {
            console.error(err);
        }
    }
    if (!market) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "jsx-3ed056984420f739" + " " + "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("header", {
                    className: "jsx-3ed056984420f739",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                        className: "jsx-3ed056984420f739",
                        children: "Stock Screener MVP"
                    }, void 0, false, {
                        fileName: "[project]/frontend/pages/index.js",
                        lineNumber: 184,
                        columnNumber: 17
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/frontend/pages/index.js",
                    lineNumber: 184,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                    className: "jsx-3ed056984420f739" + " " + "card",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                            className: "jsx-3ed056984420f739",
                            children: "Select Market"
                        }, void 0, false, {
                            fileName: "[project]/frontend/pages/index.js",
                            lineNumber: 186,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: 12
                            },
                            className: "jsx-3ed056984420f739",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    onClick: ()=>chooseMarket('US'),
                                    className: "jsx-3ed056984420f739",
                                    children: "US Market"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/pages/index.js",
                                    lineNumber: 188,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    onClick: ()=>chooseMarket('IN'),
                                    className: "jsx-3ed056984420f739",
                                    children: "India Market"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/pages/index.js",
                                    lineNumber: 189,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/pages/index.js",
                            lineNumber: 187,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/pages/index.js",
                    lineNumber: 185,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"], {
                    id: "3ed056984420f739",
                    children: ".container.jsx-3ed056984420f739{max-width:900px;margin:24px auto;padding:0 16px}.card.jsx-3ed056984420f739{background:#fff;border-radius:8px;margin-bottom:12px;padding:20px;box-shadow:0 1px 3px #0000001a}button.jsx-3ed056984420f739{color:#fff;cursor:pointer;background:#0b5fff;border:none;border-radius:6px;padding:10px 20px;font-weight:700}"
                }, void 0, false, void 0, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/pages/index.js",
            lineNumber: 183,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "jsx-11cb42fa162da83a" + " " + "container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("header", {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '20px'
                },
                className: "jsx-11cb42fa162da83a",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                        style: {
                            margin: 0
                        },
                        className: "jsx-11cb42fa162da83a",
                        children: [
                            "Stock Screener (",
                            market,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/pages/index.js",
                        lineNumber: 204,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: backToMarket,
                        style: {
                            background: '#e2e8f0',
                            color: '#475569'
                        },
                        className: "jsx-11cb42fa162da83a",
                        children: "Change Market"
                    }, void 0, false, {
                        fileName: "[project]/frontend/pages/index.js",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/pages/index.js",
                lineNumber: 203,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                style: {
                    border: '2px solid #0b5fff'
                },
                className: "jsx-11cb42fa162da83a" + " " + "card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        className: "jsx-11cb42fa162da83a",
                        children: [
                            "Market Insights (",
                            market,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/pages/index.js",
                        lineNumber: 210,
                        columnNumber: 9
                    }, this),
                    topStocks.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: ()=>fetchTrending(market),
                        style: {
                            background: '#f59e0b'
                        },
                        className: "jsx-11cb42fa162da83a",
                        children: "🔥 Show Trending Stocks"
                    }, void 0, false, {
                        fileName: "[project]/frontend/pages/index.js",
                        lineNumber: 212,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "jsx-11cb42fa162da83a" + " " + "grid-list",
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
                                    className: "jsx-11cb42fa162da83a" + " " + "stock-pill",
                                    children: ticker.replace('.NS', '').replace('.BO', '')
                                }, ticker, false, {
                                    fileName: "[project]/frontend/pages/index.js",
                                    lineNumber: 216,
                                    columnNumber: 15
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: ()=>setTopStocks([]),
                                style: {
                                    background: 'none',
                                    color: '#666'
                                },
                                className: "jsx-11cb42fa162da83a",
                                children: "(Hide)"
                            }, void 0, false, {
                                fileName: "[project]/frontend/pages/index.js",
                                lineNumber: 234,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/pages/index.js",
                        lineNumber: 214,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/pages/index.js",
                lineNumber: 209,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: "jsx-11cb42fa162da83a" + " " + "card",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
                    onSubmit: runScreener,
                    className: "jsx-11cb42fa162da83a",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                            className: "jsx-11cb42fa162da83a",
                            children: "Tickers"
                        }, void 0, false, {
                            fileName: "[project]/frontend/pages/index.js",
                            lineNumber: 242,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                            value: tickers,
                            onChange: (e)=>setTickers(e.target.value),
                            className: "jsx-11cb42fa162da83a"
                        }, void 0, false, {
                            fileName: "[project]/frontend/pages/index.js",
                            lineNumber: 243,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: '10px'
                            },
                            className: "jsx-11cb42fa162da83a",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: {
                                        flex: 1
                                    },
                                    className: "jsx-11cb42fa162da83a",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                            className: "jsx-11cb42fa162da83a",
                                            children: "Min CAGR %"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/pages/index.js",
                                            lineNumber: 245,
                                            columnNumber: 36
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            value: minCagr,
                                            onChange: (e)=>setMinCagr(e.target.value),
                                            style: {
                                                width: '100%'
                                            },
                                            className: "jsx-11cb42fa162da83a"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/pages/index.js",
                                            lineNumber: 245,
                                            columnNumber: 61
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/pages/index.js",
                                    lineNumber: 245,
                                    columnNumber: 14
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: {
                                        flex: 1
                                    },
                                    className: "jsx-11cb42fa162da83a",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                            className: "jsx-11cb42fa162da83a",
                                            children: "Years"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/pages/index.js",
                                            lineNumber: 246,
                                            columnNumber: 36
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            value: years,
                                            onChange: (e)=>setYears(e.target.value),
                                            style: {
                                                width: '100%'
                                            },
                                            className: "jsx-11cb42fa162da83a"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/pages/index.js",
                                            lineNumber: 246,
                                            columnNumber: 56
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/pages/index.js",
                                    lineNumber: 246,
                                    columnNumber: 14
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/pages/index.js",
                            lineNumber: 244,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: loading,
                            style: {
                                marginTop: '10px'
                            },
                            className: "jsx-11cb42fa162da83a",
                            children: loading ? 'Running...' : 'Run Screener'
                        }, void 0, false, {
                            fileName: "[project]/frontend/pages/index.js",
                            lineNumber: 248,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/pages/index.js",
                    lineNumber: 241,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/pages/index.js",
                lineNumber: 240,
                columnNumber: 7
            }, this),
            results.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: "jsx-11cb42fa162da83a" + " " + "card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        className: "jsx-11cb42fa162da83a",
                        children: "Results"
                    }, void 0, false, {
                        fileName: "[project]/frontend/pages/index.js",
                        lineNumber: 255,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                        className: "jsx-11cb42fa162da83a",
                        children: results.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                className: "jsx-11cb42fa162da83a" + " " + "result",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "jsx-11cb42fa162da83a",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                                className: "jsx-11cb42fa162da83a",
                                                children: r.ticker
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/pages/index.js",
                                                lineNumber: 259,
                                                columnNumber: 22
                                            }, this),
                                            " (CAGR: ",
                                            r.cagr_pct,
                                            "%)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/pages/index.js",
                                        lineNumber: 259,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "jsx-11cb42fa162da83a" + " " + "actions",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                onClick: ()=>showChart(r.ticker),
                                                className: "jsx-11cb42fa162da83a",
                                                children: "Chart"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/pages/index.js",
                                                lineNumber: 261,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                onClick: ()=>askRecommend(r.ticker),
                                                style: {
                                                    background: '#10b981'
                                                },
                                                className: "jsx-11cb42fa162da83a",
                                                children: "AI Advice"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/pages/index.js",
                                                lineNumber: 262,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/pages/index.js",
                                        lineNumber: 260,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, r.ticker, true, {
                                fileName: "[project]/frontend/pages/index.js",
                                lineNumber: 258,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/frontend/pages/index.js",
                        lineNumber: 256,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/pages/index.js",
                lineNumber: 254,
                columnNumber: 9
            }, this),
            selectedChart && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                id: "chart-view",
                className: "jsx-11cb42fa162da83a" + " " + "card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        className: "jsx-11cb42fa162da83a",
                        children: [
                            selectedChart.ticker,
                            " Performance"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/pages/index.js",
                        lineNumber: 273,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            width: '100%',
                            height: 350
                        },
                        className: "jsx-11cb42fa162da83a",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["LineChart"], {
                                data: selectedChart.data,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Line"], {
                                        type: "monotone",
                                        dataKey: "price",
                                        stroke: "#0b5fff",
                                        strokeWidth: 2,
                                        dot: false
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/pages/index.js",
                                        lineNumber: 277,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                        stroke: "#ccc",
                                        strokeDasharray: "5 5",
                                        opacity: 0.5
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/pages/index.js",
                                        lineNumber: 278,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
                                        dataKey: "date",
                                        hide: true
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/pages/index.js",
                                        lineNumber: 279,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
                                        domain: [
                                            'auto',
                                            'auto'
                                        ]
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/pages/index.js",
                                        lineNumber: 280,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {}, void 0, false, {
                                        fileName: "[project]/frontend/pages/index.js",
                                        lineNumber: 281,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/pages/index.js",
                                lineNumber: 276,
                                columnNumber: 21
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/pages/index.js",
                            lineNumber: 275,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/pages/index.js",
                        lineNumber: 274,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/pages/index.js",
                lineNumber: 272,
                columnNumber: 9
            }, this),
            recommendation && !recommendation.loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                id: "recommendation-section",
                style: {
                    borderTop: `6px solid ${getRiskInfo(selectedStockDetails?.pe).color}`,
                    transition: 'all 0.3s ease'
                },
                className: "jsx-11cb42fa162da83a" + " " + "card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '15px'
                        },
                        className: "jsx-11cb42fa162da83a",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                style: {
                                    margin: 0
                                },
                                className: "jsx-11cb42fa162da83a",
                                children: "AI Recommendation"
                            }, void 0, false, {
                                fileName: "[project]/frontend/pages/index.js",
                                lineNumber: 295,
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
                                    letterSpacing: '0.5px',
                                    textTransform: 'uppercase'
                                },
                                className: "jsx-11cb42fa162da83a",
                                children: getRiskInfo(selectedStockDetails?.pe).label
                            }, void 0, false, {
                                fileName: "[project]/frontend/pages/index.js",
                                lineNumber: 298,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/pages/index.js",
                        lineNumber: 294,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            background: '#f8fafc',
                            padding: '15px',
                            borderRadius: '8px',
                            border: '1px solid #e2e8f0'
                        },
                        className: "jsx-11cb42fa162da83a",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                style: {
                                    margin: '0 0 10px 0'
                                },
                                className: "jsx-11cb42fa162da83a",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                        className: "jsx-11cb42fa162da83a",
                                        children: "Ticker:"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/pages/index.js",
                                        lineNumber: 314,
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
                                        className: "jsx-11cb42fa162da83a",
                                        children: [
                                            "(",
                                            market === 'IN' ? 'NSE India' : 'US Market',
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/pages/index.js",
                                        lineNumber: 315,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/pages/index.js",
                                lineNumber: 313,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                style: {
                                    margin: '0 0 15px 0'
                                },
                                className: "jsx-11cb42fa162da83a",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                        className: "jsx-11cb42fa162da83a",
                                        children: "Action:"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/pages/index.js",
                                        lineNumber: 321,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        style: {
                                            marginLeft: '10px',
                                            color: recommendation.action === 'BUY' ? '#10b981' : '#ef4444',
                                            fontSize: '22px',
                                            fontWeight: '900'
                                        },
                                        className: "jsx-11cb42fa162da83a",
                                        children: recommendation.action
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/pages/index.js",
                                        lineNumber: 322,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/pages/index.js",
                                lineNumber: 320,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    borderTop: '1px solid #e2e8f0',
                                    paddingTop: '10px'
                                },
                                className: "jsx-11cb42fa162da83a",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    style: {
                                        lineHeight: '1.6',
                                        color: '#334155',
                                        margin: 0
                                    },
                                    className: "jsx-11cb42fa162da83a",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                            className: "jsx-11cb42fa162da83a",
                                            children: "Analyst Note:"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/pages/index.js",
                                            lineNumber: 334,
                                            columnNumber: 19
                                        }, this),
                                        " ",
                                        recommendation.reason
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/pages/index.js",
                                    lineNumber: 333,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/pages/index.js",
                                lineNumber: 332,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/pages/index.js",
                        lineNumber: 312,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/pages/index.js",
                lineNumber: 290,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("footer", {
                className: "jsx-11cb42fa162da83a",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                        style: {
                            border: '2px solid #e0e7ff'
                        },
                        className: "jsx-11cb42fa162da83a" + " " + "card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                className: "jsx-11cb42fa162da83a",
                                children: "Ask the AI Analyst"
                            }, void 0, false, {
                                fileName: "[project]/frontend/pages/index.js",
                                lineNumber: 344,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
                                onSubmit: askAgent,
                                style: {
                                    display: 'flex',
                                    gap: '8px'
                                },
                                className: "jsx-11cb42fa162da83a",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                        style: {
                                            flex: 1
                                        },
                                        value: chatQuery,
                                        onChange: (e)=>setChatQuery(e.target.value),
                                        placeholder: "Ask about any stock...",
                                        className: "jsx-11cb42fa162da83a"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/pages/index.js",
                                        lineNumber: 346,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: isChatting,
                                        className: "jsx-11cb42fa162da83a",
                                        children: isChatting ? 'Thinking...' : 'Ask AI'
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/pages/index.js",
                                        lineNumber: 347,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/pages/index.js",
                                lineNumber: 345,
                                columnNumber: 11
                            }, this),
                            chatResponse && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "jsx-11cb42fa162da83a" + " " + "chat-box",
                                children: chatResponse
                            }, void 0, false, {
                                fileName: "[project]/frontend/pages/index.js",
                                lineNumber: 349,
                                columnNumber: 28
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/pages/index.js",
                        lineNumber: 343,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                        className: "jsx-11cb42fa162da83a" + " " + "card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                },
                                className: "jsx-11cb42fa162da83a",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                        style: {
                                            margin: 0
                                        },
                                        className: "jsx-11cb42fa162da83a",
                                        children: "Activity Log"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/pages/index.js",
                                        lineNumber: 354,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        onClick: loadActivityLog,
                                        style: {
                                            background: '#333'
                                        },
                                        className: "jsx-11cb42fa162da83a",
                                        children: "Refresh"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/pages/index.js",
                                        lineNumber: 355,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/pages/index.js",
                                lineNumber: 353,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                className: "jsx-11cb42fa162da83a" + " " + "log-list",
                                children: activityLog.map((ev)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        className: "jsx-11cb42fa162da83a",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                                className: "jsx-11cb42fa162da83a",
                                                children: ev.event_type
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/pages/index.js",
                                                lineNumber: 359,
                                                columnNumber: 31
                                            }, this),
                                            ": ",
                                            JSON.stringify(ev.payload)
                                        ]
                                    }, ev.id, true, {
                                        fileName: "[project]/frontend/pages/index.js",
                                        lineNumber: 359,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/frontend/pages/index.js",
                                lineNumber: 357,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/pages/index.js",
                        lineNumber: 352,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/pages/index.js",
                lineNumber: 342,
                columnNumber: 7
            }, this),
            isModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                onClick: ()=>setIsModalOpen(false),
                className: "jsx-11cb42fa162da83a" + " " + "modal-overlay",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    onClick: (e)=>e.stopPropagation(),
                    className: "jsx-11cb42fa162da83a" + " " + "modal-content",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsModalOpen(false),
                            className: "jsx-11cb42fa162da83a" + " " + "close-btn",
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/frontend/pages/index.js",
                            lineNumber: 369,
                            columnNumber: 13
                        }, this),
                        selectedStockDetails?.loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            className: "jsx-11cb42fa162da83a",
                            children: [
                                "Loading ",
                                selectedStockDetails.ticker,
                                "..."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/pages/index.js",
                            lineNumber: 371,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                    className: "jsx-11cb42fa162da83a",
                                    children: [
                                        selectedStockDetails?.ticker,
                                        " Overview"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/pages/index.js",
                                    lineNumber: 374,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "jsx-11cb42fa162da83a" + " " + "stats-grid",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "jsx-11cb42fa162da83a" + " " + "stat-item",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "jsx-11cb42fa162da83a",
                                                    children: "Price"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/pages/index.js",
                                                    lineNumber: 376,
                                                    columnNumber: 46
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                                    className: "jsx-11cb42fa162da83a",
                                                    children: [
                                                        "$",
                                                        selectedStockDetails?.price || 'N/A'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/pages/index.js",
                                                    lineNumber: 376,
                                                    columnNumber: 64
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/pages/index.js",
                                            lineNumber: 376,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "jsx-11cb42fa162da83a" + " " + "stat-item",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "jsx-11cb42fa162da83a",
                                                    children: "P/E"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/pages/index.js",
                                                    lineNumber: 377,
                                                    columnNumber: 46
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                                    className: "jsx-11cb42fa162da83a",
                                                    children: selectedStockDetails?.pe || 'N/A'
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/pages/index.js",
                                                    lineNumber: 377,
                                                    columnNumber: 62
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/pages/index.js",
                                            lineNumber: 377,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "jsx-11cb42fa162da83a" + " " + "stat-item",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "jsx-11cb42fa162da83a",
                                                    children: "Growth"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/pages/index.js",
                                                    lineNumber: 378,
                                                    columnNumber: 46
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                                    className: "jsx-11cb42fa162da83a",
                                                    children: selectedStockDetails?.revenueGrowth ? (selectedStockDetails.revenueGrowth * 100).toFixed(1) + '%' : 'N/A'
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/pages/index.js",
                                                    lineNumber: 378,
                                                    columnNumber: 65
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/pages/index.js",
                                            lineNumber: 378,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/pages/index.js",
                                    lineNumber: 375,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        gap: '10px',
                                        marginTop: '20px'
                                    },
                                    className: "jsx-11cb42fa162da83a",
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
                                            className: "jsx-11cb42fa162da83a",
                                            children: "📈 View Chart"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/pages/index.js",
                                            lineNumber: 382,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            style: {
                                                flex: 1,
                                                background: '#10b981'
                                            },
                                            onClick: ()=>{
                                                // THIS IS THE FIX: Pass the ticker and close the modal
                                                askRecommend(selectedStockDetails.ticker);
                                                setIsModalOpen(false);
                                            },
                                            className: "jsx-11cb42fa162da83a",
                                            children: "🤖 Get Advice"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/pages/index.js",
                                            lineNumber: 392,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/pages/index.js",
                                    lineNumber: 381,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/pages/index.js",
                    lineNumber: 368,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/pages/index.js",
                lineNumber: 367,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"], {
                id: "11cb42fa162da83a",
                children: ".container.jsx-11cb42fa162da83a{max-width:900px;margin:24px auto;padding:0 16px;font-family:sans-serif}.card.jsx-11cb42fa162da83a{background:#fff;border-radius:8px;margin-bottom:12px;padding:16px;box-shadow:0 1px 3px #0000001a}form.jsx-11cb42fa162da83a{gap:8px;display:grid}input.jsx-11cb42fa162da83a{border:1px solid #ddd;border-radius:4px;padding:10px}button.jsx-11cb42fa162da83a{color:#fff;cursor:pointer;background:#0b5fff;border:none;border-radius:6px;padding:10px 16px;font-weight:700}.grid-list.jsx-11cb42fa162da83a{flex-wrap:wrap;gap:8px;display:flex}.stock-pill.jsx-11cb42fa162da83a{color:#fff;background:#0b5fff;border-radius:20px;padding:6px 14px;font-size:13px}.modal-overlay.jsx-11cb42fa162da83a{z-index:1000;background:#000000b3;justify-content:center;align-items:center;width:100%;height:100%;display:flex;position:fixed;top:0;left:0}.modal-content.jsx-11cb42fa162da83a{background:#fff;border-radius:12px;width:90%;max-width:400px;padding:25px;position:relative}.close-btn.jsx-11cb42fa162da83a{cursor:pointer;background:0 0;border:none;font-size:24px;position:absolute;top:10px;right:15px}.stats-grid.jsx-11cb42fa162da83a{grid-template-columns:1fr 1fr;gap:10px;margin-top:15px;display:grid}.stat-item.jsx-11cb42fa162da83a{background:#f8fafc;border-radius:6px;padding:10px}.stat-item.jsx-11cb42fa162da83a span.jsx-11cb42fa162da83a{color:#64748b;text-transform:uppercase;font-size:11px;display:block}.result.jsx-11cb42fa162da83a{border-bottom:1px solid #eee;justify-content:space-between;align-items:center;padding:10px 0;display:flex}.chat-box.jsx-11cb42fa162da83a{white-space:pre-wrap;background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;margin-top:10px;padding:12px;font-size:14px}.log-list.jsx-11cb42fa162da83a{maxHeight:150px;padding:0;font-size:11px;list-style:none;overflow-y:auto}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/pages/index.js",
        lineNumber: 202,
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