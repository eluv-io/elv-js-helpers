// unit test for assertEmpty.js

const chai = require('chai')
chai.should()
const expect = chai.expect

const assertEmpty = require('../../../../src/ModelAssertion/assertEmpty')

const isString = require('../../../../src/Boolean/isString')
const StringModel = require('../../../../src/Model/StringModel')
const assertAfterCheck = require('../../../../src/ModelAssertion/assertAfterCheck')

const EmptyStringModel = StringModel.extend()
  .assert(
    ...assertAfterCheck(
      isString,
      ...assertEmpty
    )
  )
  .as('EmptyString')

describe('assertEmpty', () => {
  it('should work as expected', () => {
    expect(() => EmptyStringModel('foo')).to.throw('Value must be empty (got: "foo")')
    EmptyStringModel('').should.equal('')
    expect(() => EmptyStringModel([])).to.throw('expecting String, got Array []')
  })
})
