// unit test for passesPairwiseCheck.js

const chai = require('chai')
chai.should()

const passesPairwiseCheck = require('../../../../src/Boolean/passesPairwiseCheck')

describe('passesPairwiseCheck', () => {
  const xGTEy = (x,y) => x <= y

  passesPairwiseCheck(xGTEy, 5)

  it('should ', () => {
    passesPairwiseCheck(xGTEy, [1, 2, 2, 3]).should.be.true
    passesPairwiseCheck(xGTEy, [1]).should.be.true
    passesPairwiseCheck(xGTEy, [3, 2, 2, 1]).should.be.false
    passesPairwiseCheck(xGTEy, 'abcde').should.be.true
    passesPairwiseCheck(xGTEy, 5).should.be.true
  })

  it('should be curried', () => {
    const isOrdered = passesPairwiseCheck(xGTEy)
    isOrdered([1, 2, 2, 3]).should.be.true
    isOrdered([1]).should.be.true
    isOrdered([3, 2, 2, 1]).should.be.false
    isOrdered('abcde').should.be.true
    isOrdered(5).should.be.true
  })
})
