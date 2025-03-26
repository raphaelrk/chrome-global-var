# Chrome Global Var

A minimal Chrome extension that provides direct access to the `chrome` global for development and experimentation.

[View on GitHub](https://github.com/raphaelrk/chrome-global-var)

## Features

- Direct access to `chrome` global in DevTools console
- Full Chrome Extension API access with all permissions
- Background service worker for persistent access
- Content script for page-level experimentation

## Installation

```bash
# Clone and install
git clone https://github.com/raphaelrk/chrome-global-var.git
cd chrome-global-var
bun install

# Load in Chrome
1. Go to chrome://extensions
2. Enable Developer mode
3. Click "Load unpacked"
4. Select the extension directory (same directory this file is in)

# Add additional permissions (optional)
1. Right-click the extension icon
2. Click "Manage Extension"
3. Scroll down to enable access to file URLs or incognito mode
```

## Usage

1. Click the extension icon
2. Click "Open Console" to access the DevTools
3. Use the `chrome` global in the console

Example:
```javascript
// List all tabs
chrome.tabs.query({}, console.log);

// Access storage
chrome.storage.local.get(null, console.log);

// Monitor new tabs
chrome.tabs.onCreated.addListener(console.log);
```


## License

MIT
