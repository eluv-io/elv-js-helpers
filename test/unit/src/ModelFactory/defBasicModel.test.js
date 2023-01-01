const TH = require('../../../test-helpers')
const defBasicModel = TH.requireSrcFile('ModelFactory/defBasicModel')

describe('defBasicModel', () => {

  it('should work as expected', () => {
    const StringModel = defBasicModel('String', String)
    TH.expect(()=>StringModel(42)).to.throw('expecting String, got Number 42')
    StringModel('foo').should.equal('foo')
  })
})
