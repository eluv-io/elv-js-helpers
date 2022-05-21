// unit test for defBasicModel.js

const chai = require('chai')
chai.should()
const expect = chai.expect

const defBasicModel = require('../../../../src/ModelFactory/defBasicModel')

describe('defBasicModel', () => {

  it('should work as expected', () => {
    const StringModel = defBasicModel('String', String)
    expect(()=>StringModel(42)).to.throw('expecting String, got Number 42')
    StringModel('foo').should.equal('foo')
  })
})
