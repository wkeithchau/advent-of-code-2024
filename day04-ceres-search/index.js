import { getInput } from '../utils/input.js'
import { searchWord } from './search.js'

const INPUT = getInput(import.meta.url, '\n')
// const DATA = INPUT.map((data) => String(data))

const part1 = () => {
  const word = 'XMAS'
  const count = searchWord(word, INPUT)

  console.log(`The word '${word}' appears: ${count} time(s)`)
}

const part2 = () => {}

part1()
part2()
