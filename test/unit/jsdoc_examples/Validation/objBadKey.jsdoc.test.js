// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const objBadKey = TH.requireSrcFile('Validation/objBadKey')

describe('objBadKey JSDoc example', () => {
  it('should execute correctly as described', () => {
    const NonBlankStrModel = TH.requireSrcFile('Model/NonBlankStrModel')
    TH.chai.assert.deepEqual(objBadKey(NonBlankStrModel, {foo: 3}), undefined)
    objBadKey(NonBlankStrModel, {' ': 3}).should.eql(' ')
    // function is curried: call with fewer params to obtain a narrower function
    const findBlankKey = objBadKey(NonBlankStrModel)
    TH.chai.assert.deepEqual(findBlankKey({foo: 3}), undefined)
    findBlankKey({' ': 3}).should.eql(' ')
  })
})
