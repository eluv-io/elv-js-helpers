// noinspection JSValidateTypes

const chai = require('chai')
chai.should()
const expect = chai.expect

const equals = require('ramda/src/equals')

const _assertWithPreCheck = require('../../../src/internal/_assertWithPrecheck')
const checkVsModel = require('../../../src/checkVsModel')
const defCheckedKVObjModel = require('../../../src/defCheckedKVObjModel')
const StringModel = require('../../../src/StringModel')
const PositiveIntModel = require('../../../src/PositiveIntModel')

describe('defCheckedKVObjModel', () => {

  const ThreeCharStringModel = StringModel.extend().assert(
    ..._assertWithPreCheck(
      checkVsModel(StringModel),
      x => x.length === 3,
      'string must be 3 characters long'
    )
  ).as('ThreeCharString')

  const Test1Model = defCheckedKVObjModel('Test1', ThreeCharStringModel, PositiveIntModel)

  it('should pass for good objects', () => {
    equals(
      Test1Model({'foo': 1}),
      {'foo': 1}
    ).should.be.true
  })

  it('should throw an exception for bad objects', () => {
    expect(() => Test1Model({'foo': -1})).to.throw('key \'foo\' points to a value that is an invalid PositiveInteger (PositiveInteger: Value must be > 0 (got: -1))')
    expect(() => Test1Model({'foobar': 1})).to.throw('invalid property name \'foobar\' (is not a valid ThreeCharString)')
  })

  it('should throw an exception for non-objects', () => {
    expect(() => Test1Model(Infinity)).to.throw('expecting Object, got Number Infinity')
  })

})
