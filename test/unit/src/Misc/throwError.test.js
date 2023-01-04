const TH = require('../../../test-helpers')
const throwError = TH.requireSrcFile('Misc/throwError')

describe('throwError', () => {

  it('should throw an exception with the message passed in', () => {
    TH.expect(() => throwError('foo')).to.throw('foo')
  })

})
