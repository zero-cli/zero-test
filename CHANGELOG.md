# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- Shell script cleanup
- Resolve dependencies from node_modules
- Add debug logging to figure out how to handle npx

## [0.2.2] - 2021-02-16

### Fixed

- Execute jest from node_modules/.bin when using npx

## [0.2.1] - 2021-02-16

### Fixed

- Attempt to execute jest from node_modules/.bin when using npx

## [0.2.0] - 2021-02-16

### Added

- This changelog
- Add custom jest config support via `jest.config.js` or `package.json`

### Changed

- Refactor local test script
- Source code is not required to live in `/src` folder (may change this back later)

## [0.1.0] - 2021-02-15

- Initial release
