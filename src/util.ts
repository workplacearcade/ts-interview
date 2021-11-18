export type Contents = string | Directory
export interface Directory {
  name: string
  contents: Contents[]
}

export const isFile = (input: Contents): input is string =>
  typeof input === 'string'
export const isDirectory = (input: Contents): input is Directory =>
  !isFile(input)
