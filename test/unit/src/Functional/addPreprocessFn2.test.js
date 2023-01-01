const TH = require('../../../test-helpers')
const addPreprocessFn2 = TH.requireSrcFile('Functional/addPreprocessFn2')

const isString = TH.requireSrcFile('Boolean/isString')

describe('addPreprocessFn2', () => {

  const strOrNumToNum = x => isString(x) ? Number(x) : x
  const add = (x, y) => x + y

  it('should work as expected', () => {
    const lenientAdd = addPreprocessFn2(strOrNumToNum, add)

    lenientAdd(42, 1).should.equal(43)
    lenientAdd('42', 1).should.equal(43)
    lenientAdd(42, '1').should.equal(43)
    lenientAdd('42', '1').should.equal(43)
  })

  it('should be curried', () => {
    const allowStringNumInputs = addPreprocessFn2(strOrNumToNum)
    const mult = (x, y) => x * y
    const lenientMult = allowStringNumInputs(mult)
    lenientMult(42, '42').should.equal(1764)

    const lenientMult42 = addPreprocessFn2(strOrNumToNum, mult, '42')
    lenientMult42('42').should.equal(1764)

    const x = 42
    const y = '42'
    addPreprocessFn2(strOrNumToNum, add, x, y).should.equal(84)
  })
})
