import { expect } from 'chai'

import { collectAntPositions, genAntinodes } from './antinode.js'

describe('Day08 - Resonant Collinearlity', function () {
  let sampleInput
  let antDict

  before(function () {
    sampleInput = [
      '............',
      '........0...',
      '.....0......',
      '.......0....',
      '....0.......',
      '......A.....',
      '............',
      '............',
      '........A...',
      '.........A..',
      '............',
      '............',
    ]
    antDict = collectAntPositions(sampleInput)
  })

  describe('genAntinodes', function () {
    it('Sample input - 0', function () {
      const antinodes = genAntinodes(antDict['0'], sampleInput.length)
      expect(antinodes.length).to.equal(10)
    })

    it('Sample input - A', function () {
      const antinodes = genAntinodes(antDict.A, sampleInput.length)
      expect(antinodes.length).to.equal(5)
    })
  })
})
