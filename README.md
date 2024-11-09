# Rsbuild Project

Demonstrates bug with `@rsbuild/plugin-sass` trying to follow sass `@forward` directives.

Build fails because rsbuild tries to load `@carbon/colors/lib/index.js` instead of `@carbon/colors/index.scss` when trying to follow `@forward @carbon/colors`

This works correctly on webpack and next.js

See index.scss

to run:

```
npm i
npm run dev
```

```
Error stack:

File: /Users/johnowen/git/rsbuild-carbon/src/index.scss:1:1
× Module build failed:
╰─▶ × expected "{".
│ ╷
│ 1 │ 'use strict';
│ │ ^
│ ╵
│ ../../../@carbon/colors/lib/index.js 1:13 @forward
│ ../../../@carbon/styles/scss/\_colors.scss 8:1 @forward
│ ../../../@carbon/styles/index.scss 10:1 @use
│ ../../../../src/index.scss 1:1 root stylesheet
```

## Setup

Install the dependencies:

```bash
npm install
```

## Get Started

Start the dev server:

```bash
npm dev
```

Build the app for production:

```bash
npm build
```

Preview the production build locally:

```bash
pnpm preview
```
