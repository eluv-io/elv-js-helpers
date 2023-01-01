const TH = require('../../../test-helpers')
const defObjModel = TH.requireSrcFile('ModelFactory/defObjModel')

describe('defObjModel', () => {

  it('should work as expected', () => {
    const PersonNameModel = defObjModel('PersonName', {first: String, last: String})
    TH.expect(() => PersonNameModel(-1)).to.throw('expecting Object, got Number -1')
    TH.expect(() => PersonNameModel(-1)).to.not.throw('expecting first to be String, got undefined')
    TH.expect(() => PersonNameModel(null)).to.throw('expecting Object, got null')
    TH.expect(() => PersonNameModel(null)).to.not.throw('expecting first to be String, got undefined')

    PersonNameModel({first: 'Arthur', last: 'Dent'}).should.eql({first: 'Arthur', last: 'Dent'})
    TH.expect(() => PersonNameModel({first: 'Arthur'})).to.throw('expecting last to be String, got undefined')
    PersonNameModel({first: 'A', last: 'D', species: 'human'}).should.eql(
      {
        first: 'A',
        last: 'D',
        species: 'human'
      }
    )
  })
})
