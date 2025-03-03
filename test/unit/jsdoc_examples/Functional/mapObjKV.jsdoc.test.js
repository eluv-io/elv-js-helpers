// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const mapObjKV = TH.requireSrcFile('Functional/mapObjKV')

describe('mapObjKV JSDoc example', () => {
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
    // note that function can have fewer than 3 inputs if you don't need to use all of the parameters:
    const nameCapitalizer = (val, key) => (key.endsWith('name') ? val.charAt(0).toUpperCase() + val.slice(1) : val)
    const result = mapObjKV(keyPrefixer, nameCapitalizer, myObj)

    TH.sinon.stub(console, 'log')
    dumpJSON(result)
    try {
      TH.chai.assert.deepEqual(
        console.log.getCall(0).args[0],
        '{\n  "new_firstname": "Arthur",\n  "new_lastname": "Dent",\n  "new_id": 42\n}'
      )
    } finally {
      TH.sinon.restore()
    }
  })
})
