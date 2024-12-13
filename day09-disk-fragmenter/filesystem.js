const FREE_SPACE = '.'

export const getBlocks = (map, type = 'array') => {
  const fs = []
  let id = 0
  for (let i = 0; i < map.length; i += 1) {
    const count = Number(map[i])
    let char = FREE_SPACE
    if (i % 2 === 0) {
      char = id
      id += 1
    }
    fs.push(...Array(count).fill(char))
  }

  if (type === 'string') {
    return fs.join('')
  }

  return fs
}

export const freeUpSpace = (fs, type = 'array') => {
  const newFs = typeof fs === 'string' ? fs.split('') : fs
  let endPos = newFs.length - 1
  for (let i = 0; i < newFs.length; i += 1) {
    if (i >= endPos) {
      break
    }

    const slot = newFs[i]

    if (slot === FREE_SPACE) {
      newFs[i] = newFs[endPos]
      newFs[endPos] = FREE_SPACE
      do {
        endPos -= 1
      } while (newFs[endPos] === FREE_SPACE)
    }
  }

  if (type === 'string') {
    return newFs.join('')
  }

  return newFs
}

export const freeUpFileSpace = (fs, type = 'array') => {
  const newFs = typeof fs === 'string' ? fs.split('') : fs
  for (let endPos = newFs.length - 1; endPos >= 0; endPos -= 1) {
    // Finding file block
    while (newFs[endPos] === FREE_SPACE) {
      endPos -= 1
    }
    const file = []
    const fileChar = newFs[endPos]
    while (newFs[endPos] === fileChar) {
      file.unshift(newFs[endPos])
      endPos -= 1
    }

    let freeRef = 0
    while (freeRef < endPos) {
      let i = freeRef
      // Finding free space block
      while (newFs[i] !== FREE_SPACE && i < endPos) {
        i += 1
      }
      const freeSpace = []
      const freeStart = i
      while (newFs[i] === FREE_SPACE) {
        freeSpace.push(newFs[i])
        i += 1
      }

      // Moving blocks
      if (file.length <= freeSpace.length) {
        newFs.splice(freeStart, file.length, ...file)
        newFs.splice(
          endPos + 1,
          file.length,
          ...freeSpace.slice(0, file.length)
        )
        i = freeStart + file.length
        freeRef = endPos
      } else {
        freeRef = i
      }
    }

    endPos += 1
  }

  if (type === 'string') {
    return newFs.join('')
  }

  return newFs
}

export const optimiseFs = (map) => {
  let fs = getBlocks(map)
  fs = freeUpSpace(fs)
  return fs
}

export const optimiseSmartFs = (map) => {
  let fs = getBlocks(map)
  fs = freeUpFileSpace(fs)
  return fs
}

export const checksum = (fs) => {
  let filesystem = fs
  if (typeof fs === 'string') {
    filesystem = Array.from(fs)
  }
  let sum = 0
  for (let i = 0; i < filesystem.length; i += 1) {
    const slot = filesystem[i]
    if (slot !== FREE_SPACE) {
      sum += Number(slot) * i
    }
  }
  return sum
}
