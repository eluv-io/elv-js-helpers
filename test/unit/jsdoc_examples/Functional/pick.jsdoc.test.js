// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const pick = TH.requireSrcFile('Functional/pick')

describe('pick JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const person = {
      firstName: 'Arthur',
      middleName: 'Philip',
      lastName: 'Dent',
      species: 'Human',
    }
    pick(['firstName', 'lastName'], person).should.eql({firstName: 'Arthur', lastName: 'Dent'})
    // function is curried, call with just first param to return a narrower function:
    const speciesPicker = pick(['species'])
    speciesPicker(person).should.eql({species: 'Human'})
  })
})
