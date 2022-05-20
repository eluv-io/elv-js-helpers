// unit test for DatetimeModel.js

const chai = require('chai')
chai.should()
const expect = chai.expect

const DatetimeModel = require('../../../../src/Model/DatetimeModel')

const kindOf = require('../../../../src/Validation/kindOf')

describe('DatetimeModel', () => {
  it('should work as expected', () => {
    kindOf(DatetimeModel(new Date)).should.equal('date')
    expect(() => DatetimeModel('foo')).to.throw('expecting Date, got String "foo"')
  })
})
