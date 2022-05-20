const chai = require('chai')
chai.should()
const expect = chai.expect

const equals = require('ramda/src/equals')

const throwIfFalse = require('../../../../src/Validation/throwIfFalse')

describe('throwIfFalse', () => {
  it('should throw an exception with the message passed in when passed a falsy value', () => {
    expect(() => throwIfFalse('foo',false)).to.throw('foo')
    expect(() => throwIfFalse('foo',null)).to.throw('foo')
    expect(() => throwIfFalse('foo',0)).to.throw('foo')
    expect(() => throwIfFalse('foo','')).to.throw('foo')
    expect(() => throwIfFalse('foo',undefined)).to.throw('foo')
    expect(() => throwIfFalse('foo',NaN)).to.throw('foo')
  })

  it('should return original value when passed a truthy value', () => {
    throwIfFalse('foo',true).should.equal(true)
    throwIfFalse('foo',1).should.equal(1)
    equals(throwIfFalse('foo',[]),[]).should.be.true
    throwIfFalse('foo','a').should.equal('a')
    equals(throwIfFalse('foo',{}),{}).should.be.true
  })
})
