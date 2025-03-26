# Chrome Global Access Extension

A minimal Chrome extension that provides a clean interface to the `chrome` global for development and experimentation. This extension serves as a development environment for Chrome Extension APIs, designed with a focus on simplicity and developer ergonomics.

## Core Design Principles

- **Minimal Surface Area**: Exposes only what's necessary to access the `chrome` global
- **Zero Configuration**: Works out of the box with sensible defaults
- **Developer Ergonomics**: Provides a persistent console for interactive development
- **Security Conscious**: Requests minimal permissions while maintaining functionality

## Architecture

The extension uses a background service worker as its primary interface, providing:
- A persistent execution context for experimentation
- Direct access to the `chrome` global
- Isolation from page contexts for clean debugging
- No UI overhead or complexity

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/chrome-global-access.git

# Load in Chrome
1. Navigate to chrome://extensions/
2. Enable Developer mode
3. Click "Load unpacked"
4. Select the extension directory

# Add additional permissions (optional)
1. Right-click the extension icon
2. Click "Manage Extension"
3. Scroll down to enable access to file URLs or incognito mode
```

## Development Workflow

1. Load the extension in Chrome
2. Open the background service worker console
3. Access the `chrome` global for experimentation

The console provides a clean environment for:
- Prototyping Chrome Extension APIs
- Debugging extension behavior
- Testing API interactions
- Developing extension features

## Example Usage

```javascript
// Query all tabs with specific properties
chrome.tabs.query({
  active: true,
  windowType: 'normal',
  windowState: 'maximized'
}, console.log);

// Persist data between sessions
chrome.storage.local.set({ key: 'value' }, () => {
  chrome.storage.local.get(['key'], console.log);
});

// Monitor tab updates
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    console.log('Tab loaded:', tab.url);
  }
});
```

## Security Model

The extension requests minimal permissions:
- `tabs`: Required for tab manipulation and monitoring
- `storage`: Enables persistent data storage
- `<all_urls>`: Allows interaction with any website

Each permission serves a specific purpose and is documented in the manifest.

## Contributing

This project follows a minimalist philosophy. Before adding features, consider:
1. Is this functionality essential for the core purpose?
2. Can it be implemented without additional permissions?
3. Does it maintain the project's simplicity?

## License

MIT License - See LICENSE file for details

## Acknowledgments

- Chrome Extensions team for the comprehensive API
- The open source community for various insights and patterns
