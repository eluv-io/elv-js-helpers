// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const swapFieldsResult = TH.requireSrcFile('Functional/swapFieldsResult')

describe('swapFieldsResult JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const resultToPOJO = TH.requireSrcFile('Conversion/resultToPOJO')
    const obj = {foo: 1, bar: 2, baz: 3}
    const swappedObjResult = swapFieldsResult('foo', 'bar', obj)
    resultToPOJO(swappedObjResult).ok.should.eql(true)
    swappedObjResult.inspect().should.eql('Ok { foo: 2, bar: 1, baz: 3 }')
    const errResult = swapFieldsResult('foo', 'bar', null)
    resultToPOJO(errResult).ok.should.eql(false)
    errResult.inspect().should.eql('Err [ "swapFields: expecting obj to be Object, got null" ]')
  })
})
