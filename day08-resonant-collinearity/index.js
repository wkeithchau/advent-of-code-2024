import { getInput } from '../utils/input.js'
import {
  collectAntPositions,
  genAntinodes,
  genHarmonicAntinodes,
} from './antinode.js'

const INPUT = getInput(import.meta.url, '\n')

const part1 = () => {
  const antDict = collectAntPositions(INPUT)
  const size = INPUT.length

  const antSets = Object.values(antDict)
  const antinodesDict = {}
  for (let i = 0; i < antSets.length; i += 1) {
    const ants = antSets[i]
    const antinodes = genAntinodes(ants, size)
    antinodes.forEach((an) => {
      const anSym = an.toString()
      if (!antinodesDict[anSym]) {
        antinodesDict[anSym] = 0
      }
      antinodesDict[anSym] += 1
    })
  }
  const uniqAntinodes = Object.keys(antinodesDict)
  console.log(`Number of unique antinode locations: ${uniqAntinodes.length}`)
}

const part2 = () => {
  const antDict = collectAntPositions(INPUT)
  const size = INPUT.length

  const antSets = Object.values(antDict)
  const antinodesDict = {}
  for (let i = 0; i < antSets.length; i += 1) {
    const ants = antSets[i]
    const antinodes = genHarmonicAntinodes(ants, size)
    antinodes.forEach((an) => {
      const anSym = an.toString()
      if (!antinodesDict[anSym]) {
        antinodesDict[anSym] = 0
      }
      antinodesDict[anSym] += 1
    })
  }
  const uniqAntinodes = Object.keys(antinodesDict)
  console.log(`Number of unique antinode locations: ${uniqAntinodes.length}`)
}

part1()
part2()
