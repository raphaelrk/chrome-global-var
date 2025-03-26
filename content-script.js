console.log('[Chrome Global Access - content-script.js]');

// // Content script for Chrome Global Access
// // Provides useful debugging and experimentation features
//
// // Create a global object for easy access from console
// window.chromeGlobalAccess = {
//   // Log when content script is loaded
//   init() {
//     // console.log('Chrome Global Access content script loaded');
//     console.log('[content-script.js] initialized chromeGlobalAccess', chromeGlobalAccess);
//   },
//
//   // Get all elements matching a selector
//   query(selector) {
//     return Array.from(document.querySelectorAll(selector));
//   },
//
//   // Get computed styles for an element
//   getStyles(element) {
//     const styles = window.getComputedStyle(element);
//     return Object.fromEntries(
//       Array.from(styles).map(prop => [prop, styles.getPropertyValue(prop)])
//     );
//   },
//
//   // Monitor network requests
//   networkRequests: [],
//   logNetworkRequest(request) {
//     this.networkRequests.push({
//       url: request.url,
//       method: request.method,
//       timestamp: new Date().toISOString()
//     });
//     console.log('Network request:', request.url);
//   },
//
//   // Get all cookies for current domain
//   async getCookies() {
//     return new Promise(resolve => {
//       chrome.cookies.getAll({}, cookies => {
//         resolve(cookies.filter(cookie => cookie.domain === window.location.hostname));
//       });
//     });
//   },
//
//   // Get page metrics
//   getMetrics() {
//     return {
//       loadTime: performance.timing.loadEventEnd - performance.timing.navigationStart,
//       domContentLoaded: performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart,
//       firstPaint: performance.getEntriesByType('paint')[0]?.startTime,
//       memory: performance.memory,
//       timing: performance.timing
//     };
//   }
// };
//
// // Initialize
// chromeGlobalAccess.init();
//
// // Monitor network requests
// // const originalFetch = window.fetch;
// // window.fetch = async function(...args) {
// //   const request = args[0];
// //   chromeGlobalAccess.logNetworkRequest({
// //     url: typeof request === 'string' ? request : request.url,
// //     method: typeof request === 'string' ? 'GET' : request.method || 'GET'
// //   });
// //   return originalFetch.apply(this, args);
// // };
//
// // Log when the page is fully loaded
// // window.addEventListener('load', () => {
// //   console.log('Page fully loaded');
// //   console.log('Page metrics:', chromeGlobalAccess.getMetrics());
// // });