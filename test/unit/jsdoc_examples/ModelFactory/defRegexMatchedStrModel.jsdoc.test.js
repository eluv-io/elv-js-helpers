// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const defRegexMatchedStrModel = TH.requireSrcFile('ModelFactory/defRegexMatchedStrModel')

describe('defRegexMatchedStrModel JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const UUIDStringModel = defRegexMatchedStrModel(
      'UUIDString',
      /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/
    )
    UUIDStringModel('12345678-90ab-cdef-0123-4567890abcde').should.eql('12345678-90ab-cdef-0123-4567890abcde')
    TH.expect(() => UUIDStringModel('foo')).to.throw(
      'Value is not in valid format or contains illegal characters (must match regular expression: /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/) (got: "foo")'
    )
    TH.expect(() => UUIDStringModel(42)).to.throw('expecting String, got Number 42')
    // supply a nicer error message
    const UUIDStringModel2 = defRegexMatchedStrModel(
      'UUIDString',
      /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/,
      'is not in UUID format "xxxxxxxx-xxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"'
    )
    TH.expect(() => UUIDStringModel2('foo')).to.throw(
      'Value is not in UUID format "xxxxxxxx-xxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" (got: "foo")'
    )
  })
})
