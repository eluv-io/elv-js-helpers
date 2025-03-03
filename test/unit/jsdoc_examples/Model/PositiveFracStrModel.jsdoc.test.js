// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const PositiveFracStrModel = TH.requireSrcFile('Model/PositiveFracStrModel')

describe('PositiveFracStrModel JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    PositiveFracStrModel('42').should.eql('42')
    TH.expect(() => PositiveFracStrModel('0')).to.throw('Value must be > 0 (got: "0")')
    PositiveFracStrModel('42/2').should.eql('42/2')
    TH.expect(() => PositiveFracStrModel('foo')).to.throw(
      'Value must be a string in the form of a whole number or a fraction (got: "foo")'
    )
  })
})
