const DEFAULT_COORDS = [
    { x: -1, y: -1 },
    { x: -1, y: 0 },
    { x: -1, y: 1 },
    { x: 0, y: -1 },
    { x: 0, y: 1 },
    { x: 1, y: -1 },
    { x: 1, y: 0 },
    { x: 1, y: 1 },
  ]
  
  const CROSS_COORDS = [
    { x: -1, y: -1 },
    { x: -1, y: 1 },
    { x: 1, y: -1 },
    { x: 1, y: 1 },
  ]
  
  const searchWordChain = (word, pos, search, coords = DEFAULT_COORDS) => {
    const [x, y] = pos
    if (word[0] !== search[x][y]) {
      return 0
    }
  
    let count = 0
    for (let i = 0; i < coords.length; i += 1) {
      const coord = coords[i]
      const nextX = x + coord.x
      const nextY = y + coord.y
  
      if (
        search[nextX] &&
        search[nextX][nextY] &&
        search[nextX][nextY] === word[1]
      ) {
        if (word.length === 2) {
          return 1
        }
        count += searchWordChain(word.slice(1), [nextX, nextY], search, [coord])
      }
    }
  
    return count
  }
  
  export const searchWord = (word, search) => {
    let count = 0
    for (let rowCount = 0; rowCount < search.length; rowCount += 1) {
      const row = search[rowCount]
      for (let colCount = 0; colCount < row.length; colCount += 1) {
        count += searchWordChain(word, [rowCount, colCount], search)
      }
    }
    return count
  }
