import { getInput } from '../utils/input.js'
import {
  distanceBetweenLists,
  similarityBetweenLists,
  sortList,
} from './lists.js'
import { parseLists } from './utils.js'

const INPUT = getInput(import.meta.url, '\n')
const DATA = parseLists(INPUT)

const part1 = () => {
  const lists = DATA.map((list) => sortList(list))
  const totalDistance = distanceBetweenLists(...lists)
  console.log(`Total distance between the lists are: ${totalDistance}`)
}

const part2 = () => {
  const similarityScore = similarityBetweenLists(...DATA)
  console.log(`The similarity score between the lists are: ${similarityScore}`)
}

part1()
part2()
