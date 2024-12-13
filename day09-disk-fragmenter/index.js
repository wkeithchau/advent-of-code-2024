import { getInput } from '../utils/input.js'
import { checksum, optimiseFs, optimiseSmartFs } from './filesystem.js'

const INPUT = getInput(import.meta.url, '\n')
const MAP = INPUT[0]

const part1 = () => {
  const fs = optimiseFs(MAP)
  const sum = checksum(fs)

  console.log(`The filesystem checksum is: ${sum}`)
}

const part2 = () => {
  const fs = optimiseSmartFs(MAP)
  const sum = checksum(fs)

  console.log(`The smart filesystem checksum is: ${sum}`)
}

part1()
part2()
