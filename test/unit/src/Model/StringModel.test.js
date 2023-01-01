const TH = require('../../../test-helpers')
const StringModel = TH.requireSrcFile('Model/StringModel')

describe('StringModel', () => {
  it('should work as expected', () => {
    StringModel('foo').should.equal('foo')
    TH.expect(() => StringModel(42)).to.throw('expecting String, got Number 42')
  })
})
