const chai = require('chai')
chai.should()

const defObjectModel = require('../../../src/defObjModel')
const validator = require('../../../src/validator')
const resultUnwrap = require('../../../src/resultUnwrap')

const fooModel = defObjectModel('foo', {foo: String})

describe('validator', () => {

  it('should not hide attributes not defined in model', () => {

    const data = resultUnwrap(validator(fooModel)({foo: 'f', bar: 'b'}))

    const remarshaled = JSON.parse(JSON.stringify(data))
    remarshaled.bar.should.equal('b')

  })

})
