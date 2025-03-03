// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const tryCatch = TH.requireSrcFile('Functional/tryCatch')

describe('tryCatch JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const resultToPOJO = TH.requireSrcFile('Conversion/resultToPOJO')
    // Using tryCatch to create safe versions of functions that may throw exceptions:
    const firstChar = x => x.charAt(0)
    const safeFirstChar = tryCatch(firstChar)
    const goodResult1 = safeFirstChar('42')
    goodResult1.inspect().should.eql('Ok "4"')
    const errResult1 = safeFirstChar(42)
    resultToPOJO(errResult1).ok.should.eql(false)
    resultToPOJO(errResult1).errMsgs.should.eql(['TypeError: x.charAt is not a function'])
    // Class instance methods require .bind():
    const myRegex = /^[a-z]+$/
    const safeTest = tryCatch(myRegex.test.bind(myRegex))
    const goodResult2 = safeTest('abc')
    goodResult2.inspect().should.eql('Ok true')
    safeTest('42').inspect().should.eql('Ok false')
    const badResult2 = safeTest(Symbol())
    resultToPOJO(badResult2).ok.should.eql(false)
    resultToPOJO(badResult2).errMsgs.should.eql(['TypeError: Cannot convert a Symbol value to a string'])
    // Forgetting to use .bind() with a class instance method will cause obscure errors:
    const badTest = tryCatch(myRegex.test)
    const badTestResult = badTest('abc')
    resultToPOJO(badTestResult).ok.should.eql(false)
    resultToPOJO(badTestResult).errMsgs.should.eql([
      'TypeError: Method RegExp.prototype.test called on incompatible receiver undefined',
    ])
    // Using tryCatch like a Javascript try / catch block (immediately executing the function):
    // argument(s) listed inside tryCatch:
    const goodResult3 = tryCatch(firstChar, '42')
    goodResult3.inspect().should.eql('Ok "4"')
    // argument(s) listed after tryCatch:
    const badResult3 = tryCatch(firstChar)(42)
    resultToPOJO(badResult3).ok.should.eql(false)
    resultToPOJO(badResult3).errMsgs.should.eql(['TypeError: x.charAt is not a function'])
  })
})
