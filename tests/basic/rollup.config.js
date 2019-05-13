/* eslint-env node */

import emptyDir from '../../src/index'
import { join } from 'path'

const fixture = (name) => join('tests/basic', name)

export default {
  input: fixture('background.js'),
  output: {
    dir: fixture('dest'),
    format: 'esm',
  },
  plugins: [emptyDir()],
}
