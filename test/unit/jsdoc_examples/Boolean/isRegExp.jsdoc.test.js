// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const isRegExp = TH.requireSrcFile('Boolean/isRegExp')

describe('isRegExp JSDoc example', () => {
  it('should execute correctly as described', () => {
    isRegExp([1, 2, 3]).should.eql(false)
    // extra arguments ignored:
    isRegExp(1, /foo/).should.eql(false)
    isRegExp(/foo/).should.eql(true)
    // extra argument ignored:
    isRegExp(/foo/, 3).should.eql(true)
  })
})
