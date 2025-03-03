// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const either = TH.requireSrcFile('Functional/either')

describe('either JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const Err = TH.requireSrcFile('ADT/Err')
    const Ok = TH.requireSrcFile('ADT/Ok')
    const resultToString = either(
      v => `Err result: (${v})`,
      v => `Ok result: (${v})`
    )
    resultToString(Ok(100)).should.eql('Ok result: (100)')
    resultToString(Err('fail')).should.eql('Err result: (fail)')
  })
})
