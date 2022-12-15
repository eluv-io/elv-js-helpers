// unit test for assertPropRel.js

const chai = require('chai')
chai.should()
const expect = chai.expect



const assertPropRel = require('../../../../src/ModelAssertion/assertPropRel')

const isGTE = require('../../../../src/Boolean/isGTE')
const defObjModel = require('../../../../src/ModelFactory/defObjModel')

describe('assertPropRel', () => {
  it('should work as expected', () => {
    const NumLimitsModel = defObjModel(
      'NumberLimits',
      {
        min: Number,
        max: Number
      }
    ).extend().assert(
      ...assertPropRel(
        isGTE,
        'must be greater than or equal to',
        'max',
        'min'
      )
    )

    NumLimitsModel({min: 1, max: 2}).should.eql({min: 1, max: 2})
    expect(() => NumLimitsModel({min: 2, max: 1})).to.throw('max (1) must be greater than or equal to min (2)')
  })
})