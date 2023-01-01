const TH = require('../../../test-helpers')
const Ok = TH.requireSrcFile('ADT/Ok')

describe('Ok', () => {
  it('should have a working example in JSDoc', () => {
    Ok(42).inspect().should.eql('Ok 42')
  })
})
