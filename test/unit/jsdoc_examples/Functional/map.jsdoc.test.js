// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const map = TH.requireSrcFile('Functional/map')

describe('map JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const Err = TH.requireSrcFile('ADT/Err')
    const Ok = TH.requireSrcFile('ADT/Ok')
    // function has only one input, not need to curry
    const double = a => a * 2
    const ok21 = Ok(21)
    const badNum = Err(['failed to read input'])
    double(21).should.eql(42)
    // double() does not know to unwrap value before use:
    double(ok21).should.eql(NaN)
    // map() asks input wrapper to remove wrapping and pass value to function, and then re-wrap the return value
    map(double, ok21).inspect().should.eql('Ok 42')
    // badNum ignores request to apply double()
    map(double, badNum).inspect().should.eql('Err [ "failed to read input" ]')
  })
})
