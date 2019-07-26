<!--
Template tags: 
bumble-org
rollup-plugin-empty-dir
IMG_URL
-->

<p align="center">
  <a href="https: //github.com/bumble-org/rollup-plugin-empty-dir" rel="noopener">
  <img width=200px height=200px src="https://imgur.com/UY3Gb9s.png" alt="rollup-plugin-empty-dir logo"></a>
</p>

<h3 align="center">rollup-plugin-empty-dir</h3>


<div align="center">

[![npm (scoped)](https://img.shields.io/npm/v/rollup-plugin-empty-dir.svg)](https://www.npmjs.com/package/${}/rollup-plugin-empty-dir)
[![GitHub last commit](https://img.shields.io/github/last-commit/bumble-org/rollup-plugin-empty-dir.svg)](https://github.com/bumble-org/rollup-plugin-empty-dir)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)
[![TypeScript Declarations Included](https://img.shields.io/badge/types-TypeScript-informational)](#typescript)

</div>

<div align="center">

[![Fiverr: We make Chrome extensions](https://img.shields.io/badge/Fiverr%20-We%20make%20Chrome%20extensions-brightgreen.svg)](https://www.fiverr.com/jacksteam)
[![ko-fi](https://img.shields.io/badge/ko--fi-Buy%20me%20a%20coffee-ff5d5b)](https://ko-fi.com/K3K1QNTF)

</div>

---

Automatically empty the `output.dir` folder before writing a new bundle. Useful for code splitting, where chunks with different hashes can accumulate from multiple builds.

## Table of Contents

- [Getting Started](#getting_started)
- [Usage](#usage)
- [Features](#features)

## Getting started <a name = "getting_started"></a>

Use this plugin with the bundler [Rollup](https://rollupjs.org/guide/en/).

### Installation

```sh
$ npm i rollup-plugin-empty-dir -D
```

## Usage <a name = "usage"></a>

```javascript
// rollup.config.js

import { emptyDir } from 'rollup-plugin-empty-dir'

export default {
  input: 'src/index.js',
  output: {
    dir: 'dist',
    format: 'esm',
  },
  plugins: [emptyDir()]
}
```

This Rollup plugin has no options, it just empties the `dir` folder during the build process, right before Rollup writes any files.


## Features <a name = "features"></a>

### TypeScript Definitions <a name = "typescript"></a>

TypeScript definitions are included, so no need to install an additional `@types` library!

