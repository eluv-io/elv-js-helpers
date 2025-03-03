// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const throwIfArgsBad = TH.requireSrcFile('Validation/throwIfArgsBad')

describe('throwIfArgsBad JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const defObjectModel = TH.requireSrcFile('ModelFactory/defObjectModel')
    const NonNegativeIntModel = TH.requireSrcFile('Model/NonNegativeIntModel')
    const PersonModel = defObjectModel('Person', {first: String, last: String, age: NonNegativeIntModel})
    const getAge = person => {
      throwIfArgsBad(PersonModel, person)
      return person.age
    }
    const validPerson = {first: 'Arthur', last: 'Dent', age: 30}
    getAge(validPerson).should.eql(30)
    const badData = {first: 'Arthur', last: 'Dent'}
    TH.expect(() => getAge(badData)).to.throw('getAge() expecting age to be Number, got undefined')
    TH.expect(() => getAge(42)).to.throw('getAge() expecting Object, got Number 42')
  })
})
