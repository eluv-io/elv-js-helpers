// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const objBadVal = TH.requireSrcFile('Validation/objBadVal')

describe('objBadVal JSDoc example', () => {
  it('should execute correctly as described', () => {
    const NonBlankStrModel = TH.requireSrcFile('Model/NonBlankStrModel')
    TH.chai.assert.deepEqual(objBadVal(NonBlankStrModel, {foo: 'bar'}), undefined)
    objBadVal(NonBlankStrModel, {foo: ' '}).should.eql(['foo', ' '])
    objBadVal(NonBlankStrModel, {foo: 42}).should.eql(['foo', 42])
    // function is curried: call with fewer params to obtain a narrower function
    const findBlankVal = objBadVal(NonBlankStrModel)
    TH.chai.assert.deepEqual(findBlankVal({foo: 'bar'}), undefined)
    findBlankVal({foo: ' '}).should.eql(['foo', ' '])
  })
})
