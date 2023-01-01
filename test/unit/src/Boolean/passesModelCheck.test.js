const TH = require('../../../test-helpers')
const passesModelCheck = TH.requireSrcFile('Boolean/passesModelCheck')

const PositiveIntModel = TH.requireSrcFile('Model/PositiveIntModel')
const StringModel = TH.requireSrcFile('Model/StringModel')
const assertAfterCheck = TH.requireSrcFile('ModelAssertion/assertAfterCheck')

describe('passesModelCheck', () => {
  it('should work as expected', () => {
    passesModelCheck(PositiveIntModel, -1).should.be.false
  })

  it('should be curried', () => {
    const isPositiveInt = passesModelCheck(PositiveIntModel)
    isPositiveInt(1).should.be.true
    isPositiveInt(0).should.be.false
    isPositiveInt('foo').should.be.false
  })


  const ThreeCharStringModel = StringModel.extend().assert(
    ...assertAfterCheck(
      passesModelCheck(StringModel),
      x => x.length === 3,
      'string must be 3 characters long'
    )
  ).as('ThreeCharString')

  it('should return true good input', () => {
    passesModelCheck(ThreeCharStringModel, 'foo').should.be.true
  })

  it('should return false for bad input', () => {
    passesModelCheck(ThreeCharStringModel, 'foobar').should.be.false
    passesModelCheck(ThreeCharStringModel, 3).should.be.false
  })

})
