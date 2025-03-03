// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const clone = TH.requireSrcFile('Functional/clone')

describe('clone JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const defObjectModel = TH.requireSrcFile('ModelFactory/defObjectModel')
    const PersonNameModel = defObjectModel('PersonName', {first: String, last: String})
    const arthur = PersonNameModel({first: 'Arthur', last: 'Dent'})
    const arthurClone = clone(arthur)
    arthurClone.last = 'Clone'

    TH.sinon.stub(console, 'log')
    console.log(arthurClone.last)
    try {
      TH.chai.assert.deepEqual(console.log.getCall(0).args[0], 'Clone')
    } finally {
      TH.sinon.restore()
    }

    TH.sinon.stub(console, 'log')
    console.log(arthur.last)
    try {
      TH.chai.assert.deepEqual(console.log.getCall(0).args[0], 'Dent')
    } finally {
      TH.sinon.restore()
    }
    TH.expect(() => (arthurClone.last = 3)).to.throw('expecting last to be String, got Number 3')
  })
})
