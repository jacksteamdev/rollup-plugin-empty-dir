interface EmptyDirPlugin {
  name: string
  generateBundle(options: any): Promise<void>
}

export function emptyDir(): EmptyDirPlugin
