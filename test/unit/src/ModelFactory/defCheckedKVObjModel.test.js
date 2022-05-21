// noinspection JSValidateTypes

const chai = require('chai')
chai.should()
const expect = chai.expect

const equals = require('ramda/src/equals')

const assertAfterCheck = require('../../../../src/ModelAssertion/assertAfterCheck')
const passesModelCheck = require('../../../../src/Boolean/passesModelCheck')
const PositiveIntModel = require('../../../../src/Model/PositiveIntModel')
const StringModel = require('../../../../src/Model/StringModel')

const defCheckedKVObjModel = require('../../../../src/ModelFactory/defCheckedKVObjModel')

describe('defCheckedKVObjModel', () => {

  const ThreeCharStringModel = StringModel.extend().assert(
    ...assertAfterCheck(
      passesModelCheck(StringModel),
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
    expect(() => Test1Model({'foo': -1})).to.throw('key "foo" points to a value that is an invalid PositiveInteger (PositiveInteger: Value must be > 0 (got: -1))')
    expect(() => Test1Model({'foobar': 1})).to.throw('invalid property name "foobar" (is not a valid ThreeCharString)')
  })

  it('should throw an exception for non-objects', () => {
    expect(() => Test1Model(Infinity)).to.throw('expecting Object, got Number Infinity')
  })

  it('should have a JSDoc example that works', () => {
    const NonBlankStrModel = require('../../../../src/Model/NonBlankStrModel')

    const NoBlankStrKVObjectModel = defCheckedKVObjModel(
      'ObjectWithNonBlankStringKeysAndValues',
      NonBlankStrModel,
      NonBlankStrModel
    )

    equals(NoBlankStrKVObjectModel({foo: 'bar'}), {foo: 'bar'}).should.be.true
    expect(() => NoBlankStrKVObjectModel({foo: '   '})).to.throw('key "foo" points to a value that is an invalid NonBlankString (NonBlankString: Value must not be a blank string (got: "   "))')
    expect(() => NoBlankStrKVObjectModel({'  ': 'bar'})).to.throw('invalid property name "  " (is not a valid NonBlankString)')
    expect(() => NoBlankStrKVObjectModel({foo: 42})).to.throw('key "foo" points to a value that is an invalid NonBlankString (NonBlankString: expecting String, got Number 42)')
    expect(() => NoBlankStrKVObjectModel(42)).to.throw('expecting Object, got Number 42')
  })
})
