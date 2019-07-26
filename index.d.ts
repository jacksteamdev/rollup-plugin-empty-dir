/// <reference types="rollup" />

import { RollupOptions, OutputOptions, Plugin } from 'rollup'

interface EmptyDirPlugin {
  name: string
  generateBundle(options: OutputOptions): Promise<any>
}

export function emptyDir(): Plugin
