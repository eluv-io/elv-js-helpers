// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const defBasicModel = TH.requireSrcFile('ModelFactory/defBasicModel')

describe('defBasicModel JSDoc example', () => {
  it('should execute correctly as described', () => {
    const StringModel = defBasicModel('String', String)
    TH.expect(() => StringModel(42)).to.throw('expecting String, got Number 42')
    StringModel('foo').should.eql('foo')
  })
})
