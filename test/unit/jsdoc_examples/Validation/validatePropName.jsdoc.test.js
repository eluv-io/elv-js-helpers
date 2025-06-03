// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const validatePropName = TH.requireSrcFile('Validation/validatePropName')

describe('validatePropName JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const resultToPOJO = TH.requireSrcFile('Conversion/ResultToPOJO')
    const myObj = {foo: 1, bar: 2}
    const goodResult = validatePropName(myObj, 'foo')
    goodResult.inspect().should.eql('Ok "foo"')
    resultToPOJO(goodResult).ok.should.eql(true)
    resultToPOJO(goodResult).value.should.eql('foo')
    const errBadFieldName = validatePropName(myObj, 'baz')
    resultToPOJO(errBadFieldName).ok.should.eql(false)
    resultToPOJO(errBadFieldName).errMsgs.should.eql(['property "baz" not found'])
    const errNonObject = validatePropName(null, 'foo')
    resultToPOJO(errNonObject).ok.should.eql(false)
    resultToPOJO(errNonObject).errMsgs.should.eql(['Expecting object, got null'])
    // function is curried, call with just 1 argument to return a more specific validation function
    const validateNameForMyObject = validatePropName(myObj)
    validateNameForMyObject('bar').inspect().should.eql('Ok "bar"')
    resultToPOJO(validateNameForMyObject(0)).ok.should.eql(false)
    resultToPOJO(validateNameForMyObject('baz')).ok.should.eql(false)
  })
})
