const TH = require('../../../test-helpers')
const PositiveFracStrModel = TH.requireSrcFile('Model/PositiveFracStrModel')

describe('PositiveFracStrModel', () => {
  it('should work as expected', () => {
    PositiveFracStrModel('42').should.equal('42')
    TH.expect(() => PositiveFracStrModel('0')).to.throw('Value must be > 0 (got: "0")')
    PositiveFracStrModel('42/2').should.equal('42/2')
    TH.expect(() => PositiveFracStrModel('foo')).to.throw('Value must be a string in the form of a whole number or a fraction (got: "foo")')
  })
})
