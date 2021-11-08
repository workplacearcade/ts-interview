# The Directory Deep Dive

Given a directory of unknown depth and two utility methods that will clarify if
a given item is a directory or a file, can you return a list of only the files?

**Example:**

```
- root/
  - docs/
    - address_book.xlsx
  - photos/
    - january/
      - 001.jpg
      - 002.jpg
    - february/
    - march/
      - 003.jpg
```

## Utility methods

### `isDirectory`

Determines whether or not the given argument is a directory.

```typescript
isDirectory('root/') // true
isDirectory('001.jpg') // false
```

### `isFile`

Determines whether or not the given argument is a file.

```typescript
isFile('root/') // false
isFile('001.jpg') // true
```

## Assumptions

- The utility methods work without fail and are already tested, you may treat
  them like an external library
- Directories can have any number of directories and files and there is no
  guarantee of order (e.g. you can't assume "files will always be first")
- There is no knowing how "deep" the directory is when given
- There is no determining the order of files returned from your function

## Requirements

You will create a `deepDive` function which is responsible for getting the
files.

- Only files should result
- If there are no files in the directory, you should get back an empty array
- If a directory contains no files, it should not add a member to the result

## Setting up the repo

### Clone

The first step to get the code is to download it locally.

### Install

To install required dependencies, run `yarn install`

### Test

To run the tests, use `yarn test`
