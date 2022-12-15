// unit test for clone.js

const chai = require('chai')
chai.should()
const expect = chai.expect

const clone = require('../../../../src/Functional/clone')

describe('clone', () => {

  it('should work as expected', () => {

    const defObjModel = require('../../../../src/ModelFactory/defObjModel')
    const PersonNameModel = defObjModel('PersonName', {first: String, last: String})
    const arthur = PersonNameModel({first: 'Arthur', last: 'Dent'})
    const arthurClone = clone(arthur)
    arthurClone.last = 'Clone'
    arthurClone.last.should.equal('Clone')
    arthur.last.should.equal('Dent')
    expect(() => arthurClone.last = 3  ).to.throw('expecting last to be String, got Number 3')
  })
})
