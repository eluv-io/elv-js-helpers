const TH = require('../../../test-helpers')
const objBadKey = TH.requireSrcFile('Validation/objBadKey')

describe('objBadKey', () => {

  const NonBlankStrModel = TH.requireSrcFile('Model/NonBlankStrModel')

  it('should work as expected', () => {
    TH.expect(objBadKey(NonBlankStrModel, {foo: 'bar'}) === undefined).to.be.true
    objBadKey(NonBlankStrModel, {'  ': 'bar'}).should.equal('  ')
  })

  it('should be curried', () => {
    const findBlankKey = objBadKey(NonBlankStrModel)
    TH.expect(findBlankKey( {foo: 'bar'}) === undefined).to.be.true
    findBlankKey({'  ': 'bar'}).should.equal('  ')
  })
})
