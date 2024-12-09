import { expect } from 'chai'

import { checkUpdate, correctUpdateOrder } from './queue.js'

describe('Day05 - Print Queue', function () {
  let sampleRules
  let sampleUpdates

  before(function () {
    sampleRules = {
      29: ['13'],
      47: ['53', '13', '61', '29'],
      53: ['29', '13'],
      61: ['13', '53', '29'],
      75: ['29', '53', '47', '61', '13'],
      97: ['13', '61', '47', '29', '53', '75'],
    }
    sampleUpdates = [
      ['75', '47', '61', '53', '29'],
      ['97', '61', '53', '29', '13'],
      ['75', '29', '13'],
      ['75', '97', '47', '61', '53'],
      ['61', '13', '29'],
      ['97', '13', '75', '29', '47'],
    ]
  })

  describe('checkUpdate', function () {
    it('Sample pages 1', function () {
      const check = checkUpdate(sampleUpdates[0], sampleRules)
      expect(check).to.equal(true)
    })

    it('Sample pages 2', function () {
      const check = checkUpdate(sampleUpdates[1], sampleRules)
      expect(check).to.equal(true)
    })

    it('Sample pages 3', function () {
      const check = checkUpdate(sampleUpdates[2], sampleRules)
      expect(check).to.equal(true)
    })

    it('Sample pages 4', function () {
      const check = checkUpdate(sampleUpdates[3], sampleRules)
      expect(check).to.equal(false)
    })

    it('Sample pages 5', function () {
      const check = checkUpdate(sampleUpdates[4], sampleRules)
      expect(check).to.equal(false)
    })

    it('Sample pages 6', function () {
      const check = checkUpdate(sampleUpdates[5], sampleRules)
      expect(check).to.equal(false)
    })
  })

  describe('correctUpdateOrder', function () {
    it('Sample pages 4', function () {
      const update = correctUpdateOrder(sampleUpdates[3], sampleRules)
      expect(update).to.have.ordered.members(['97', '75', '47', '61', '53'])
    })

    it('Sample pages 5', function () {
      const update = correctUpdateOrder(sampleUpdates[4], sampleRules)
      expect(update).to.have.ordered.members(['61', '29', '13'])
    })

    it('Sample pages 6', function () {
      const update = correctUpdateOrder(sampleUpdates[5], sampleRules)
      expect(update).to.have.ordered.members(['97', '75', '47', '29', '13'])
    })
  })
})
