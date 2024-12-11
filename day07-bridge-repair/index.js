import { getInput } from '../utils/input.js'
import { checkTrueEquation } from './equation.js'
import { parseEquations } from './utils.js'

const INPUT = getInput(import.meta.url, '\n')
const EQUATIONS = parseEquations(INPUT)

const part1 = () => {
  let sum = 0
  for (let i = 0; i < EQUATIONS.length; i += 1) {
    const equation = EQUATIONS[i]
    const match = checkTrueEquation(equation)
    if (match) {
      sum += equation[0]
    }
  }

  console.log(`Total calibration result is: ${sum}`)
}

const part2 = () => {
  let sum = 0
  for (let i = 0; i < EQUATIONS.length; i += 1) {
    const equation = EQUATIONS[i]
    const match = checkTrueEquation(equation, 3)
    if (match) {
      sum += equation[0]
    }
  }

  console.log(`Total calibration result with 3 op types is: ${sum}`)
}

part1()
part2()
