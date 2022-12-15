const chai = require('chai')
chai.should()
const expect = chai.expect

const throwIfUndefined = require('../../../../src/Validation/throwIfUndefined')

describe('throwIfUndefined', () => {
  it('should throw an exception with the message passed in when passed an undefined value', () => {
    expect(() => throwIfUndefined('foo',undefined)).to.throw('foo')
    expect(() => throwIfUndefined('foo')()).to.throw('foo')
  })

  it('should return original value when passed anything except undefined', () => {
    throwIfUndefined('foo',true).should.equal(true)
    throwIfUndefined('foo',false).should.equal(false)
    expect(throwIfUndefined('foo',null)).to.be.null
    throwIfUndefined('foo',0).should.equal(0)
    throwIfUndefined('foo',1).should.equal(1)
    expect(throwIfUndefined('foo',NaN)).to.be.NaN
    throwIfUndefined('foo',[]).should.eql([])
    throwIfUndefined('foo','').should.equal('')
    throwIfUndefined('foo','a').should.equal('a')
    throwIfUndefined('foo',{}).should.eql({})
  })
})
