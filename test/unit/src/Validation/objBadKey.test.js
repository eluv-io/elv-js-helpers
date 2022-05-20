// noinspection JSValidateTypes

const chai = require('chai')
chai.should()
const expect = chai.expect

const objBadKey = require('../../../../src/Validation/objBadKey')

const NonBlankStrModel = require('../../../../src/Model/NonBlankStrModel')


describe('objBadKey', () => {

  it('should work as expected', () => {
    expect(objBadKey(NonBlankStrModel, {foo: 'bar'}) === undefined).to.be.true
    objBadKey(NonBlankStrModel, {'  ': 'bar'}).should.equal('  ')
  })

  it('should be curried', () => {
    const findBlankKey = objBadKey(NonBlankStrModel)
    expect(findBlankKey( {foo: 'bar'}) === undefined).to.be.true
    findBlankKey({'  ': 'bar'}).should.equal('  ')
  })
})
