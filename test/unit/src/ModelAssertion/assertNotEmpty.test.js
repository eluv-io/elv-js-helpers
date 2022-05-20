// unit test for assertNotEmpty.js

const chai = require('chai')
chai.should()
const expect = chai.expect

const assertNotEmpty = require('../../../../src/ModelAssertion/assertNotEmpty')

const isString = require('../../../../src/Boolean/isString')

const StringModel = require('../../../../src/Model/StringModel')

const assertAfterCheck = require('../../../../src/ModelAssertion/assertAfterCheck')

describe('assertNotEmpty', () => {

  it('should work as expected', () => {
    const NonEmptyStringModel = StringModel.extend()
      .assert(
        ...assertAfterCheck(
          isString,
          ...assertNotEmpty
        )
      )
      .as('NonEmptyString')

    NonEmptyStringModel('foo').should.equal('foo')
    expect(()=>NonEmptyStringModel('')).to.throw('Value must not be empty (got: "")')
    expect(()=>NonEmptyStringModel([])  ).to.throw( 'expecting String, got Array []')
  })
})
