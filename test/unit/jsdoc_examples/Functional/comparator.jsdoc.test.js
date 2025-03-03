// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const comparator = TH.requireSrcFile('Functional/comparator')

describe('comparator JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const isLT = TH.requireSrcFile('Boolean/isLT')
    const isGT = TH.requireSrcFile('Boolean/isGT')
    const compAscending = comparator(isGT)
    const compDescending = comparator(isLT)
    let data = [1, 42, -42, 0]
    data.sort(compAscending)

    TH.sinon.stub(console, 'log')
    console.log(data)
    try {
      TH.chai.assert.deepEqual(console.log.getCall(0).args[0], [-42, 0, 1, 42])
    } finally {
      TH.sinon.restore()
    }
    data.sort(compDescending)

    TH.sinon.stub(console, 'log')
    console.log(data)
    try {
      TH.chai.assert.deepEqual(console.log.getCall(0).args[0], [42, 1, 0, -42])
    } finally {
      TH.sinon.restore()
    }
  })
})
