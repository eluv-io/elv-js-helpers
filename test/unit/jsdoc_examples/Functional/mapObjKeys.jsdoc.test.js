// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const mapObjKeys = TH.requireSrcFile('Functional/mapObjKeys')

describe('mapObjKeys JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const dumpJSON = TH.requireSrcFile('Misc/dumpJSON')
    const myObj = {
      firstname: 'arthur',
      lastname: 'dent',
      id: 42,
    }
    // note that function can have fewer than 3 inputs if you don't need to use all of the parameters:
    const keyPrefixer = key => `new_${key}`
    const result = mapObjKeys(keyPrefixer, myObj)

    TH.sinon.stub(console, 'log')
    dumpJSON(result)
    try {
      TH.chai.assert.deepEqual(
        console.log.getCall(0).args[0],
        '{\n  "new_firstname": "arthur",\n  "new_lastname": "dent",\n  "new_id": 42\n}'
      )
    } finally {
      TH.sinon.restore()
    }
  })
})
