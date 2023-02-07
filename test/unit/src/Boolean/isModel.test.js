const TH = require('../../../test-helpers')
const isModel = TH.requireSrcFile('Boolean/isModel')

const AnyModel = TH.requireSrcFile('Model/AnyModel')
const Base58StrModel = TH.requireSrcFile('Model/Base58StrModel')
const DatetimeModel = TH.requireSrcFile('Model/DatetimeModel')
const EmptyArrModel = TH.requireSrcFile('Model/EmptyArrModel')
const FractionStrModel = TH.requireSrcFile('Model/FractionStrModel')
const FunctionModel = TH.requireSrcFile('Model/FunctionModel')
const IntegerModel = TH.requireSrcFile('Model/IntegerModel')
const LoggerModel = TH.requireSrcFile('Model/LoggerModel')
const NonBlankStrModel = TH.requireSrcFile('Model/NonBlankStrModel')
const NonEmptyArrModel = TH.requireSrcFile('Model/NonEmptyArrModel')
const NonNegativeIntModel = TH.requireSrcFile('Model/NonNegativeIntModel')
const NonNegativeNumModel = TH.requireSrcFile('Model/NonNegativeNumModel')
const NumberModel = TH.requireSrcFile('Model/NumberModel')
const NumZeroToOneModel = TH.requireSrcFile('Model/NumZeroToOneModel')
const NumZeroToOneXModel = TH.requireSrcFile('Model/NumZeroToOneXModel')
const ObjectModel = TH.requireSrcFile('Model/ObjectModel')
const PositiveFracStrModel = TH.requireSrcFile('Model/PositiveFracStrModel')
const PositiveIntModel = TH.requireSrcFile('Model/PositiveIntModel')
const PositiveNumModel = TH.requireSrcFile('Model/PositiveNumModel')
const StringModel = TH.requireSrcFile('Model/StringModel')
const UTCStrModel = TH.requireSrcFile('Model/UTCStrModel')

const defArrayModel = TH.requireSrcFile('ModelFactory/defArrayModel')
const defBasicModel = TH.requireSrcFile('ModelFactory/defBasicModel')
const defBoundedFracStrModel = TH.requireSrcFile('ModelFactory/defBoundedFracStrModel')
const defBoundedIntModel = TH.requireSrcFile('ModelFactory/defBoundedIntModel')
const defBoundedNumModel = TH.requireSrcFile('ModelFactory/defBoundedNumModel')
const defNonEmptyArrModel = TH.requireSrcFile('ModelFactory/defNonEmptyArrModel')
const defNonEmptyTypedKVObjModel = TH.requireSrcFile('ModelFactory/defNonEmptyTypedKVObjModel')
const defObjectModel = TH.requireSrcFile('ModelFactory/defObjectModel')
const defRegexMatchedStrModel = TH.requireSrcFile('ModelFactory/defRegexMatchedStrModel')
const defSealedObjModel = TH.requireSrcFile('ModelFactory/defSealedObjModel')
const defTypedKVObjModel = TH.requireSrcFile('ModelFactory/defTypedKVObjModel')

describe('isModel', () => {

  it('should work as expected', () => {
    isModel(undefined).should.be.false
    isModel(null).should.be.false
    isModel(true).should.be.false
    isModel(Buffer.from(' ')).should.be.false
    isModel(42).should.be.false
    isModel('str').should.be.false
    isModel(arguments).should.be.false
    isModel({}).should.be.false
    isModel(Object.create(null)).should.be.false
    isModel(new Date()).should.be.false
    isModel([1, 2, 3]).should.be.false
    isModel(/foo/).should.be.false
    isModel(new Error('error')).should.be.false
    isModel(function () {}).should.be.false
    isModel(function* () {}).should.be.false
    isModel(Symbol('str')).should.be.false
    isModel(new Map()).should.be.false
    isModel(new WeakMap()).should.be.false
    isModel(new Set()).should.be.false
    isModel(new WeakSet()).should.be.false
    isModel(new Int8Array()).should.be.false
    isModel(new Uint8Array()).should.be.false
    isModel(new Uint8ClampedArray()).should.be.false
    isModel(new Int16Array()).should.be.false
    isModel(new Uint16Array()).should.be.false
    isModel(new Int32Array()).should.be.false
    isModel(new Uint32Array()).should.be.false
    isModel(new Float32Array()).should.be.false
    isModel(new Float64Array()).should.be.false

    isModel(AnyModel).should.be.true
    isModel(Base58StrModel).should.be.true
    isModel(DatetimeModel).should.be.true
    isModel(EmptyArrModel).should.be.true
    isModel(FractionStrModel).should.be.true
    isModel(FunctionModel).should.be.true
    isModel(IntegerModel).should.be.true
    isModel(LoggerModel).should.be.true
    isModel(NonBlankStrModel).should.be.true
    isModel(NonEmptyArrModel).should.be.true
    isModel(NonNegativeIntModel).should.be.true
    isModel(NonNegativeNumModel).should.be.true
    isModel(NumberModel).should.be.true
    isModel(NumZeroToOneModel).should.be.true
    isModel(NumZeroToOneXModel).should.be.true
    isModel(ObjectModel).should.be.true
    isModel(PositiveFracStrModel).should.be.true
    isModel(PositiveIntModel).should.be.true
    isModel(PositiveNumModel).should.be.true
    isModel(StringModel).should.be.true
    isModel(UTCStrModel).should.be.true

    isModel(defArrayModel).should.be.false
    isModel(defBasicModel).should.be.false
    isModel(defBoundedFracStrModel).should.be.false
    isModel(defBoundedIntModel).should.be.false
    isModel(defBoundedNumModel).should.be.false
    isModel(defNonEmptyArrModel).should.be.false
    isModel(defNonEmptyTypedKVObjModel).should.be.false
    isModel(defObjectModel).should.be.false
    isModel(defRegexMatchedStrModel).should.be.false
    isModel(defSealedObjModel).should.be.false
    isModel(defTypedKVObjModel).should.be.false

    isModel(defArrayModel('AgeArray', NonNegativeNumModel)).should.be.true
    isModel(defBasicModel('String', String)).should.be.true
    isModel(defBoundedFracStrModel(
      'FractionZeroToOne',
      '0',
      '1',
      true,
      true
    )).should.be.true
    isModel(defBoundedIntModel('CartonEggCount', 0, 12, true, true)).should.be.true
    isModel(defBoundedNumModel('HumanHeightMeters', 0, 3, false, true)).should.be.true
    isModel(defNonEmptyArrModel('NonEmptyAgeArray', NonNegativeNumModel)).should.be.true
    isModel(defNonEmptyTypedKVObjModel(
      'NonEmptyNonBlankKV',
      NonBlankStrModel,
      NonBlankStrModel
    )).should.be.true
    isModel(defObjectModel('PersonName', {first: String, last: String})).should.be.true
    isModel(defRegexMatchedStrModel(
      'UUIDString',
      /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/)
    ).should.be.true
    isModel(defSealedObjModel('PersonName', {first: String, last: String})).should.be.true
    isModel(defTypedKVObjModel(
      'NonBlankKV',
      NonBlankStrModel,
      NonBlankStrModel
    )).should.be.true

  })

})
