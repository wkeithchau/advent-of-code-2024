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

export const optimiseFs = (map, type = 'array') => {
  let fs = getBlocks(map)
  fs = freeUpSpace(fs)
  return fs
}

export const checksum = (fs) => {
  let sum = 0
  for (let i = 0; i < fs.length; i += 1) {
    const slot = fs[i]
    if (slot === FREE_SPACE) {
      break
    }
    sum += Number(slot) * i
  }
  return sum
}
