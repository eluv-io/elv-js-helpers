const chai = require('chai')
chai.should()
const expect = chai.expect

const isGTCustom = require('../../../../src/Boolean/isGTCustom')

const strLength = str => str.length
const isLongerThan = isGTCustom(strLength)

describe('isGTCustom', () => {
  it('should return a function that applies preprocessFn', () => {
    isLongerThan('a', 'ab').should.be.true
    isLongerThan('ab', 'a').should.be.false
    isLongerThan(42, 42).should.be.false
    expect(() => isLongerThan(null, undefined)).to.throw('Cannot read property \'length\' of null')
  })

  it('should work when called with 2 args', () => {
    const isLongerThan3Chars = isGTCustom(strLength, 'foo')
    isLongerThan3Chars('bar').should.be.false
    isLongerThan3Chars('foobar').should.be.true
  })

  it('should work when called with 3 args', () => {
    isGTCustom(strLength, 'foo', 'bar').should.be.false
    isGTCustom(strLength, 'foo', 'foobar').should.be.true
  })
})
