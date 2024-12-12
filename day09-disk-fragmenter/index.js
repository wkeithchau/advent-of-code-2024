import { getInput } from '../utils/input.js'
import { checksum, optimiseFs } from './filesystem.js'

const INPUT = getInput(import.meta.url, '\n')
const MAP = INPUT[0]

const part1 = () => {
  const fs = optimiseFs(MAP)
  const sum = checksum(fs)

  console.log(fs.find((slot) => slot === '10'))
  // console.log(fs)

  console.log(`The filesystem checksum is: ${sum}`)
  // 5720616827
}

const part2 = () => {}

part1()
part2()
