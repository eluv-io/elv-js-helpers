const TH = require('../../../test-helpers')
const passesObjValCheck = TH.requireSrcFile('Boolean/passesObjValCheck')

const NonBlankStrModel = TH.requireSrcFile('Model/NonBlankStrModel')

describe('passesObjValCheck', () => {
  it('should work as expected', () => {
    passesObjValCheck(NonBlankStrModel, {foo: ' '}).should.be.false
    passesObjValCheck(NonBlankStrModel, {foo: 'bar'}).should.be.true
    passesObjValCheck(NonBlankStrModel, {foo: 42}).should.be.false
    passesObjValCheck(NonBlankStrModel, 3).should.be.true  // test input not an object, check skipped
  })

  it('should be curried', () => {
    const allValsNonBlankString = passesObjValCheck(NonBlankStrModel)
    allValsNonBlankString({foo: ' '}).should.be.false
    allValsNonBlankString({foo: 'bar'}).should.be.true
    allValsNonBlankString({foo: 42}).should.be.false
    allValsNonBlankString(3).should.be.true // test input not an object, check skipped
  })
})
