import { expect } from 'chai'

import {
  distanceBetweenLists,
  similarityBetweenLists,
  sortList,
} from './lists.js'

describe('Day01 - Historian Hysteria', function () {
  let sampleInput
  let sortedSampleInput

  before(function () {
    sampleInput = [
      [3, 4, 2, 1, 3, 3],
      [4, 3, 5, 3, 9, 3],
    ]
    sortedSampleInput = sampleInput.map((list) => sortList(list))
  })

  describe('distanceBetweenLists', function () {
    it('Sample input', function () {
      const total = distanceBetweenLists(...sortedSampleInput)
      expect(total).to.equal(11)
    })
  })

  describe('similarityBetweenLists', function () {
    it('Sample input', function () {
      const total = similarityBetweenLists(...sortedSampleInput)
      expect(total).to.equal(31)
    })
  })
})
