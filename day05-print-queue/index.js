import { getInput } from '../utils/input.js'
import { checkUpdate, correctUpdateOrder, findMiddlePage } from './queue.js'
import { parsePrintOrder } from './utils.js'

const INPUT = getInput(import.meta.url, '\n')
const [RULES, UPDATES] = parsePrintOrder(INPUT)

const part1 = () => {
  let sum = 0
  UPDATES.forEach((update) => {
    if (checkUpdate(update, RULES)) {
      sum += Number(findMiddlePage(update))
    }
  })

  console.log(
    `The sum of middle page numbers from correctly-ordered updates are: ${sum}`
  )
}

const part2 = () => {
  let sum = 0
  UPDATES.forEach((update) => {
    if (!checkUpdate(update, RULES)) {
      const correctUpdate = correctUpdateOrder(update, RULES)
      sum += Number(findMiddlePage(correctUpdate))
    }
  })

  console.log(
    `The sum of middle page numbers from correctly-ordered updates are: ${sum}`
  )
}

part1()
part2()
