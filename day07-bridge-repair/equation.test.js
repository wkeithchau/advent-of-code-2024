import { expect } from 'chai'

import { checkTrueEquation } from './equation.js'

describe('Day07 - Bridge Repair', function () {
  let sampleInput

  before(function () {
    sampleInput = [
      [190, [10, 19]],
      [3267, [81, 40, 27]],
      [83, [17, 5]],
      [156, [15, 6]],
      [7290, [6, 8, 6, 15]],
      [161011, [16, 10, 13]],
      [192, [17, 8, 14]],
      [21037, [9, 7, 18, 13]],
      [292, [11, 6, 16, 20]],
    ]
  })

  describe('checkTrueEquation', function () {
    it('Sample input 1', function () {
      const match = checkTrueEquation(sampleInput[0])
      expect(match).to.equal(true)
    })

    it('Sample input 2', function () {
      const match = checkTrueEquation(sampleInput[1])
      expect(match).to.equal(true)
    })

    it('Sample input 3', function () {
      const match = checkTrueEquation(sampleInput[2])
      expect(match).to.equal(false)
    })

    it('Sample input 4', function () {
      const match = checkTrueEquation(sampleInput[3])
      expect(match).to.equal(false)
    })

    it('Sample input 5', function () {
      const match = checkTrueEquation(sampleInput[4])
      expect(match).to.equal(false)
    })

    it('Sample input 6', function () {
      const match = checkTrueEquation(sampleInput[5])
      expect(match).to.equal(false)
    })

    it('Sample input 7', function () {
      const match = checkTrueEquation(sampleInput[6])
      expect(match).to.equal(false)
    })

    it('Sample input 8', function () {
      const match = checkTrueEquation(sampleInput[7])
      expect(match).to.equal(false)
    })

    it('Sample input 9', function () {
      const match = checkTrueEquation(sampleInput[8])
      expect(match).to.equal(true)
    })
  })

  describe('checkTrueEquation - opCount:3', function () {
    it('Sample input 1', function () {
      const match = checkTrueEquation(sampleInput[0], 3)
      expect(match).to.equal(true)
    })

    it('Sample input 2', function () {
      const match = checkTrueEquation(sampleInput[1], 3)
      expect(match).to.equal(true)
    })

    it('Sample input 3', function () {
      const match = checkTrueEquation(sampleInput[2], 3)
      expect(match).to.equal(false)
    })

    it('Sample input 4', function () {
      const match = checkTrueEquation(sampleInput[3], 3)
      expect(match).to.equal(true)
    })

    it('Sample input 5', function () {
      const match = checkTrueEquation(sampleInput[4], 3)
      expect(match).to.equal(true)
    })

    it('Sample input 6', function () {
      const match = checkTrueEquation(sampleInput[5], 3)
      expect(match).to.equal(false)
    })

    it('Sample input 7', function () {
      const match = checkTrueEquation(sampleInput[6], 3)
      expect(match).to.equal(true)
    })

    it('Sample input 8', function () {
      const match = checkTrueEquation(sampleInput[7], 3)
      expect(match).to.equal(false)
    })

    it('Sample input 9', function () {
      const match = checkTrueEquation(sampleInput[8], 3)
      expect(match).to.equal(true)
    })
  })
})
