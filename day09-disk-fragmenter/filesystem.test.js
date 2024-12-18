import { expect } from 'chai'

import {
  checksum,
  freeUpFileSpace,
  freeUpSpace,
  getBlocks,
} from './filesystem.js'

describe('Day08 - Disk Fragmenter', function () {
  let sampleInput
  let sampleFs
  let sampleOptFs
  let sampleOptFileFs
  let simpleSampleInput
  let simpleSampleFs
  let simpleSampleOptFs

  before(function () {
    sampleInput = '2333133121414131402'
    sampleFs = '00...111...2...333.44.5555.6666.777.888899'
    sampleOptFs = '0099811188827773336446555566..............'
    sampleOptFileFs = '00992111777.44.333....5555.6666.....8888..'
    simpleSampleInput = '12345'
    simpleSampleFs = '0..111....22222'
    simpleSampleOptFs = '022111222......'
  })

  describe('getBlocks', function () {
    it('simpleSampleInput', function () {
      const blocks = getBlocks(simpleSampleInput, 'string')
      expect(blocks).to.equal(simpleSampleFs)
    })

    it('sampleInput', function () {
      const blocks = getBlocks(sampleInput, 'string')
      expect(blocks).to.equal(sampleFs)
    })
  })

  describe('freeUpSpace', function () {
    it('simpleSampleInput', function () {
      const blocks = freeUpSpace(simpleSampleFs, 'string')
      expect(blocks).to.equal(simpleSampleOptFs)
    })

    it('sampleInput', function () {
      const blocks = freeUpSpace(sampleFs, 'string')
      expect(blocks).to.equal(sampleOptFs)
    })
  })

  describe('freeUpFileSpace', function () {
    it('sampleInput', function () {
      const blocks = freeUpFileSpace(sampleFs, 'string')
      expect(blocks).to.equal(sampleOptFileFs)
    })
  })

  describe('checksum', function () {
    it('simpleSampleInput', function () {
      const sum = checksum(simpleSampleOptFs)
      expect(sum).to.equal(60)
    })

    it('sampleInput', function () {
      const sum = checksum(sampleOptFs)
      expect(sum).to.equal(1928)
    })

    it('sampleInput - smart', function () {
      const sum = checksum(sampleOptFileFs)
      expect(sum).to.equal(2858)
    })
  })
})
