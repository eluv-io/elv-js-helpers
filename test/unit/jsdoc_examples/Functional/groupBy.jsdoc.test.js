// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const groupBy = TH.requireSrcFile('Functional/groupBy')

describe('groupBy JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const values = [1, 2, [3], 'a', 'b', null]
    const kind = TH.requireSrcFile('Validation/kind')
    groupBy(kind, values).should.eql({Array: [[3]], Number: [1, 2], null: [null], String: ['a', 'b']})
  })
})
