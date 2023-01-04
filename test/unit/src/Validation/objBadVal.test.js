const TH = require('../../../test-helpers')
const objBadVal = TH.requireSrcFile('Validation/objBadVal')

describe('objBadVal', () => {

  const NonBlankStrModel = TH.requireSrcFile('Model/NonBlankStrModel')

  it('should work as expected', () => {
    TH.expect(objBadVal(NonBlankStrModel, {foo: 'bar'}) === undefined).to.be.true
    objBadVal(NonBlankStrModel, {foo: ' '}).should.eql(['foo', ' '])
    objBadVal(NonBlankStrModel, {foo: 42}).should.eql(['foo', 42])
  })

  it('should be curried', () => {
    const findBlankVal = objBadVal(NonBlankStrModel)
    TH.expect(findBlankVal({foo: 'bar'}) === undefined).to.be.true
    findBlankVal({foo: ' '}).should.eql( ['foo', ' '])
  })
})
