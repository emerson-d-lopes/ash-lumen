# Changelog

All notable changes to this project will be documented in this file.
Format based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).
This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.0] - 2026-04-20

### Added
- Initial release
- DTCG-format design tokens (`tokens/base.json`, `dark.json`, `light.json`)
- Token build pipeline (`scripts/build-tokens.js`) generating `dist/tokens.css`
- Framework-agnostic component classes: `.btn`, `.input`, `.textarea`, `.badge`, `.card`, `.alert`, `.code-block`
- Automatic light/dark theme via `prefers-color-scheme` + `[data-theme]` override
- Tailwind 4 integration via `ash-lumen/tailwind` (`@theme inline` mapping)
- JS/TS token export via `ash-lumen/tokens/js`
- `@layer ash-lumen` wrapping all component styles for specificity isolation
- Raw DTCG JSON available as `ash-lumen/tokens/base`, `/dark`, `/light`
