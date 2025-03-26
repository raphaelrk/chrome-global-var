# Context for AI Assistance

## Purpose
A minimal Chrome extension providing direct access to the `chrome` global in the DevTools console. Designed for Chrome extension development and experimentation.

## Design Decisions

### Background Service Worker
- Chosen for persistent access to `chrome` global
- Isolated from page contexts
- Part of Chrome's security model
- Efficient state management

### Permissions
Full access requested because:
- This is a development tool
- Only the developer can access it
- Enables complete API experimentation
- Security isn't a concern (local usage only)

### Content Script
Included to:
- Enable page-level experimentation
- Monitor page events and network requests
- Inject test code into pages
- Debug content script behavior

### No Build Process
Intentionally simple:
- Direct source editing
- TypeScript for development only
- No bundling or transpilation
- Easy to understand and modify

## Future Development Guidelines

### Do
- Keep it minimal
- Focus on development use cases
- Improve TypeScript support
- Add debugging utilities

### Don't
- Add UI features
- Bundle/minify code
- Add runtime dependencies
- Restrict permissions
