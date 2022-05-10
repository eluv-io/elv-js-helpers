const chai = require('chai')
chai.should()
const expect = chai.expect

const assertMatchesRegex = require('../../../src/assertMatchesRegex')
const StringModel = require('../../../src/StringModel')

describe('assertMatchesRegex', () => {

  it('should work as expected when used to extend a model', () => {
    const UUIDStringModel = StringModel.extend()
      .assert(
        ...assertMatchesRegex(
          StringModel,
          /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/,
          'is not in UUID format xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
        )
      ).as('UUIDString')

    UUIDStringModel('12345678-1234-1234-1234-123456789abc').should.equal('12345678-1234-1234-1234-123456789abc')

    expect(() => UUIDStringModel('foo'))
      .to.throw('Value is not in UUID format xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx (got: "foo")')

    expect(() => UUIDStringModel(42))
      .to.throw('expecting String, got Number 42')

  })
})
