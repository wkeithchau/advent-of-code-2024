import { getInput } from '../utils/input.js'
import { executeMul, parseAdvanceMuls, parseMuls } from './instructions.js'

const INPUT = getInput(import.meta.url, '\n')
const DATA = INPUT.map((data) => String(data))

const part1 = () => {
  const muls = parseMuls(DATA)
  const total = muls.reduce((sum, mul) => {
    return executeMul(mul) + sum
  }, 0)

  console.log(`Total result of multiplications: ${total}`)
}

const part2 = () => {
  const instructions = parseAdvanceMuls(DATA)
  const muls = []
  let enabled = true
  instructions.forEach((instruction) => {
    if (instruction === 'do()') {
      enabled = true
    } else if (instruction === "don't()") {
      enabled = false
    } else {
      if (enabled) {
        muls.push(instruction)
      }
    }
  })
  const total = muls.reduce((sum, mul) => {
    return executeMul(mul) + sum
  }, 0)

  console.log(`Total result of enabled multiplications: ${total}`)
}

part1()
part2()
