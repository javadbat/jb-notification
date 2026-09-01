# Changelog

## [1.0.0] - 2026-09-01

### Changed

- Made custom-element module evaluation SSR-safe by extending `JBBaseComponent` where needed and registering elements through the shared `defineWebComponent()` helper; raised the minimum `jb-core` version to `0.35.0`.
- Updated component color defaults to use the shared semantic content and surface tokens.

## [0.9.0] - 2026-07-19

### Added

- Added `component`, `icon-svg`, and `texts` CSS parts for richer notification styling.
- Added `success`, `info`, `warning`, `error`, `open`, and `closed` custom CSS states.
- Added notification width, max-width, icon size, text gap, border, shadow, grid, and content alignment variables.
- Added state-specific icon symbol color variables for accessible icon contrast.
- Added a standard Styling MDX page and 12 reusable notification style recipes.

### Changed

- Breaking: renamed notification background CSS variables to use `--jb-notification-bg-color-{state}`.
  - `--jb-notification-info-bg-color` is now `--jb-notification-bg-color-info`.
  - `--jb-notification-success-bg-color` is now `--jb-notification-bg-color-success`.
  - `--jb-notification-error-bg-color` is now `--jb-notification-bg-color-error`.
  - Added `--jb-notification-bg-color-warning` for the warning state.
- Moved notification wrapper layout defaults into `wrapper/lib/variables.css` and documented the wrapper CSS variables.
- Added public content sizing and state text-color variables.
- Standardized all custom theme recipes on `jb-notification.<theme>-style`, public parts, and custom-state selectors.
