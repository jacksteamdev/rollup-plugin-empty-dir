# rollup-plugin-empty-dir

Automatically empty `output.dir` before writing a new bundle. Useful for code splitting, where chunks with different hashes can accumulate from multiple builds.

## Installation

```sh
npm i rollup-plugin-empty-dir -D
```

## Usage

```js
import emptyDir from 'rollup-plugin-empty-dir'

export default {
  input: 'index.js',
  output: {
    dir: 'dist',
    format: 'esm',
  },
  plugins: [emptyDir()],
}
```

# API

This Rollup plugin has no options, it just empties the `dir` folder during the build process, right before Rollup writes any files.
