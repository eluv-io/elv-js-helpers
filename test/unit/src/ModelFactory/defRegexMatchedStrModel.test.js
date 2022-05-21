// unit test for defRegexMatchedStrModel.js

const chai = require('chai')
chai.should()
const expect = chai.expect

const defRegexMatchedStrModel = require('../../../../src/ModelFactory/defRegexMatchedStrModel')

describe('defRegexMatchedStrModel', () => {
  it('should work as expected', () => {
    const UUIDStringModel = defRegexMatchedStrModel('UUIDString', /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/)
    UUIDStringModel('12345678-90ab-cdef-0123-4567890abcde').should.equal('12345678-90ab-cdef-0123-4567890abcde')
    expect(() => UUIDStringModel('foo')).to.throw('Value is not in valid format or contains illegal characters (must match regular expression: /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/) (got: "foo")')
    expect(() => UUIDStringModel(42)).to.throw('expecting String, got Number 42')

    // supply a nicer error message
    const UUIDStringModel2 = defRegexMatchedStrModel(
      'UUIDString',
      /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/,
      'is not in UUID format "xxxxxxxx-xxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"'
    )
    expect(() => UUIDStringModel2('foo')).to.throw('Value is not in UUID format "xxxxxxxx-xxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" (got: "foo")')
  })
})
