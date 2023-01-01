const TH = require('../../../test-helpers')
const map = TH.requireSrcFile('Functional/map')

const Err = TH.requireSrcFile('ADT/Err')
const Ok = TH.requireSrcFile('ADT/Ok')

describe('map', () => {

  const double = a => a * 2
  const ok21 = Ok(21)
  const badNum = Err(['failed to read input'])

  it('should work as expected', () => {
    double(21).should.equal(42)
    isNaN(double(ok21)).should.be.true
    map(double, ok21).inspect().should.equal('Ok 42')
    map(double, badNum).inspect().should.equal('Err [ "failed to read input" ]')
  })
})
