const TH = require('../../../test-helpers')
const defSealedObjModel = TH.requireSrcFile('ModelFactory/defSealedObjModel')

describe('defSealedObjModel', () => {

  it('should work as expected', () => {
    const PersonNameModel = defSealedObjModel('PersonName', {first: String, last: String})
    // TH.expect(() => PersonNameModel(-1)).to.throw('expecting Object, got Number -1')
    // TH.expect(() => PersonNameModel(-1)).to.not.throw('expecting first to be String, got undefined')
    PersonNameModel({first: 'Arthur', last: 'Dent'}).should.eql({first: 'Arthur', last: 'Dent'})
    TH.expect(() => PersonNameModel({first: 'Arthur'})).to.throw('expecting last to be String, got undefined')
    TH.expect(() => PersonNameModel({
      first: 'A',
      last: 'D',
      species: 'human'
    })).to.throw('Unrecognized property name(s): species')

    TH.expect(() => {
      PersonNameModel.extend()
    }).to.throw('Sealed models cannot be extended')
    const arthur = PersonNameModel({first: 'Arthur', last: 'Dent'})
    TH.expect(() => arthur.species = 'human').to.throw('Unrecognized property name(s): species')

    const NameModel = defSealedObjModel(
      'NameModel',
      {
        first: String,
        last: String

      }
    )

    const NestedModel = defSealedObjModel(
      'NestedModel',
      {
        name: NameModel
      }
    )
    NestedModel({name: {first: 'Arthur', last: 'Dent'}}).should.eql({name: {first: 'Arthur', last: 'Dent'}})

    TH.expect(() => NestedModel({
      name: {
        first: 'Arthur',
        last: 'Dent',
        species: 'human'
      }
    })).to.throw('Unrecognized property name(s): species')


    const NestedModelWithOptional = defSealedObjModel(
      'NestedModel',
      {
        age: Number,
        name: [NameModel]
      }
    )
    NestedModelWithOptional(
      {
        age: 30,
        name: {
          first: 'Arthur',
          last: 'Dent'
        }
      }
    ).should.eql({age: 30, name: {first: 'Arthur', last: 'Dent'}})

    TH.expect(() => NestedModel({
      name: {
        first: 'Arthur',
        last: 'Dent',
        species: 'human'
      }
    })).to.throw('Unrecognized property name(s): species')


    // test unsealing the model, for test coverage
    const dent = NestedModel({name: {first: 'Arthur', last: 'Dent'}})
    NestedModel.sealed = false
    dent.species = 'human'
  })

  it('should work with optional nested property', () => {
    const PersonNameModel = defSealedObjModel(
      'PersonName',
      {
        first: String,
        last: [String]
      })

    const PersonModel = defSealedObjModel(
      'Person',
      {
        age: Number,
        name: [PersonNameModel]
      })

    PersonModel({age:30}).should.eql({age:30})

    PersonModel({age: 30, name: {first: 'Arthur', last: 'Dent'}}).should.eql({age: 30, name: {first: 'Arthur', last: 'Dent'}})

    TH.expect(() => PersonModel({
      name: {
        first: 'Arthur',
        last: 'Dent',
        species: 'human'
      }
    })).to.throw('Unrecognized property name(s): species')

    TH.expect(() => PersonModel({
      name: {
        first: 'Arthur',
        last: 'Dent',
        species: 'human'
      }
    })).to.throw('expecting age to be Number, got undefined')

    TH.expect(() => PersonModel({
      name: {
        first: 'Arthur',
        last: 'Dent'
      }
    })).to.throw('expecting age to be Number, got undefined')

    TH.expect(() => PersonModel('foo')).to.not.throw('Unrecognized')
  })
})
