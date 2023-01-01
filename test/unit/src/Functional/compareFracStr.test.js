const TH = require('../../../test-helpers')
const compareFracStr = TH.requireSrcFile('Functional/compareFracStr')

describe('compareFracStr', () => {
  it('should work as expected', () => {
    compareFracStr('1', '2').should.equal(-1)
    compareFracStr('1/2', '1/4').should.equal(1)
    TH.expect(() => compareFracStr(2, 1)).to.throw('expecting String, got Number 2')
    TH.expect(() => compareFracStr('a', 'b')).to.throw('Value must be a string in the form of a whole number or a fraction (got: "a")')
    TH.expect(() => compareFracStr(null, undefined)).to.throw('expecting String, got null')
    TH.expect(() => compareFracStr(0.5, '1/2')).to.throw('expecting String, got Number 0.5')
  })
})
