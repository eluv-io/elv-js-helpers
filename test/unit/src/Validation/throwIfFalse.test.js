const TH = require('../../../test-helpers')
const throwIfFalse = TH.requireSrcFile('Validation/throwIfFalse')

describe('throwIfFalse', () => {
  it('should throw an exception with the message passed in when passed a falsy value', () => {
    TH.expect(() => throwIfFalse('foo',false)).to.throw('foo')
    TH.expect(() => throwIfFalse('foo',null)).to.throw('foo')
    TH.expect(() => throwIfFalse('foo',0)).to.throw('foo')
    TH.expect(() => throwIfFalse('foo','')).to.throw('foo')
    TH.expect(() => throwIfFalse('foo',undefined)).to.throw('foo')
    TH.expect(() => throwIfFalse('foo',NaN)).to.throw('foo')
  })

  it('should return original value when passed a truthy value', () => {
    throwIfFalse('foo',true).should.equal(true)
    throwIfFalse('foo',1).should.equal(1)
    throwIfFalse('foo',[]).should.eql([])
    throwIfFalse('foo','a').should.equal('a')
    throwIfFalse('foo',{}).should.eql({})
  })
})
