const TH = require('../../../test-helpers')
const throwIfTrue = TH.requireSrcFile('Validation/throwIfTrue')

describe('throwIfTrue', () => {
  it('should throw an exception with the message passed in when passed a truthy value', () => {
    TH.expect(() => throwIfTrue('foo', true)).to.throw('foo')
    TH.expect(() => throwIfTrue('foo', 1)).to.throw('foo')
    TH.expect(() => throwIfTrue('foo', [])).to.throw('foo')
    TH.expect(() => throwIfTrue('foo', 'a')).to.throw('foo')
    TH.expect(() => throwIfTrue('foo', {})).to.throw('foo')
  })

  it('should return original value when passed a falsy value', () => {
    throwIfTrue('foo', false).should.equal(false)
    TH.expect(throwIfTrue('foo', null) === null).to.be.true
    TH.expect(throwIfTrue('foo', undefined) === undefined).to.be.true
    throwIfTrue('foo', 0).should.equal(0)
    throwIfTrue('foo', '').should.equal('')
    isNaN(throwIfTrue('foo', NaN)).should.be.true
  })
})
