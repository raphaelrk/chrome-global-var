// This is a minimal background service worker that provides access to the chrome global
// You can inspect this in chrome://extensions by clicking "Service Worker" under your extension

// console.log('Background service worker loaded. chrome API is available:', chrome);

console.log('[Chrome Global Access - background.js]', chrome);

// chrome.runtime.onInstalled.addListener(() => {
//   console.log('[Chrome Global Access - background.js] onInstalled');
// });
//
// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   console.log('[Chrome Global Access - background.js] onMessage', request, sender, sendResponse);
// });
//
// chrome.runtime.onConnect.addListener((port) => {
//   console.log('[Chrome Global Access - background.js] onConnect', port);
// });
//
// chrome.runtime.onStartup.addListener(() => {
//   console.log('[Chrome Global Access - background.js] onStartup');
// });


