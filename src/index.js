import { emptyDir } from 'fs-extra'

export default function emptyOutputDir() {
  return {
    name: 'empty-dir',
    async generateBundle({ dir }) {
      await emptyDir(dir)
    },
  }
}
