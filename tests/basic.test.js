import fs from 'fs-extra'
import { rollup } from 'rollup'
import basic from './basic/rollup.config'

fs.emptyDir = jest.fn(async () => {})

test('calls fs.emptyDir on generateBundle hook', async () => {
  const bundle = await rollup(basic)
  await bundle.generate(basic.output)

  expect(fs.emptyDir).toBeCalledWith('tests/basic/dest')
})
