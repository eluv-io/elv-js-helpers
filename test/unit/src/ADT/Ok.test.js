const TH = require('../../../test-helpers')
const Ok = TH.requireSrcFile('ADT/Ok')

describe('Ok', () => {

  it('should work as expected', () => {
    Ok(42).inspect().should.equal('Ok 42')
  })
})
