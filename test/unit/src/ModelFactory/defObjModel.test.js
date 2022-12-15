// unit test for defObjModel.js

const chai = require('chai')
chai.should()
const expect = chai.expect

const defObjModel = require('../../../../src/ModelFactory/defObjModel')

describe('defObjModel', () => {

  it('should work as expected', () => {
    const PersonNameModel = defObjModel('PersonName', {first: String, last: String})
    expect(() => PersonNameModel(-1)).to.throw('expecting Object, got Number -1')
    expect(() => PersonNameModel(-1)).to.not.throw('expecting first to be String, got undefined')
    expect(() => PersonNameModel(null)).to.throw('expecting Object, got null')
    expect(() => PersonNameModel(null)).to.not.throw('expecting first to be String, got undefined')

    PersonNameModel({first: 'Arthur', last: 'Dent'}).should.eql({first: 'Arthur', last: 'Dent'})
    expect(() => PersonNameModel({first: 'Arthur'})).to.throw('expecting last to be String, got undefined')
    PersonNameModel({first: 'A', last: 'D', species: 'human'}).should.eql(
      {
        first: 'A',
        last: 'D',
        species: 'human'
      }
    )
  })
})
