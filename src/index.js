import { emptyDir as fsEmptyDir } from 'fs-extra'

export function emptyDir() {
  return {
    name: 'empty-dir',
    async generateBundle({ dir }) {
      if (dir) {
        await fsEmptyDir(dir)
      }
    },
  }
}
