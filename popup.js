console.log('[Chrome Global Access - popup.js]');

// Get the extension ID
const extensionId = chrome.runtime.id;

// Function to open the background service worker console
function openConsole() {
  // Open the background service worker console
  chrome.windows.create({
    url: `chrome-extension://${extensionId}/background.html`,
    type: 'popup',
    width: 800,
    height: 600
  });
}

// Add click handler to the button
document.getElementById('openConsole').addEventListener('click', openConsole);