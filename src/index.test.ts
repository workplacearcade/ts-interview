import type {Directory} from './util'
import {isFile, isDirectory} from './util'
import deepDive from './index'

const example: Directory = {
  name: 'root/',
  contents: [
    {
      name: 'docs/',
      contents: ['address_book.xlsx'],
    },
    {
      name: 'photos/',
      contents: [
        {
          name: 'january/',
          contents: ['001.jpg', '002.jpg'],
        },
        {
          name: 'february/',
          contents: [],
        },
        {
          name: 'march/',
          contents: ['003.jpg'],
        },
      ],
    },
  ],
}

describe('isFile', () => {
  it('recognizes a file properly', () => {
    expect(isFile('test.txt')).toBe(true)
  })

  it('recognizes a directory properly', () => {
    expect(isFile({name: 'the good files/', contents: []})).toBe(false)
  })
})

describe('isDirectory', () => {
  it('recognizes a file properly', () => {
    expect(isDirectory('test.txt')).toBe(false)
  })

  it('recognizes a directory properly', () => {
    expect(isDirectory({name: 'the good files/', contents: []})).toBe(true)
  })
})

describe('deepDive', () => {
  it('shows no files for an empty directory', () => {
    const input = {
      name: 'empty/',
      contents: [],
    } as Directory
    const expected = [] as string[]

    expect(deepDive(input)).toEqual(expected)
  })

  xit('can return the list of files in a simple directory structure', () => {
    const input = {
      name: 'not_empty/',
      contents: ['1.txt', '2.txt'],
    } as Directory
    const result = deepDive(input)
    const expected = input.contents as string[]

    expected.forEach(fileName => expect(result.includes(fileName)).toBe(true))
    expect(result.length).toBe(expected.length)
  })

  xit('can get files from any depth', () => {
    const input = {
      name: 'a/',
      contents: [
        {
          name: 'b/',
          contents: [
            {
              name: 'c/',
              contents: ['only_file.csv'],
            },
          ],
        },
      ],
    }
    const result = deepDive(input)
    const expected = ['only_file.csv'] as string[]

    expect(result).toEqual(expected)
  })

  xit('works for an extended use case', () => {
    const result = deepDive(example)
    const expected = [
      'address_book.xlsx',
      '001.jpg',
      '002.jpg',
      '003.jpg',
    ] as string[]

    expected.forEach(fileName => expect(result.includes(fileName)).toBe(true))
    result.forEach(fileName => expect(expected.includes(fileName)).toBe(true))
  })
})
