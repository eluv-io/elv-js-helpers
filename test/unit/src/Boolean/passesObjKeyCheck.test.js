const TH = require('../../../test-helpers')
const passesObjKeyCheck = TH.requireSrcFile('Boolean/passesObjKeyCheck')

describe('passesObjKeyCheck', () => {

  const NonBlankStrModel = TH.requireSrcFile('Model/NonBlankStrModel')

  it('should work as expected', () => {
    passesObjKeyCheck(NonBlankStrModel, {' ': 42}).should.be.false
    passesObjKeyCheck(NonBlankStrModel, {'foo': 42}).should.be.true
    passesObjKeyCheck(NonBlankStrModel, 3).should.be.true // test input not an object, check skipped
  })

  it('should be curried', () => {
    const hasNoBlankKeys = passesObjKeyCheck(NonBlankStrModel)
    hasNoBlankKeys({' ': 42}).should.be.false
    hasNoBlankKeys({'foo': 42}).should.be.true
    hasNoBlankKeys(3).should.be.true // test input not an object, check skipped
  })
})
