console.log('[Extension Global Access - popup.js]');

// Get the extension ID
const extensionId = chrome.runtime.id;

// Function to open the background service worker console
function openConsole() {
  // // Open the background service worker console
  // chrome.windows.create({
  //   url: `chrome-extension://${extensionId}/background.html`,
  //   type: 'popup',
  //   width: 800,
  //   height: 600
  // });

  // // Open the extension's DevTools console
  // // Note: This approach uses chrome.management API to get the extension
  // // and then opens its dedicated DevTools window
  // chrome.management.getSelf(extensionInfo => {
  //   // Create a regular tab to the extensions page
  //   chrome.tabs.create({ url: `chrome://extensions/?id=${extensionId}` }, tab => {
  //     // // Navigate to our specific extension's card
  //     // // This approach only uses chrome.tabs API to open the extensions page
  //     // // where users can manually inspect the service worker
  //     // chrome.tabs.update(tab.id, {
  //     //   url: `chrome://extensions/?id=${extensionId}`
  //     // }, () => {
  //     //   // Show a notification to guide the user
  //       chrome.notifications.create({
  //         type: 'basic',
  //         iconUrl: 'icon.png', // Make sure you have this icon in your extension
  //         title: 'DevTools Access',
  //         message: 'Click "inspect views: service worker" on the extension card to access the console'
  //       });
  //     // });
  //   });
  // });

  chrome.tabs.create({ url: `chrome://extensions/?id=${extensionId}` });

  // // Example: Creating a basic notification using chrome.notifications.create()
  // chrome.notifications.create(
  //   'sampleNotification', // Unique identifier for the notification
  //   {
  //     type: 'basic',          // Notification type ('basic' for a simple notification)
  //     iconUrl: 'icons/icon128.png',    // URL to the icon image (should be in your extension's directory)
  //     title: 'Hello!',        // Title of the notification
  //     message: 'This is a sample notification.' // Body text of the notification
  //   },
  //   function(notificationId) {
  //     // Callback executed after the notification is created
  //     console.log('Notification created with ID:', notificationId);
  //   }
  // );
}

function openErrors() {
  chrome.tabs.create({ url: `chrome://extensions/?errors=${extensionId}` });
}

// Add click handler to the button
document.getElementById('openConsole').addEventListener('click', openConsole);
document.getElementById('openErrors').addEventListener('click', openErrors);