// unit test for defObjModel.js

const chai = require('chai')
chai.should()
const expect = chai.expect

const equals = require('ramda/src/equals')

const defObjModel = require('../../../../src/ModelFactory/defObjModel')

describe('defObjModel', () => {

  it('should work as expected', () => {
    const PersonNameModel = defObjModel('PersonName', {first: String, last: String})
    expect(() => PersonNameModel(-1)).to.throw('expecting Object, got Number -1')
    equals(PersonNameModel({first: 'Arthur', last: 'Dent'}), {first: 'Arthur', last: 'Dent'}).should.be.true
    expect(() => PersonNameModel({first: 'Arthur'})).to.throw('expecting last to be String, got undefined')
    equals(
      PersonNameModel({first: 'A', last: 'D', species: 'human'}),
      {
        first: 'A',
        last: 'D'
      }
    ).should.be.true
  })
})
