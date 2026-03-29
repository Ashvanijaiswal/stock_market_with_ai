module.exports = [
"[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("styled-jsx/style.js", () => require("styled-jsx/style.js"));

module.exports = mod;
}),
"[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/components/Watchlist.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
const Watchlist = ({ watchlist, isDarkMode, onStockClick, onRemove })=>{
    if (watchlist.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        className: "card",
        style: {
            marginTop: '20px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '15px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                    style: {
                        margin: 0
                    },
                    children: [
                        "My Watchlist (",
                        watchlist.length,
                        ")"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/components/Watchlist.js",
                    lineNumber: 9,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/components/Watchlist.js",
                lineNumber: 8,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    overflowX: 'auto'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("table", {
                    style: {
                        width: '100%',
                        borderCollapse: 'collapse',
                        textAlign: 'left'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("tr", {
                                style: {
                                    borderBottom: `1px solid ${isDarkMode ? '#334155' : '#eee'}`,
                                    color: '#64748b',
                                    fontSize: '12px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("th", {
                                        style: {
                                            padding: '12px 8px'
                                        },
                                        children: "COMPANY"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/components/Watchlist.js",
                                        lineNumber: 16,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("th", {
                                        style: {
                                            padding: '12px 8px'
                                        },
                                        children: "ACTION"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/components/Watchlist.js",
                                        lineNumber: 17,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/components/Watchlist.js",
                                lineNumber: 15,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/components/Watchlist.js",
                            lineNumber: 14,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("tbody", {
                            children: watchlist.map((ticker)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("tr", {
                                    style: {
                                        borderBottom: `1px solid ${isDarkMode ? '#1e293b' : '#f8fafc'}`
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                            style: {
                                                padding: '12px 8px'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                onClick: ()=>onStockClick(ticker),
                                                style: {
                                                    background: 'none',
                                                    color: '#0b5fff',
                                                    border: 'none',
                                                    fontWeight: 'bold',
                                                    cursor: 'pointer',
                                                    padding: 0
                                                },
                                                children: ticker.replace('.NS', '')
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/components/Watchlist.js",
                                                lineNumber: 24,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/components/Watchlist.js",
                                            lineNumber: 23,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                            style: {
                                                padding: '12px 8px'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                onClick: ()=>onRemove(ticker),
                                                style: {
                                                    background: '#fee2e2',
                                                    color: '#ef4444',
                                                    border: 'none',
                                                    padding: '4px 8px',
                                                    borderRadius: '4px',
                                                    cursor: 'pointer',
                                                    fontSize: '11px'
                                                },
                                                children: "Remove"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/components/Watchlist.js",
                                                lineNumber: 32,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/components/Watchlist.js",
                                            lineNumber: 31,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, ticker, true, {
                                    fileName: "[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/components/Watchlist.js",
                                    lineNumber: 22,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/components/Watchlist.js",
                            lineNumber: 20,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/components/Watchlist.js",
                    lineNumber: 13,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/components/Watchlist.js",
                lineNumber: 12,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/components/Watchlist.js",
        lineNumber: 7,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Watchlist;
}),
"[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/components/StockModal.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$jspdf__$5b$external$5d$__$28$jspdf$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$jspdf$29$__ = __turbopack_context__.i("[externals]/jspdf [external] (jspdf, cjs, [project]/node_modules/jspdf)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$html2canvas__$5b$external$5d$__$28$html2canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$html2canvas$29$__ = __turbopack_context__.i("[externals]/html2canvas [external] (html2canvas, cjs, [project]/node_modules/html2canvas)");
;
;
;
;
const StockModal = ({ isOpen, onClose, details, isDarkMode, onViewChart, onGetAdvice })=>{
    if (!isOpen) return null;
    const exportPDF = ()=>{
        const input = document.getElementById('ai-advice-content'); // We'll tag the advice div
        const ticker = details?.ticker || 'Stock';
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$html2canvas__$5b$external$5d$__$28$html2canvas$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$html2canvas$29$__["default"])(input, {
            scale: 2,
            useCORS: true,
            backgroundColor: isDarkMode ? '#1e293b' : '#ffffff'
        }).then((canvas)=>{
            const imgData = canvas.toDataURL('image/png');
            const pdf = new __TURBOPACK__imported__module__$5b$externals$5d2f$jspdf__$5b$external$5d$__$28$jspdf$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$jspdf$29$__["default"]('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = canvas.height * pdfWidth / canvas.width;
            // Header Branding
            pdf.setFontSize(18);
            pdf.setTextColor(11, 95, 255); // Your Brand Blue
            pdf.text('MindSpark Hub - AI Stock Analysis', 10, 20);
            pdf.setFontSize(10);
            pdf.setTextColor(100);
            pdf.text(`Report Generated: ${new Date().toLocaleDateString()}`, 10, 28);
            pdf.text(`Ticker: ${ticker}`, 10, 34);
            // The Analysis Image
            pdf.addImage(imgData, 'PNG', 10, 40, pdfWidth - 20, pdfHeight - 20);
            pdf.save(`MindSpark_Report_${ticker}.pdf`);
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "modal-overlay",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "modal-content",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                    className: "close-btn",
                    onClick: onClose,
                    children: "×"
                }, void 0, false, {
                    fileName: "[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/components/StockModal.js",
                    lineNumber: 42,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                details?.loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                    children: [
                        "Loading ",
                        details.ticker,
                        "..."
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/components/StockModal.js",
                    lineNumber: 44,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                            style: {
                                color: isDarkMode ? '#f8fafc' : '#0f172a'
                            },
                            children: [
                                details?.ticker,
                                " Overview"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/components/StockModal.js",
                            lineNumber: 47,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "stats-grid",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "stat-item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            children: "Price"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/components/StockModal.js",
                                            lineNumber: 52,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                            style: {
                                                color: isDarkMode ? '#fff' : '#000'
                                            },
                                            children: [
                                                "$",
                                                details?.price || 'N/A'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/components/StockModal.js",
                                            lineNumber: 53,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/components/StockModal.js",
                                    lineNumber: 51,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "stat-item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            children: "P/E"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/components/StockModal.js",
                                            lineNumber: 58,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                            style: {
                                                color: isDarkMode ? '#fff' : '#000'
                                            },
                                            children: details?.pe || 'N/A'
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/components/StockModal.js",
                                            lineNumber: 59,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/components/StockModal.js",
                                    lineNumber: 57,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "stat-item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            children: "Growth"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/components/StockModal.js",
                                            lineNumber: 64,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                            style: {
                                                color: isDarkMode ? '#fff' : '#000'
                                            },
                                            children: details?.revenueGrowth ? (details.revenueGrowth * 100).toFixed(1) + '%' : 'N/A'
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/components/StockModal.js",
                                            lineNumber: 65,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/components/StockModal.js",
                                    lineNumber: 63,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/components/StockModal.js",
                            lineNumber: 50,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: '10px',
                                marginTop: '20px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    style: {
                                        flex: 1,
                                        background: '#0b5fff'
                                    },
                                    onClick: ()=>onViewChart(details.ticker),
                                    children: "📈 View Chart"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/components/StockModal.js",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    style: {
                                        flex: 1,
                                        background: '#10b981'
                                    },
                                    onClick: ()=>onGetAdvice(details.ticker),
                                    children: "🤖 Get Advice"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/components/StockModal.js",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/components/StockModal.js",
                            lineNumber: 71,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        details?.recommendation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: '20px',
                                borderTop: `1px solid ${isDarkMode ? '#334155' : '#eee'}`,
                                paddingTop: '15px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginBottom: '10px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                            style: {
                                                margin: 0,
                                                fontSize: '14px',
                                                color: isDarkMode ? '#94a3b8' : '#64748b'
                                            },
                                            children: "AI Analysis Report"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/components/StockModal.js",
                                            lineNumber: 83,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: exportPDF,
                                            style: {
                                                background: '#0b5fff',
                                                fontSize: '11px',
                                                padding: '5px 12px',
                                                borderRadius: '4px',
                                                cursor: 'pointer'
                                            },
                                            children: "📥 Export PDF"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/components/StockModal.js",
                                            lineNumber: 86,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/components/StockModal.js",
                                    lineNumber: 82,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    id: "ai-advice-content",
                                    style: {
                                        fontSize: '13px',
                                        lineHeight: '1.6',
                                        color: isDarkMode ? '#cbd5e1' : '#444',
                                        padding: '12px',
                                        borderRadius: '8px',
                                        background: isDarkMode ? '#0f172a' : '#f8fafc',
                                        border: `1px solid ${isDarkMode ? '#334155' : '#e2e8f0'}`
                                    },
                                    children: details.recommendation
                                }, void 0, false, {
                                    fileName: "[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/components/StockModal.js",
                                    lineNumber: 100,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/components/StockModal.js",
                            lineNumber: 81,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/components/StockModal.js",
            lineNumber: 41,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/components/StockModal.js",
        lineNumber: 40,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = StockModal;
}),
"[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/pages/watchlist.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WatchlistPage
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/node_modules/next/head.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$components$2f$Watchlist$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/components/Watchlist.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$components$2f$StockModal$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/components/StockModal.js [ssr] (ecmascript)");
;
;
;
;
;
;
;
function WatchlistPage() {
    const [watchlist, setWatchlist] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [isDarkMode, setIsDarkMode] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [selectedStockDetails, setSelectedStockDetails] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const apiBase = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:8000';
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const savedTheme = localStorage.getItem('theme');
        setIsDarkMode(savedTheme === 'dark');
        const savedWatch = JSON.parse(localStorage.getItem('stock_watchlist') || '[]');
        setWatchlist(savedWatch);
    }, []);
    const handleRemove = (ticker)=>{
        const updated = watchlist.filter((t)=>t !== ticker);
        setWatchlist(updated);
        localStorage.setItem('stock_watchlist', JSON.stringify(updated));
    };
    const showChart = (ticker)=>{
        const m = ticker.includes('.NS') ? 'IN' : 'US';
        window.location.href = `/?ticker=${ticker}&action=chart&market=${m}`;
    };
    const askRecommend = (ticker)=>{
        const m = ticker.includes('.NS') ? 'IN' : 'US';
        window.location.href = `/?ticker=${ticker}&action=recommend&market=${m}`;
    };
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
                error: 'Failed to load',
                ticker
            });
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            " ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    minHeight: '100vh',
                    padding: '20px',
                    background: isDarkMode ? '#0f172a' : '#f8fafc',
                    transition: 'all 0.3s ease'
                },
                className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                    [
                        "5d21f237db307691",
                        [
                            isDarkMode ? '#1e293b' : '#ffffff',
                            isDarkMode ? '#f1f5f9' : '#1e293b',
                            isDarkMode ? '#1e293b' : 'white',
                            isDarkMode ? '#0f172a' : '#f8fafc',
                            isDarkMode ? '#94a3b8' : '#666'
                        ]
                    ]
                ]) + " " + ((isDarkMode ? 'dark-mode' : '') || ""),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                            className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                [
                                    "5d21f237db307691",
                                    [
                                        isDarkMode ? '#1e293b' : '#ffffff',
                                        isDarkMode ? '#f1f5f9' : '#1e293b',
                                        isDarkMode ? '#1e293b' : 'white',
                                        isDarkMode ? '#0f172a' : '#f8fafc',
                                        isDarkMode ? '#94a3b8' : '#666'
                                    ]
                                ]
                            ]),
                            children: "My Watchlist | StockScreener"
                        }, void 0, false, {
                            fileName: "[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/pages/watchlist.js",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/pages/watchlist.js",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
                        style: {
                            marginBottom: '30px',
                            display: 'flex',
                            gap: '20px'
                        },
                        className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                            [
                                "5d21f237db307691",
                                [
                                    isDarkMode ? '#1e293b' : '#ffffff',
                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                    isDarkMode ? '#1e293b' : 'white',
                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                    isDarkMode ? '#94a3b8' : '#666'
                                ]
                            ]
                        ]),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            style: {
                                color: '#0b5fff',
                                textDecoration: 'none',
                                fontWeight: 'bold'
                            },
                            children: "← Back to Screener"
                        }, void 0, false, {
                            fileName: "[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/pages/watchlist.js",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/pages/watchlist.js",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
                        style: {
                            maxWidth: '1000px',
                            margin: '0 auto'
                        },
                        className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                            [
                                "5d21f237db307691",
                                [
                                    isDarkMode ? '#1e293b' : '#ffffff',
                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                    isDarkMode ? '#1e293b' : 'white',
                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                    isDarkMode ? '#94a3b8' : '#666'
                                ]
                            ]
                        ]),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                style: {
                                    color: isDarkMode ? '#fff' : '#000',
                                    marginBottom: '20px'
                                },
                                className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                    [
                                        "5d21f237db307691",
                                        [
                                            isDarkMode ? '#1e293b' : '#ffffff',
                                            isDarkMode ? '#f1f5f9' : '#1e293b',
                                            isDarkMode ? '#1e293b' : 'white',
                                            isDarkMode ? '#0f172a' : '#f8fafc',
                                            isDarkMode ? '#94a3b8' : '#666'
                                        ]
                                    ]
                                ]),
                                children: "Market Watch"
                            }, void 0, false, {
                                fileName: "[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/pages/watchlist.js",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$components$2f$Watchlist$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                watchlist: watchlist,
                                isDarkMode: isDarkMode,
                                onStockClick: handleStockClick,
                                onRemove: handleRemove
                            }, void 0, false, {
                                fileName: "[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/pages/watchlist.js",
                                lineNumber: 71,
                                columnNumber: 10
                            }, this),
                            watchlist.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: 'center',
                                    marginTop: '100px',
                                    color: '#64748b'
                                },
                                className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                    [
                                        "5d21f237db307691",
                                        [
                                            isDarkMode ? '#1e293b' : '#ffffff',
                                            isDarkMode ? '#f1f5f9' : '#1e293b',
                                            isDarkMode ? '#1e293b' : 'white',
                                            isDarkMode ? '#0f172a' : '#f8fafc',
                                            isDarkMode ? '#94a3b8' : '#666'
                                        ]
                                    ]
                                ]),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"].dynamic([
                                            [
                                                "5d21f237db307691",
                                                [
                                                    isDarkMode ? '#1e293b' : '#ffffff',
                                                    isDarkMode ? '#f1f5f9' : '#1e293b',
                                                    isDarkMode ? '#1e293b' : 'white',
                                                    isDarkMode ? '#0f172a' : '#f8fafc',
                                                    isDarkMode ? '#94a3b8' : '#666'
                                                ]
                                            ]
                                        ]),
                                        children: "Your watchlist is empty."
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/pages/watchlist.js",
                                        lineNumber: 80,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        style: {
                                            color: '#0b5fff'
                                        },
                                        children: "Start adding stocks"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/pages/watchlist.js",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/pages/watchlist.js",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/pages/watchlist.js",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"], {
                        id: "5d21f237db307691",
                        dynamic: [
                            isDarkMode ? '#1e293b' : '#ffffff',
                            isDarkMode ? '#f1f5f9' : '#1e293b',
                            isDarkMode ? '#1e293b' : 'white',
                            isDarkMode ? '#0f172a' : '#f8fafc',
                            isDarkMode ? '#94a3b8' : '#666'
                        ],
                        children: `.card{background:${isDarkMode ? '#1e293b' : '#ffffff'};color:${isDarkMode ? '#f1f5f9' : '#1e293b'};border-radius:12px;padding:24px;box-shadow:0 4px 6px -1px #0000001a}.modal-overlay{z-index:1000;background:#000c;justify-content:center;align-items:center;width:100%;height:100%;display:flex;position:fixed;top:0;left:0}.modal-content{background:${isDarkMode ? '#1e293b' : 'white'};border-radius:12px;width:90%;max-width:400px;padding:25px;position:relative}.stats-grid{grid-template-columns:1fr 1fr;gap:10px;margin-top:15px;display:grid}.stat-item{background:${isDarkMode ? '#0f172a' : '#f8fafc'};border-radius:6px;padding:10px}.stat-item span{color:#64748b;text-transform:uppercase;font-size:11px;display:block}.close-btn{cursor:pointer;color:${isDarkMode ? '#94a3b8' : '#666'};background:0 0;border:none;font-size:24px;position:absolute;top:10px;right:15px}`
                    }, void 0, false, void 0, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/pages/watchlist.js",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$components$2f$StockModal$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isModalOpen,
                onClose: ()=>setIsModalOpen(false),
                details: selectedStockDetails,
                isDarkMode: isDarkMode,
                onViewChart: showChart,
                onGetAdvice: askRecommend
            }, void 0, false, {
                fileName: "[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/pages/watchlist.js",
                lineNumber: 124,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__bdaa339c._.js.map