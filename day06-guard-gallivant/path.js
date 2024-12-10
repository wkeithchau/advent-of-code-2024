const GUARD_MOVEMENT = {
  UP: { x: -1, y: 0, symbol: '^', next: 'RIGHT' },
  DOWN: { x: 1, y: 0, symbol: 'v', next: 'LEFT' },
  LEFT: { x: 0, y: -1, symbol: '<', next: 'UP' },
  RIGHT: { x: 0, y: 1, symbol: '>', next: 'DOWN' },
}

const GUARD_DIRECTION = {
  UP: '^',
  DOWN: 'v',
  LEFT: '<',
  RIGHT: '>',
}

const BLOCKER = '#'
const CROSSED = 'X'
const BLANK = '.'

const findGuard = (path) => {
  const directions = Object.values(GUARD_DIRECTION)
  for (let i = 0; i < path.length; i += 1) {
    const row = path[i]
    for (let j = 0; j < row.length; j += 1) {
      const pos = row[j]
      const index = directions.findIndex((element) => element === pos)
      if (index >= 0) {
        const direction = Object.keys(GUARD_DIRECTION)[index]
        return [i, j, direction]
      }
    }
  }
  return []
}

export const nextGuardStep = (initalPath) => {
  const path = [...initalPath]
  const [x, y, direction] = findGuard(path)
  if (direction === undefined) {
    return []
  }

  const move = GUARD_MOVEMENT[direction]
  const nextX = x + move.x
  const nextY = y + move.y
  let turning = false
  if (path[nextX] && path[nextX][nextY]) {
    const spot = path[nextX][nextY]

    if (spot === BLOCKER) {
      path[x] =
        path[x].substring(0, y) +
        GUARD_DIRECTION[move.next] +
        path[x].substring(y + 1)
      turning = true
    } else {
      path[nextX] =
        path[nextX].substring(0, nextY) +
        move.symbol +
        path[nextX].substring(nextY + 1)
    }
  }

  if (!turning) {
    path[x] = path[x].substring(0, y) + CROSSED + path[x].substring(y + 1)
  }

  return path
}

// Similar to 'nextGuardStep' but runs through until the guard hits a blocker.
export const nextGuardSteps = (initalPath) => {
  const path = [...initalPath]
  const [initX, initY, direction] = findGuard(path)
  if (direction === undefined) {
    return []
  }

  const move = GUARD_MOVEMENT[direction]
  let turning = false
  let x = initX
  let y = initY
  let nextX = x
  let nextY = y
  do {
    nextX += move.x
    nextY += move.y
    if (path[nextX] && path[nextX][nextY]) {
      const spot = path[nextX][nextY]

      if (spot === BLOCKER) {
        path[x] =
          path[x].substring(0, y) +
          GUARD_DIRECTION[move.next] +
          path[x].substring(y + 1)
        turning = true
      } else {
        path[nextX] =
          path[nextX].substring(0, nextY) +
          move.symbol +
          path[nextX].substring(nextY + 1)
      }
    }

    if (!turning) {
      path[x] = path[x].substring(0, y) + BLANK + path[x].substring(y + 1)
    }

    x = nextX
    y = nextY
  } while (path[nextX] && path[nextX][nextY] && !turning)

  return path
}

export const countCrossedSpots = (path) => {
  let crosses = 0
  for (let i = 0; i < path.length; i += 1) {
    const row = path[i]
    for (let j = 0; j < row.length; j += 1) {
      if (row[j] === CROSSED) {
        crosses += 1
      }
    }
  }
  return crosses
}

export const collectCrossCoords = (path) => {
  const coords = []
  for (let i = 0; i < path.length; i += 1) {
    const row = path[i]
    for (let j = 0; j < row.length; j += 1) {
      if (row[j] === CROSSED) {
        coords.push([i, j])
      }
    }
  }
  return coords
}

export const createNewBlocker = (coords, path) => {
  const newPath = [...path]
  const [x, y] = coords
  newPath[x] =
    newPath[x].substring(0, y) + BLOCKER + newPath[x].substring(y + 1)
  return newPath
}

export const repeatedPath = (path, prevPaths) => {
  return prevPaths.includes(path)
}

export const animatePath = async (path, rate = 100) => {
  process.stdout.write(`${path.join('\n')}\n`)
  await new Promise((resolve) => {
    setTimeout(resolve, 1000 / rate)
  })
  for (let i = 0; i < path.length; i += 1) {
    process.stdout.moveCursor(0, -1)
    process.stdout.clearLine()
  }
}
