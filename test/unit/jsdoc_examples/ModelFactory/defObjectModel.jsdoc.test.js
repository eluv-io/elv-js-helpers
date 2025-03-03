// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const defObjectModel = TH.requireSrcFile('ModelFactory/defObjectModel')

describe('defObjectModel JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const PersonNameModel = defObjectModel('PersonName', {first: String, last: String})
    TH.expect(() => PersonNameModel(-1)).to.throw('expecting Object, got Number -1')
    PersonNameModel({first: 'Arthur', last: 'Dent'}).should.eql({first: 'Arthur', last: 'Dent'})
    TH.expect(() => PersonNameModel({first: 'Arthur'})).to.throw('expecting last to be String, got undefined')
    PersonNameModel({first: 'A', last: 'D', species: 'human'}).should.eql({first: 'A', last: 'D', species: 'human'})
  })
})
