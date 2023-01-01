const TH = require('../../../test-helpers')
const isNil = TH.requireSrcFile('Boolean/isNil')

describe('isNil', () => {
  it('should have a correct example in JSDoc', function () {
    isNil().should.eql(true)
    isNil(undefined).should.eql(true)
    isNil(null).should.eql(true)
    isNil(42).should.eql(false)
    // extra argument ignored:
    isNil(42, undefined).should.eql(false)
    // extra argument ignored:
    isNil(undefined, 42).should.eql(true)
  })

  // it('should... ', function() {
  //
  // })
})
