import { getInput } from '../utils/input.js'
import {
  collectCrossCoords,
  countCrossedSpots,
  createNewBlocker,
  nextGuardStep,
  nextGuardSteps,
  repeatedPath,
} from './path.js'

const INPUT = getInput(import.meta.url, '\n')

const part1 = () => {
  let path = [...INPUT]
  let lastPath = [...path]
  do {
    lastPath = [...path]
    path = nextGuardStep(lastPath)
  } while (path.length !== 0)

  const crossed = countCrossedSpots(lastPath)

  console.log(`Number of distinct positions that the guard visited: ${crossed}`)
}

const part2 = async () => {
  let path = [...INPUT]
  let lastPath = [...path]
  do {
    lastPath = [...path]
    path = nextGuardStep(lastPath)
  } while (path.length !== 0)

  const potBlockers = collectCrossCoords(lastPath)
  const initPath = [...INPUT]
  let looped = 0
  const scenarios = []
  for (let i = 0; i < potBlockers.length; i += 1) {
    const scenario = async () => {
      const [x, y] = potBlockers[i]
      const newPath = createNewBlocker([x, y], initPath)

      let path = [...newPath]
      let lastPath = [...path]
      const prevPaths = []
      process.stdout.write(`scenario: ${i + 1}/${potBlockers.length}\n`)
      do {
        lastPath = [...path]
        prevPaths.push(JSON.stringify(path))
        path = nextGuardSteps(lastPath)
      } while (
        path.length !== 0 &&
        !repeatedPath(JSON.stringify(path), prevPaths)
      )

      if (path.length !== 0) {
        looped += 1
      }

      process.stdout.moveCursor(0, -1)
      process.stdout.clearLine(0)
    }

    scenarios.push(scenario())
  }

  await Promise.all(scenarios)

  console.log(
    `Number of different positions to place a obstacle to cause a loop: ${looped}`
  )
}

part1()
part2()
