// unit test for defSealedObjModel.js

const chai = require('chai')
chai.should()
const expect = chai.expect

const equals = require('ramda/src/equals')

const defSealedObjModel = require('../../../../src/ModelFactory/defSealedObjModel')

describe('defSealedObjModel', () => {

  it('should work as expected', () => {
    const PersonNameModel = defSealedObjModel('PersonName', {first: String, last: String})
    expect(() => PersonNameModel(-1)).to.throw('expecting Object, got Number -1')
    equals(PersonNameModel({first: 'Arthur', last: 'Dent'}), {first: 'Arthur', last: 'Dent'}).should.be.true
    expect(() => PersonNameModel({first: 'Arthur'})).to.throw('expecting last to be String, got undefined')
    expect(() => PersonNameModel({
      first: 'A',
      last: 'D',
      species: 'human'
    })).to.throw('Unrecognized property name(s): species')

    expect(() => {
      PersonNameModel.extend()
    }).to.throw('Sealed Model cannot be extended')
    const arthur = PersonNameModel({first: 'Arthur', last: 'Dent'})
    expect(() => arthur.species = 'human').to.throw('Unrecognized property name(s): species')

    const NestedModel = defSealedObjModel(
      'NestedModel',
      {
        name:
          {
            first: String,
            last: String
          }
      }
    )
    equals(NestedModel({name: {first: 'Arthur', last: 'Dent'}}),{name: {first: 'Arthur', last: 'Dent'}}).should.be.true

    // test unsealing the model, for test coverage
    const dent=NestedModel({name: {first: 'Arthur', last: 'Dent'}})
    NestedModel.sealed = false
    dent.species = 'human'
  })
})
