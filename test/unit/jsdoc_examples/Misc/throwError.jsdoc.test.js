// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const throwError = TH.requireSrcFile('Misc/throwError')

describe('throwError JSDoc example', () => {
  it('should execute correctly as described', () => {
    TH.expect(() => throwError('clear and helpful error message')).to.throw('clear and helpful error message')
  })
})
