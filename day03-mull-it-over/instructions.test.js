import { expect } from 'chai'

import { executeMul, parseAdvanceMuls, parseMuls } from './instructions.js'

describe('Day03 - Mull It Over', function () {
  let sampleInput
  let sampleInstructions
  let sampleInput2

  before(function () {
    sampleInput = [
      'xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))',
    ]
    sampleInstructions = ['mul(2,4)', 'mul(5,5)', 'mul(11,8)', 'mul(8,5)']
    sampleInput2 = [
      "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))",
    ]
  })

  describe('parseMuls', function () {
    it('Sample input', function () {
      const result = parseMuls(sampleInput)
      expect(result).to.deep.equal([
        'mul(2,4)',
        'mul(5,5)',
        'mul(11,8)',
        'mul(8,5)',
      ])
    })
  })

  describe('executeMul', function () {
    it('Sample instruction 1', function () {
      const result = executeMul(sampleInstructions[0])
      expect(result).to.equal(8)
    })

    it('Sample instruction 2', function () {
      const result = executeMul(sampleInstructions[1])
      expect(result).to.equal(25)
    })

    it('Sample instruction 3', function () {
      const result = executeMul(sampleInstructions[2])
      expect(result).to.equal(88)
    })

    it('Sample instruction 4', function () {
      const result = executeMul(sampleInstructions[3])
      expect(result).to.equal(40)
    })
  })

  describe('parseAdvanceMuls', function () {
    it('Sample input', function () {
      const result = parseAdvanceMuls(sampleInput2)
      expect(result).to.deep.equal([
        'mul(2,4)',
        "don't()",
        'mul(5,5)',
        'mul(11,8)',
        'do()',
        'mul(8,5)',
      ])
    })
  })
})
