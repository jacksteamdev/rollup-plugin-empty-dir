import { emptyDir as fsEmptyDir } from 'fs-extra'

export function emptyDir() {
  return {
    name: 'empty-dir',
    async generateBundle({ dir }) {
      await fsEmptyDir(dir)
    },
  }
}
