const chai = require('chai')
chai.should()
const expect = chai.expect

const throwIfTrue = require('../../../../src/Validation/throwIfTrue')


describe('throwIfTrue', () => {
  it('should throw an exception with the message passed in when passed a truthy value', () => {
    expect(() => throwIfTrue('foo', true)).to.throw('foo')
    expect(() => throwIfTrue('foo', 1)).to.throw('foo')
    expect(() => throwIfTrue('foo', [])).to.throw('foo')
    expect(() => throwIfTrue('foo', 'a')).to.throw('foo')
    expect(() => throwIfTrue('foo', {})).to.throw('foo')
  })

  it('should return original value when passed a falsy value', () => {
    throwIfTrue('foo', false).should.equal(false)
    expect(throwIfTrue('foo', null) === null).to.be.true
    expect(throwIfTrue('foo', undefined) === undefined).to.be.true
    throwIfTrue('foo', 0).should.equal(0)
    throwIfTrue('foo', '').should.equal('')
    isNaN(throwIfTrue('foo', NaN)).should.be.true
  })
})
