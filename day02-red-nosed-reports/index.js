import { getInput } from '../utils/input.js'
import { looseSafetyCheck, safetyCheck } from './report.js'
import { parseReports } from './utils.js'

const INPUT = getInput(import.meta.url, '\n')
const DATA = parseReports(INPUT)

const part1 = () => {
  let safeCount = 0
  for (let i = 0; i < DATA.length; i += 1) {
    const safe = safetyCheck(DATA[i])
    if (safe) {
      safeCount += 1
    }
  }

  console.log(`Number of safe reports are: ${safeCount}`)
}

const part2 = () => {
  let safeCount = 0
  for (let i = 0; i < DATA.length; i += 1) {
    const safe = looseSafetyCheck(DATA[i])
    if (safe) {
      safeCount += 1
    }
  }

  console.log(`Number of safe reports with tolerance are: ${safeCount}`)
}

part1()
part2()
