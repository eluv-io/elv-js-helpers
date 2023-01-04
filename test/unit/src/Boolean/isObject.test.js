const TH = require('../../../test-helpers')
const isObject = TH.requireSrcFile('Boolean/isObject')

describe('isObject', () => {
  it('should work as expected', () => {
    isObject([1, 2, 3]).should.eql(false)
    isObject('foo').should.eql(false)
    isObject({}).should.eql(true)
  })

  it('should ignore extra arguments', () => {
    isObject(1, {foo: 'bar'}).should.eql(false)
    isObject({foo: 'bar'}, 3).should.eql(true)
  })
})
