// unit test for DatetimeModel.js

const chai = require('chai')
chai.should()
const expect = chai.expect

const DatetimeModel = require('../../../../src/Model/DatetimeModel')

const kind = require('../../../../src/Validation/kind')

describe('DatetimeModel', () => {
  it('should work as expected', () => {
    kind(DatetimeModel(new Date)).should.equal('Date')
    expect(() => DatetimeModel('foo')).to.throw('expecting Date, got String "foo"')
  })
})
