// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const reverse = TH.requireSrcFile('Functional/reverse')

describe('reverse JSDoc example', () => {
  it('should execute correctly as described', () => {
    reverse([1, 2, 3]).should.eql([3, 2, 1])
    reverse('abc').should.eql('cba')
  })
})
