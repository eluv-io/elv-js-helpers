const TH = require('../../../test-helpers')
const clone = TH.requireSrcFile('Functional/clone')

describe('clone', () => {

  it('should work as expected', () => {

    const defObjectModel = TH.requireSrcFile('ModelFactory/defObjectModel')
    const PersonNameModel = defObjectModel('PersonName', {first: String, last: String})
    const arthur = PersonNameModel({first: 'Arthur', last: 'Dent'})
    const arthurClone = clone(arthur)
    arthurClone.last = 'Clone'
    arthurClone.last.should.equal('Clone')
    arthur.last.should.equal('Dent')
    TH.expect(() => arthurClone.last = 3  ).to.throw('expecting last to be String, got Number 3')

    const list1 = [1]
    const listClone = clone(list1)
    list1.should.eql(listClone)

  })
})
