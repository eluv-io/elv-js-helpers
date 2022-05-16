// unit test for boolsToInt.js

const chai = require('chai')
chai.should()

const boolsToInt = require('../../../../src/Conversion/boolsToInt')

describe('boolsToInt', () => {

  it('should work as expected', () => {
    boolsToInt([false, false, true]).should.equal(1)
    boolsToInt([true, false]).should.equal(2)
    boolsToInt([true, true, true]).should.equal(7)
  })
})
