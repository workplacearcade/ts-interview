import type {Contents, Directory} from './stubs'
import {directory, isFile, isDirectory} from './stubs'
import deepDive from './index'

describe('isFile', () => {
  it('recognizes a file properly', () => {
    expect(isFile('test.txt')).toBe(true)
    expect(isFile(directory[1][0][1][1])).toBe(true)
  })

  it('recognizes a directory properly', () => {
    expect(isFile(['the good files/', []])).toBe(false)
    expect(isFile(directory)).toBe(false)
  })
})

describe('isDirectory', () => {
  it('recognizes a file properly', () => {
    expect(isDirectory('test.txt')).toBe(false)
    expect(isDirectory(directory[1][0][1][0])).toBe(false)
  })

  it('recognizes a directory properly', () => {
    expect(isDirectory(['the good files/', []])).toBe(true)
    expect(isDirectory(directory)).toBe(true)
  })
})

describe('deepDive', () => {
  it('shows no files for an empty directory', () => {
    expect(deepDive(['empty/', []])).toEqual([])
  })

  xit('can return the list of files in a simple directory structure', () => {
    const input = ['empty/', ['1.txt', '2.txt']] as Directory
    const result = deepDive(input)
    const expected = input[1] as string[]

    expected.forEach(fileName => expect(result.includes(fileName)).toBe(true))
    expect(result.length).toBe(expected.length)
  })

  xit('can get files from any depth', () => {
    const input = ['a/', [['b/', [['c/', ['only_file.csv']]]]]] as Directory
    const result = deepDive(input)
    const expected = ['only_file.csv'] as string[]

    expect(result).toEqual(expected)
  })

  xit('works for an extended use case', () => {
    const result = deepDive(directory)
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
