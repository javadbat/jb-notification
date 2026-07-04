# Changelog

## Unreleased

### Changed

- Breaking: renamed notification background CSS variables to use `--jb-notification-bg-color-{state}`.
  - `--jb-notification-info-bg-color` is now `--jb-notification-bg-color-info`.
  - `--jb-notification-success-bg-color` is now `--jb-notification-bg-color-success`.
  - `--jb-notification-error-bg-color` is now `--jb-notification-bg-color-error`.
  - Added `--jb-notification-bg-color-warning` for the warning state.
- Moved notification wrapper layout defaults into `wrapper/lib/variables.css` and documented the wrapper CSS variables.
- Added public content sizing and state text-color variables.
