const TH = require('../../../test-helpers')
const omit = TH.requireSrcFile('Functional/omit')

describe('omit', () => {
  it('should have a correct example in JSDoc', function () {
    const myObject = {foo: 'f', bar: 'b'}
    omit(['foo'], myObject).should.eql({bar: 'b'})
  })

  // it('should... ', function() {
  //
  // })
})
