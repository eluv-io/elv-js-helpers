// unit test for neighborsPass.js

const chai = require('chai')
chai.should()

const neighborsPass = require('../../../../src/Boolean/neighborsPass')

describe('neighborsPass', () => {
  const xGTEy = (x,y) => x <= y

  neighborsPass(xGTEy, 5)

  it('should work as expected', () => {
    neighborsPass(xGTEy, [1, 2, 2, 3]).should.be.true
    neighborsPass(xGTEy, [1]).should.be.true
    neighborsPass(xGTEy, [3, 2, 2, 1]).should.be.false
    neighborsPass(xGTEy, 'abcde').should.be.true
    neighborsPass(xGTEy, 5).should.be.true
  })

  it('should be curried', () => {
    const isOrdered = neighborsPass(xGTEy)
    isOrdered([1, 2, 2, 3]).should.be.true
    isOrdered([1]).should.be.true
    isOrdered([3, 2, 2, 1]).should.be.false
    isOrdered('abcde').should.be.true
    isOrdered(5).should.be.true
  })
})
