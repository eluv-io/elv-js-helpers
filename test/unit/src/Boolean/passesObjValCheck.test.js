const TH = require('../../../test-helpers')
const passesObjValCheck = TH.requireSrcFile('Boolean/passesObjValCheck')

// AUTO-GENERATED TEST: Do not modify the following "describe('passesObjValCheck JSDoc example', ...)" block:
describe('passesObjValCheck JSDoc example', () => {
  it('should execute correctly as described', () => {
    const NonBlankStrModel = TH.requireSrcFile('Model/NonBlankStrModel')
    passesObjValCheck(NonBlankStrModel, {foo: ' '}).should.eql(false)
    passesObjValCheck(NonBlankStrModel, {foo: 'bar'}).should.eql(true)
    // value not a non-blank string:
    passesObjValCheck(NonBlankStrModel, {foo: 42}).should.eql(false)
    // test input not an object, check skipped:
    passesObjValCheck(NonBlankStrModel, 3).should.eql(true)
    // function is curried: call with fewer params to obtain a narrower function
    const allValsNonBlankString = passesObjValCheck(NonBlankStrModel)
    allValsNonBlankString({foo: ' '}).should.eql(false)
    allValsNonBlankString({foo: 'bar'}).should.eql(true)
    // value not a non-blank string:
    allValsNonBlankString({foo: 42}).should.eql(false)
    // test input not an object, check skipped:
    allValsNonBlankString(3).should.eql(true)
  })
})
