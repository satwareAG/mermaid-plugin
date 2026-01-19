# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2026-01-19

### Added

- **Zoom Controls**: Interactive zoom in/out buttons with percentage display
  - Zoom range: 25% to 400%
  - Keyboard shortcuts: Ctrl/Cmd +/- and 0 for reset
- **SVG Export**: Download diagram as SVG with original vector quality
- **PNG Export**: Download diagram as PNG with 2x resolution
  - Handles cross-origin resources gracefully
  - Falls back to SVG if PNG conversion fails
- **Responsive Header**: Sticky header with title and control buttons

### Changed

- **ZenUML**: Updated from v0.2.0 to v0.2.2
- **Mermaid.js**: Pinned to v11.12.2 (latest stable)
- **UI Overhaul**: Modern button-group design with hover states
- **Context Instructions**: Condensed from ~8KB to ~3.5KB while retaining all essential syntax rules
- **Error Display**: Improved error log styling with red border and background

### Fixed

- **Tainted Canvas Error**: PNG export no longer fails with cross-origin icon resources
  - Uses base64 data URLs instead of blob URLs
  - Removes external image references that cause canvas tainting
  - Graceful fallback to SVG download on failure

### Technical Details

| Component | Old | New |
|-----------|-----|-----|
| `mermaid` | v11 (unpinned) | v11.12.2 |
| `mermaid-zenuml` | v0.2.0 | v0.2.2 |
| CSS | Basic layout | Modern system-ui, minified |
| Export | None | SVG + PNG with fallback |

## [1.0.0] - 2024-12-01

### Added

- Initial release
- Mermaid.js v11 rendering
- ZenUML support
- Icon pack integration (logos, simple-icons, mdi, fa6)
- Error handling with parse error display
- Responsive design
- Dark mode support