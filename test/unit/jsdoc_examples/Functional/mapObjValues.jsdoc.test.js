// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const mapObjValues = TH.requireSrcFile('Functional/mapObjValues')

describe('mapObjValues JSDoc example', () => {
  it('should execute correctly as described', () => {
    const dumpJSON = TH.requireSrcFile('Misc/dumpJSON')
    const myObj = {
      firstname: 'arthur',
      lastname: 'dent',
      id: 42,
    }
    // note that function can have fewer than 3 inputs if you don't need to use all of the parameters:
    const nameCapitalizer = (val, key) => (key.endsWith('name') ? val.charAt(0).toUpperCase() + val.slice(1) : val)
    const result = mapObjValues(nameCapitalizer, myObj)

    TH.sinon.stub(console, 'log')
    dumpJSON(result)
    try {
      TH.chai.assert.deepEqual(
        console.log.getCall(0).args[0],
        '{\n  "firstname": "Arthur",\n  "lastname": "Dent",\n  "id": 42\n}'
      )
    } finally {
      TH.sinon.restore()
    }
  })
})
