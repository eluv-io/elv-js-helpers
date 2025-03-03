// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const defBoundedNumModel = TH.requireSrcFile('ModelFactory/defBoundedNumModel')

describe('defBoundedNumModel JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const HumanHeightMetersModel = defBoundedNumModel('HumanHeightMeters', 0, 3, false, true)
    TH.expect(() => HumanHeightMetersModel(0)).to.throw('Value must be > 0 and <= 3 (got: 0)')
    HumanHeightMetersModel(1.5).should.eql(1.5)
    TH.expect(() => HumanHeightMetersModel(4)).to.throw('Value must be > 0 and <= 3 (got: 4)')
    TH.expect(() => HumanHeightMetersModel('foo')).to.throw('expecting Number, got String "foo"')
  })
})
