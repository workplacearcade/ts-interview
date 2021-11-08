export type Contents = string | Directory
export type Directory = [name: string, contents: Contents[]]

export const directory: Directory = [
  'root/',
  [
    ['docs/', ['address_book.xlsx']],
    [
      'photos/',
      [
        ['january/', ['001.jpg', '002.jpg']],
        ['february/', []],
        ['march/', ['003.jpg']],
      ],
    ],
  ],
]

export const isDirectory = (input: Contents): input is Directory =>
  input instanceof Array
export const isFile = (input: Contents): input is string => !isDirectory(input)
