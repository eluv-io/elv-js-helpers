const TH = require('../../../test-helpers')
const passesModelCheck = TH.requireSrcFile('Boolean/passesModelCheck')

// AUTO-GENERATED TEST: Do not modify the following "describe('passesModelCheck JSDoc example', ...)" block:
describe('passesModelCheck JSDoc example', () => {
  it('should execute correctly as described', () => {
    const PositiveIntModel = TH.requireSrcFile('Model/PositiveIntModel')
    passesModelCheck(PositiveIntModel, -1).should.eql(false)
    // function is curried: call with just first param to obtain a narrower function
    const isPositiveInt = passesModelCheck(PositiveIntModel)
    isPositiveInt(1).should.eql(true)
    isPositiveInt(0).should.eql(false)
    isPositiveInt('foo').should.eql(false)
  })
})

describe('passesModelCheck', () => {
  const StringModel = TH.requireSrcFile('Model/StringModel')
  const assertAfterCheck = TH.requireSrcFile('ModelAssertion/assertAfterCheck')

  const ThreeCharStringModel = StringModel.extend()
    .assert(...assertAfterCheck(passesModelCheck(StringModel), x => x.length === 3, 'string must be 3 characters long'))
    .as('ThreeCharString')

  it('should return true for good input', () => {
    passesModelCheck(ThreeCharStringModel, 'foo').should.be.true
  })

  it('should return false for bad input', () => {
    passesModelCheck(ThreeCharStringModel, 'foobar').should.be.false
    passesModelCheck(ThreeCharStringModel, 3).should.be.false
  })
})
