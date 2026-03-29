(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[turbopack]/browser/dev/hmr-client/hmr-client.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/// <reference path="../../../shared/runtime-types.d.ts" />
/// <reference path="../../runtime/base/dev-globals.d.ts" />
/// <reference path="../../runtime/base/dev-protocol.d.ts" />
/// <reference path="../../runtime/base/dev-extensions.ts" />
__turbopack_context__.s([
    "connect",
    ()=>connect,
    "setHooks",
    ()=>setHooks,
    "subscribeToUpdate",
    ()=>subscribeToUpdate
]);
function connect({ addMessageListener, sendMessage, onUpdateError = console.error }) {
    addMessageListener((msg)=>{
        switch(msg.type){
            case 'turbopack-connected':
                handleSocketConnected(sendMessage);
                break;
            default:
                try {
                    if (Array.isArray(msg.data)) {
                        for(let i = 0; i < msg.data.length; i++){
                            handleSocketMessage(msg.data[i]);
                        }
                    } else {
                        handleSocketMessage(msg.data);
                    }
                    applyAggregatedUpdates();
                } catch (e) {
                    console.warn('[Fast Refresh] performing full reload\n\n' + "Fast Refresh will perform a full reload when you edit a file that's imported by modules outside of the React rendering tree.\n" + 'You might have a file which exports a React component but also exports a value that is imported by a non-React component file.\n' + 'Consider migrating the non-React component export to a separate file and importing it into both files.\n\n' + 'It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh.\n' + 'Fast Refresh requires at least one parent function component in your React tree.');
                    onUpdateError(e);
                    location.reload();
                }
                break;
        }
    });
    const queued = globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS;
    if (queued != null && !Array.isArray(queued)) {
        throw new Error('A separate HMR handler was already registered');
    }
    globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS = {
        push: ([chunkPath, callback])=>{
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    };
    if (Array.isArray(queued)) {
        for (const [chunkPath, callback] of queued){
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    }
}
const updateCallbackSets = new Map();
function sendJSON(sendMessage, message) {
    sendMessage(JSON.stringify(message));
}
function resourceKey(resource) {
    return JSON.stringify({
        path: resource.path,
        headers: resource.headers || null
    });
}
function subscribeToUpdates(sendMessage, resource) {
    sendJSON(sendMessage, {
        type: 'turbopack-subscribe',
        ...resource
    });
    return ()=>{
        sendJSON(sendMessage, {
            type: 'turbopack-unsubscribe',
            ...resource
        });
    };
}
function handleSocketConnected(sendMessage) {
    for (const key of updateCallbackSets.keys()){
        subscribeToUpdates(sendMessage, JSON.parse(key));
    }
}
// we aggregate all pending updates until the issues are resolved
const chunkListsWithPendingUpdates = new Map();
function aggregateUpdates(msg) {
    const key = resourceKey(msg.resource);
    let aggregated = chunkListsWithPendingUpdates.get(key);
    if (aggregated) {
        aggregated.instruction = mergeChunkListUpdates(aggregated.instruction, msg.instruction);
    } else {
        chunkListsWithPendingUpdates.set(key, msg);
    }
}
function applyAggregatedUpdates() {
    if (chunkListsWithPendingUpdates.size === 0) return;
    hooks.beforeRefresh();
    for (const msg of chunkListsWithPendingUpdates.values()){
        triggerUpdate(msg);
    }
    chunkListsWithPendingUpdates.clear();
    finalizeUpdate();
}
function mergeChunkListUpdates(updateA, updateB) {
    let chunks;
    if (updateA.chunks != null) {
        if (updateB.chunks == null) {
            chunks = updateA.chunks;
        } else {
            chunks = mergeChunkListChunks(updateA.chunks, updateB.chunks);
        }
    } else if (updateB.chunks != null) {
        chunks = updateB.chunks;
    }
    let merged;
    if (updateA.merged != null) {
        if (updateB.merged == null) {
            merged = updateA.merged;
        } else {
            // Since `merged` is an array of updates, we need to merge them all into
            // one, consistent update.
            // Since there can only be `EcmascriptMergeUpdates` in the array, there is
            // no need to key on the `type` field.
            let update = updateA.merged[0];
            for(let i = 1; i < updateA.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateA.merged[i]);
            }
            for(let i = 0; i < updateB.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateB.merged[i]);
            }
            merged = [
                update
            ];
        }
    } else if (updateB.merged != null) {
        merged = updateB.merged;
    }
    return {
        type: 'ChunkListUpdate',
        chunks,
        merged
    };
}
function mergeChunkListChunks(chunksA, chunksB) {
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    return chunks;
}
function mergeChunkUpdates(updateA, updateB) {
    if (updateA.type === 'added' && updateB.type === 'deleted' || updateA.type === 'deleted' && updateB.type === 'added') {
        return undefined;
    }
    if (updateA.type === 'partial') {
        invariant(updateA.instruction, 'Partial updates are unsupported');
    }
    if (updateB.type === 'partial') {
        invariant(updateB.instruction, 'Partial updates are unsupported');
    }
    return undefined;
}
function mergeChunkListEcmascriptMergedUpdates(mergedA, mergedB) {
    const entries = mergeEcmascriptChunkEntries(mergedA.entries, mergedB.entries);
    const chunks = mergeEcmascriptChunksUpdates(mergedA.chunks, mergedB.chunks);
    return {
        type: 'EcmascriptMergedUpdate',
        entries,
        chunks
    };
}
function mergeEcmascriptChunkEntries(entriesA, entriesB) {
    return {
        ...entriesA,
        ...entriesB
    };
}
function mergeEcmascriptChunksUpdates(chunksA, chunksB) {
    if (chunksA == null) {
        return chunksB;
    }
    if (chunksB == null) {
        return chunksA;
    }
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeEcmascriptChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    if (Object.keys(chunks).length === 0) {
        return undefined;
    }
    return chunks;
}
function mergeEcmascriptChunkUpdates(updateA, updateB) {
    if (updateA.type === 'added' && updateB.type === 'deleted') {
        // These two completely cancel each other out.
        return undefined;
    }
    if (updateA.type === 'deleted' && updateB.type === 'added') {
        const added = [];
        const deleted = [];
        const deletedModules = new Set(updateA.modules ?? []);
        const addedModules = new Set(updateB.modules ?? []);
        for (const moduleId of addedModules){
            if (!deletedModules.has(moduleId)) {
                added.push(moduleId);
            }
        }
        for (const moduleId of deletedModules){
            if (!addedModules.has(moduleId)) {
                deleted.push(moduleId);
            }
        }
        if (added.length === 0 && deleted.length === 0) {
            return undefined;
        }
        return {
            type: 'partial',
            added,
            deleted
        };
    }
    if (updateA.type === 'partial' && updateB.type === 'partial') {
        const added = new Set([
            ...updateA.added ?? [],
            ...updateB.added ?? []
        ]);
        const deleted = new Set([
            ...updateA.deleted ?? [],
            ...updateB.deleted ?? []
        ]);
        if (updateB.added != null) {
            for (const moduleId of updateB.added){
                deleted.delete(moduleId);
            }
        }
        if (updateB.deleted != null) {
            for (const moduleId of updateB.deleted){
                added.delete(moduleId);
            }
        }
        return {
            type: 'partial',
            added: [
                ...added
            ],
            deleted: [
                ...deleted
            ]
        };
    }
    if (updateA.type === 'added' && updateB.type === 'partial') {
        const modules = new Set([
            ...updateA.modules ?? [],
            ...updateB.added ?? []
        ]);
        for (const moduleId of updateB.deleted ?? []){
            modules.delete(moduleId);
        }
        return {
            type: 'added',
            modules: [
                ...modules
            ]
        };
    }
    if (updateA.type === 'partial' && updateB.type === 'deleted') {
        // We could eagerly return `updateB` here, but this would potentially be
        // incorrect if `updateA` has added modules.
        const modules = new Set(updateB.modules ?? []);
        if (updateA.added != null) {
            for (const moduleId of updateA.added){
                modules.delete(moduleId);
            }
        }
        return {
            type: 'deleted',
            modules: [
                ...modules
            ]
        };
    }
    // Any other update combination is invalid.
    return undefined;
}
function invariant(_, message) {
    throw new Error(`Invariant: ${message}`);
}
const CRITICAL = [
    'bug',
    'error',
    'fatal'
];
function compareByList(list, a, b) {
    const aI = list.indexOf(a) + 1 || list.length;
    const bI = list.indexOf(b) + 1 || list.length;
    return aI - bI;
}
const chunksWithIssues = new Map();
function emitIssues() {
    const issues = [];
    const deduplicationSet = new Set();
    for (const [_, chunkIssues] of chunksWithIssues){
        for (const chunkIssue of chunkIssues){
            if (deduplicationSet.has(chunkIssue.formatted)) continue;
            issues.push(chunkIssue);
            deduplicationSet.add(chunkIssue.formatted);
        }
    }
    sortIssues(issues);
    hooks.issues(issues);
}
function handleIssues(msg) {
    const key = resourceKey(msg.resource);
    let hasCriticalIssues = false;
    for (const issue of msg.issues){
        if (CRITICAL.includes(issue.severity)) {
            hasCriticalIssues = true;
        }
    }
    if (msg.issues.length > 0) {
        chunksWithIssues.set(key, msg.issues);
    } else if (chunksWithIssues.has(key)) {
        chunksWithIssues.delete(key);
    }
    emitIssues();
    return hasCriticalIssues;
}
const SEVERITY_ORDER = [
    'bug',
    'fatal',
    'error',
    'warning',
    'info',
    'log'
];
const CATEGORY_ORDER = [
    'parse',
    'resolve',
    'code generation',
    'rendering',
    'typescript',
    'other'
];
function sortIssues(issues) {
    issues.sort((a, b)=>{
        const first = compareByList(SEVERITY_ORDER, a.severity, b.severity);
        if (first !== 0) return first;
        return compareByList(CATEGORY_ORDER, a.category, b.category);
    });
}
const hooks = {
    beforeRefresh: ()=>{},
    refresh: ()=>{},
    buildOk: ()=>{},
    issues: (_issues)=>{}
};
function setHooks(newHooks) {
    Object.assign(hooks, newHooks);
}
function handleSocketMessage(msg) {
    sortIssues(msg.issues);
    handleIssues(msg);
    switch(msg.type){
        case 'issues':
            break;
        case 'partial':
            // aggregate updates
            aggregateUpdates(msg);
            break;
        default:
            // run single update
            const runHooks = chunkListsWithPendingUpdates.size === 0;
            if (runHooks) hooks.beforeRefresh();
            triggerUpdate(msg);
            if (runHooks) finalizeUpdate();
            break;
    }
}
function finalizeUpdate() {
    hooks.refresh();
    hooks.buildOk();
    // This is used by the Next.js integration test suite to notify it when HMR
    // updates have been completed.
    // TODO: Only run this in test environments (gate by `process.env.__NEXT_TEST_MODE`)
    if (globalThis.__NEXT_HMR_CB) {
        globalThis.__NEXT_HMR_CB();
        globalThis.__NEXT_HMR_CB = null;
    }
}
function subscribeToChunkUpdate(chunkListPath, sendMessage, callback) {
    return subscribeToUpdate({
        path: chunkListPath
    }, sendMessage, callback);
}
function subscribeToUpdate(resource, sendMessage, callback) {
    const key = resourceKey(resource);
    let callbackSet;
    const existingCallbackSet = updateCallbackSets.get(key);
    if (!existingCallbackSet) {
        callbackSet = {
            callbacks: new Set([
                callback
            ]),
            unsubscribe: subscribeToUpdates(sendMessage, resource)
        };
        updateCallbackSets.set(key, callbackSet);
    } else {
        existingCallbackSet.callbacks.add(callback);
        callbackSet = existingCallbackSet;
    }
    return ()=>{
        callbackSet.callbacks.delete(callback);
        if (callbackSet.callbacks.size === 0) {
            callbackSet.unsubscribe();
            updateCallbackSets.delete(key);
        }
    };
}
function triggerUpdate(msg) {
    const key = resourceKey(msg.resource);
    const callbackSet = updateCallbackSets.get(key);
    if (!callbackSet) {
        return;
    }
    for (const callback of callbackSet.callbacks){
        callback(msg);
    }
    if (msg.type === 'notFound') {
        // This indicates that the resource which we subscribed to either does not exist or
        // has been deleted. In either case, we should clear all update callbacks, so if a
        // new subscription is created for the same resource, it will send a new "subscribe"
        // message to the server.
        // No need to send an "unsubscribe" message to the server, it will have already
        // dropped the update stream before sending the "notFound" message.
        updateCallbackSets.delete(key);
    }
}
}),
"[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/components/Watchlist.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/node_modules/react/index.js [client] (ecmascript)");
;
;
const Watchlist = ({ watchlist, isDarkMode, onStockClick, onRemove })=>{
    if (watchlist.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "card",
        style: {
            marginTop: '20px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '15px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    overflowX: 'auto'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    style: {
                        width: '100%',
                        borderCollapse: 'collapse',
                        textAlign: 'left'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                style: {
                                    borderBottom: `1px solid ${isDarkMode ? '#334155' : '#eee'}`,
                                    color: '#64748b',
                                    fontSize: '12px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: {
                                            padding: '12px 8px'
                                        },
                                        children: "COMPANY"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/components/Watchlist.js",
                                        lineNumber: 16,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: watchlist.map((ticker)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    style: {
                                        borderBottom: `1px solid ${isDarkMode ? '#1e293b' : '#f8fafc'}`
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                padding: '12px 8px'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                padding: '12px 8px'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
_c = Watchlist;
const __TURBOPACK__default__export__ = Watchlist;
var _c;
__turbopack_context__.k.register(_c, "Watchlist");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/components/StockModal.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf/dist/jspdf.es.min.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html2canvas$2f$dist$2f$html2canvas$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/html2canvas/dist/html2canvas.js [client] (ecmascript)");
;
;
;
;
const StockModal = ({ isOpen, onClose, details, isDarkMode, onViewChart, onGetAdvice })=>{
    if (!isOpen) return null;
    const exportPDF = ()=>{
        const input = document.getElementById('ai-advice-content'); // We'll tag the advice div
        const ticker = details?.ticker || 'Stock';
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html2canvas$2f$dist$2f$html2canvas$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(input, {
            scale: 2,
            useCORS: true,
            backgroundColor: isDarkMode ? '#1e293b' : '#ffffff'
        }).then((canvas)=>{
            const imgData = canvas.toDataURL('image/png');
            const pdf = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]('p', 'mm', 'a4');
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "modal-overlay",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "modal-content",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "close-btn",
                    onClick: onClose,
                    children: "×"
                }, void 0, false, {
                    fileName: "[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/components/StockModal.js",
                    lineNumber: 42,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                details?.loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        "Loading ",
                        details.ticker,
                        "..."
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/components/StockModal.js",
                    lineNumber: 44,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "stats-grid",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "stat-item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Price"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/components/StockModal.js",
                                            lineNumber: 52,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "stat-item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "P/E"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/components/StockModal.js",
                                            lineNumber: 58,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "stat-item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Growth"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/components/StockModal.js",
                                            lineNumber: 64,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: '10px',
                                marginTop: '20px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        details?.recommendation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: '20px',
                                borderTop: `1px solid ${isDarkMode ? '#334155' : '#eee'}`,
                                paddingTop: '15px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginBottom: '10px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_c = StockModal;
const __TURBOPACK__default__export__ = StockModal;
var _c;
__turbopack_context__.k.register(_c, "StockModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/pages/watchlist.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WatchlistPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/node_modules/styled-jsx/style.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$next$2f$head$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/node_modules/next/head.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/node_modules/next/link.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$components$2f$Watchlist$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/components/Watchlist.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$components$2f$StockModal$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/components/StockModal.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
function WatchlistPage() {
    _s();
    const [watchlist, setWatchlist] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isDarkMode, setIsDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedStockDetails, setSelectedStockDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const apiBase = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_BASE || 'http://localhost:8000';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WatchlistPage.useEffect": ()=>{
            const savedTheme = localStorage.getItem('theme');
            setIsDarkMode(savedTheme === 'dark');
            const savedWatch = JSON.parse(localStorage.getItem('stock_watchlist') || '[]');
            setWatchlist(savedWatch);
        }
    }["WatchlistPage.useEffect"], []);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            " ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    minHeight: '100vh',
                    padding: '20px',
                    background: isDarkMode ? '#0f172a' : '#f8fafc',
                    transition: 'all 0.3s ease'
                },
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].dynamic([
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$next$2f$head$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].dynamic([
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        style: {
                            marginBottom: '30px',
                            display: 'flex',
                            gap: '20px'
                        },
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].dynamic([
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
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        style: {
                            maxWidth: '1000px',
                            margin: '0 auto'
                        },
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].dynamic([
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    color: isDarkMode ? '#fff' : '#000',
                                    marginBottom: '20px'
                                },
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].dynamic([
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$components$2f$Watchlist$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                watchlist: watchlist,
                                isDarkMode: isDarkMode,
                                onStockClick: handleStockClick,
                                onRemove: handleRemove
                            }, void 0, false, {
                                fileName: "[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/pages/watchlist.js",
                                lineNumber: 71,
                                columnNumber: 10
                            }, this),
                            watchlist.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: 'center',
                                    marginTop: '100px',
                                    color: '#64748b'
                                },
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].dynamic([
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].dynamic([
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code_repo$2f$projectsToWork$2f$stockMarketWithAi$2f$frontend$2f$components$2f$StockModal$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
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
_s(WatchlistPage, "WSXGn0u0G1OSbDImSA6mJKrboDE=");
_c = WatchlistPage;
var _c;
__turbopack_context__.k.register(_c, "WatchlistPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[next]/entry/page-loader.ts { PAGE => \"[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/pages/watchlist.js [client] (ecmascript)\" } [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const PAGE_PATH = "/watchlist";
(window.__NEXT_P = window.__NEXT_P || []).push([
    PAGE_PATH,
    ()=>{
        return __turbopack_context__.r("[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/pages/watchlist.js [client] (ecmascript)");
    }
]);
// @ts-expect-error module.hot exists
if (module.hot) {
    // @ts-expect-error module.hot exists
    module.hot.dispose(function() {
        window.__NEXT_P.push([
            PAGE_PATH
        ]);
    });
}
}),
"[hmr-entry]/hmr-entry.js { ENTRY => \"[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/pages/watchlist\" }", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.r("[next]/entry/page-loader.ts { PAGE => \"[project]/Documents/code_repo/projectsToWork/stockMarketWithAi/frontend/pages/watchlist.js [client] (ecmascript)\" } [client] (ecmascript)");
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__a7ce338b._.js.map