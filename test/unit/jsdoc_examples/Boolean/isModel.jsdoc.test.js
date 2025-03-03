// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const isModel = TH.requireSrcFile('Boolean/isModel')

describe('isModel JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const defObjectModel = TH.requireSrcFile('ModelFactory/defObjectModel')
    const NonBlankStrModel = TH.requireSrcFile('Model/NonBlankStrModel')
    isModel(42).should.eql(false)
    isModel(NonBlankStrModel).should.eql(true)
    isModel(defObjectModel).should.eql(false)
    const PersonModel = defObjectModel('PersonName', {first: String, last: String})
    isModel(PersonModel).should.eql(true)
    const validatedPerson = PersonModel({
      first: 'Arthur',
      last: 'Dent',
    })
    isModel(validatedPerson).should.eql(false)
  })
})
