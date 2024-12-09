import { getInput } from '../utils/input.js'
import { crossSearchWord, searchWord } from './search.js'

const INPUT = getInput(import.meta.url, '\n')

const part1 = () => {
  const word = 'XMAS'
  const count = searchWord(word, INPUT)

  console.log(`The word '${word}' appears: ${count} time(s)`)
}

const part2 = () => {
  const word = 'MAS'
  const count = crossSearchWord(word, INPUT)

  console.log(`The word '${word}' appears in a cross pattern: ${count} time(s)`)
}

part1()
part2()
