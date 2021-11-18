export type Contents = string | Directory
export interface Directory {
  name: string
  contents: Contents[]
}

export const isDirectory = (input: Contents): input is Directory =>
  input instanceof Array
export const isFile = (input: Contents): input is string => !isDirectory(input)
