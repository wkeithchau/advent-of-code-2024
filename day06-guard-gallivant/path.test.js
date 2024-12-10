import { expect } from 'chai'

import { countCrossedSpots, nextGuardStep } from './path.js'

describe('Day06 - Guard Gallivant', function () {
  let samplePath
  let completedSamplePath

  before(function () {
    samplePath = [
      '....#.....',
      '.........#',
      '..........',
      '..#.......',
      '.......#..',
      '..........',
      '.#..^.....',
      '........#.',
      '#.........',
      '......#...',
    ]
    completedSamplePath = [
      '....#.....',
      '....XXXXX#',
      '....X...X.',
      '..#.X...X.',
      '..XXXXX#X.',
      '..X.X.X.X.',
      '.#XXXXXXX.',
      '.XXXXXXX#.',
      '#XXXXXXX..',
      '......#X..',
    ]
  })

  describe('nextGuardStep', function () {
    it('Sample input', function () {
      let path = [...samplePath]
      let lastPath = [...path]
      do {
        lastPath = [...path]
        path = nextGuardStep(lastPath)
      } while (path.length !== 0)
      expect(lastPath).to.have.ordered.members(completedSamplePath)
    })
  })

  describe('countCrossedSpots', function () {
    it('Sample input', function () {
      const crossed = countCrossedSpots(completedSamplePath)
      expect(crossed).to.equal(41)
    })
  })
})
