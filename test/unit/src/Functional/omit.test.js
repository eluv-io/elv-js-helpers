const TH = require('../../../test-helpers')
const omit = TH.requireSrcFile('Functional/omit')

describe('omit', () => {
  it('should work as expected', () => {
    const myObject = {foo: 'f', bar: 'b'}
    omit(['foo'], myObject).should.eql({bar: 'b'})
  })
})
