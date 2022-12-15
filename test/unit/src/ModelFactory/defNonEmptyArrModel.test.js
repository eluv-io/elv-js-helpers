// unit test for defNonEmptyArrModel.js

const chai = require('chai')
chai.should()
const expect = chai.expect



const defNonEmptyArrModel = require('../../../../src/ModelFactory/defNonEmptyArrModel')

const NonNegativeNumModel = require('../../../../src/Model/NonNegativeNumModel')

describe('defNonEmptyArrModel', () => {
  it('should work as expected', () => {
    const NonEmptyAgeArrayModel = defNonEmptyArrModel('NonEmptyAgeArray', NonNegativeNumModel)
    NonEmptyAgeArrayModel([42]).should.eql( [42])
    expect(() => NonEmptyAgeArrayModel([])).to.throw('Value must not be empty (got: [])')
    expect(() => NonEmptyAgeArrayModel(-1)).to.throw('expecting Array of NonNegativeNumber, got Number -1')
    expect(() => NonEmptyAgeArrayModel([-1])).to.throw('Array[0] must be >= 0 (got: -1)')
    expect(() => NonEmptyAgeArrayModel('')).to.throw('expecting Array of NonNegativeNumber, got String ""')
    expect(() => NonEmptyAgeArrayModel(['foo'])).to.throw('expecting Array[0] to be Number, got String "foo"')
  })
})
