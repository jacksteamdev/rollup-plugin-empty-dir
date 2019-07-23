import { emptyDir } from 'fs-extra'

export default function emptyOutputDir() {
  return {
    name: 'empty-output-dir',
    async generateBundle({ dir }) {
      await emptyDir(dir)
    },
  }
}
