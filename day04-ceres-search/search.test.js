import { expect } from 'chai'

import { crossSearchWord, searchWord } from './search.js'

describe('Day04 - Ceres Search', function () {
  let sampleInput

  before(function () {
    sampleInput = [
      'MMMSXXMASM',
      'MSAMXMSMSA',
      'AMXSXMAAMM',
      'MSAMASMSMX',
      'XMASAMXAMM',
      'XXAMMXXAMA',
      'SMSMSASXSS',
      'SAXAMASAAA',
      'MAMMMXMMMM',
      'MXMXAXMASX',
    ]
  })

  describe('searchWord', function () {
    it('Sample input', function () {
      const count = searchWord('XMAS', sampleInput)
      expect(count).to.equal(18)
    })

    it('Sample input - smart', function () {
      const count = crossSearchWord('MAS', sampleInput)
      expect(count).to.equal(9)
    })
  })
})
