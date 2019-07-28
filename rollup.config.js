/* eslint-env node */

export default [
  {
    input: 'src/index.js',
    output: [
      {
        file: 'lib/empty-dir-esm.js',
        format: 'esm',
        sourcemap: 'inline',
      },
      {
        file: 'lib/empty-dir-cjs.js',
        format: 'cjs',
        sourcemap: 'inline',
      },
    ],
    external: ['fs-extra'],
  },
]
