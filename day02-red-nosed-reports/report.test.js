import { expect } from 'chai'

import { looseSafetyCheck, safetyCheck } from './report.js'

describe('Day02 - Red-nosed Reports', function () {
  let sampleInput
  let edgeCase1

  before(function () {
    sampleInput = [
      [7, 6, 4, 2, 1],
      [1, 2, 7, 8, 9],
      [9, 7, 6, 2, 1],
      [1, 3, 2, 4, 5],
      [8, 6, 4, 4, 1],
      [1, 3, 6, 7, 9],
    ]
    edgeCase1 = [4, 1, 4, 5, 7, 8]
  })

  describe('safetyCheck', function () {
    it('Sample report 1', function () {
      const safe = safetyCheck(sampleInput[0])
      expect(safe).to.equal(true)
    })

    it('Sample report 2', function () {
      const safe = safetyCheck(sampleInput[1])
      expect(safe).to.equal(false)
    })

    it('Sample report 3', function () {
      const safe = safetyCheck(sampleInput[2])
      expect(safe).to.equal(false)
    })

    it('Sample report 4', function () {
      const safe = safetyCheck(sampleInput[3])
      expect(safe).to.equal(false)
    })

    it('Sample report 5', function () {
      const safe = safetyCheck(sampleInput[4])
      expect(safe).to.equal(false)
    })

    it('Sample report 6', function () {
      const safe = safetyCheck(sampleInput[5])
      expect(safe).to.equal(true)
    })
  })

  describe('looseSafetyCheck', function () {
    it('Sample report 1', function () {
      const safe = looseSafetyCheck(sampleInput[0])
      expect(safe).to.equal(true)
    })

    it('Sample report 2', function () {
      const safe = looseSafetyCheck(sampleInput[1])
      expect(safe).to.equal(false)
    })

    it('Sample report 3', function () {
      const safe = looseSafetyCheck(sampleInput[2])
      expect(safe).to.equal(false)
    })

    it('Sample report 4', function () {
      const safe = looseSafetyCheck(sampleInput[3])
      expect(safe).to.equal(true)
    })

    it('Sample report 5', function () {
      const safe = looseSafetyCheck(sampleInput[4])
      expect(safe).to.equal(true)
    })

    it('Sample report 6', function () {
      const safe = looseSafetyCheck(sampleInput[5])
      expect(safe).to.equal(true)
    })

    it('Edge case 1', function () {
      const safe = looseSafetyCheck(edgeCase1)
      expect(safe).to.equal(true)
    })
  })
})
