const TH = require('../../../test-helpers')
const isObject = TH.requireSrcFile('Boolean/isObject')

describe('isObject', () => {

  it('should work as expected', () => {
    isObject([1, 2, 3]).should.be.false
    isObject(1, {foo: 'bar'}).should.be.false
    isObject('foo').should.be.false
    isObject({}).should.be.true
    isObject({foo: 'bar'}, 3).should.be.true
  })
})
