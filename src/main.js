const ADT = {
  Err: require('./ADT/Err'),
  List: require('./ADT/List'),
  Ok: require('./ADT/Ok'),
  Pair: require('./ADT/Pair')
}

const Boolean = {
  isArray: require('./Boolean/isArray'),
  isErr: require('./Boolean/isErr'),
  isFunction: require('./Boolean/isFunction'),
  isGT: require('./Boolean/isGT'),
  isGTCustom: require('./Boolean/isGTCustom'),
  isNull: require('./Boolean/isNull'),
  isObject: require('./Boolean/isObject'),
  isOfKind: require('./Boolean/isOfKind'),
  isOk: require('./Boolean/isOk'),
  isResult: require('./Boolean/isResult'),
  isString: require('./Boolean/isString'),
  passesModelCheck: require('./Boolean/passesModelCheck'),
  passesObjKeyCheck: require('./Boolean/passesObjKeyCheck'),
  passesObjValCheck: require('./Boolean/passesObjValCheck'),
  passesPairwiseCheck: require('./Boolean/passesPairwiseCheck'),
  satisfiesBetweenBounds: require('./Boolean/satisfiesBetweenBounds'),
  satisfiesLowerBound: require('./Boolean/satisfiesLowerBound'),
  satisfiesUpperBound: require('./Boolean/satisfiesUpperBound')
}

const Conversion = {
  boolsToInt: require('./Conversion/boolsToInt'),
  format: require('./Conversion/format'),
  fraction: require('./Conversion/fraction'),
  fromPairs: require('./Conversion/fromPairs'),
  resultToPOJO: require('./Conversion/resultToPOJO'),
  resultUnwrap: require('./Conversion/resultUnwrap'),
  toPairs: require('./Conversion/toPairs'),
  wrapNonArray: require('./Conversion/wrapNonArray')
}

const Datetime = {
  addSeconds: require('./Datetime/addSeconds'),
  estRemainingDur: require('./Datetime/estRemainingDur'),
  estTotalDur: require('./Datetime/estTotalDur'),
  etaDurStr: require('./Datetime/etaDurStr'),
  etaTimeStr: require('./Datetime/etaTimeStr'),
  sysLocale: require('./Datetime/sysLocale'),
  sysTimezone: require('./Datetime/sysTimezone'),
  toLocaleString: require('./Datetime/toLocaleString'),
  utcStrToDate: require('./Datetime/utcStrToDate')
}

const Functional = {
  addPreproccessFn2: require('./Functional/addPreproccessFn2'),
  assocComputed: require('./Functional/assocComputed'),
  chain: require('./Functional/chain'),
  checkOnlyIf: require('./Functional/checkOnlyIf'),
  compare: require('./Functional/compare'),
  compareFracStr: require('./Functional/compareFracStr'),
  constant: require('./Functional/constant'),
  curry: require('./Functional/curry'),
  flip: require('./Functional/flip'),
  liftA2: require('./Functional/liftA2'),
  liftA2Join: require('./Functional/liftA2Join'),
  liftA3: require('./Functional/liftA3'),
  listPush: require('./Functional/listPush'),
  map: require('./Functional/map'),
  mapWithIndex: require('./Functional/mapWithIndex'),
  pipe: require('./Functional/pipe'),
  truthTable: require('./Functional/truthTable')
}

const Misc = {
  dumpJSON: require('./Misc/dumpJSON'),
  throwError: require('./Misc/throwError')
}

const Model = {
  DatetimeModel: require('./Model/DatetimeModel'),
  FractionStrModel: require('./Model/FractionStrModel'),
  IntegerModel: require('./Model/IntegerModel'),
  NonBlankStrModel: require('./Model/NonBlankStrModel'),
  NonNegativeIntModel: require('./Model/NonNegativeIntModel'),
  NonNegativeNumModel: require('./Model/NonNegativeNumModel'),
  NumZeroToOneModel: require('./Model/NumZeroToOneModel'),
  NumZeroToOneXModel: require('./Model/NumZeroToOneXModel'),
  NumberModel: require('./Model/NumberModel'),
  PositiveFracStrModel: require('./Model/PositiveFracStrModel'),
  PositiveIntModel: require('./Model/PositiveIntModel'),
  PositiveNumModel: require('./Model/PositiveNumModel'),
  StringModel: require('./Model/StringModel'),
  UTCStrModel: require('./Model/UTCStrModel')
}

const ModelAssertion = {
  _boundBetweenErrMsg: require('./ModelAssertion/_boundBetweenErrMsg'),
  _boundLowerErrMsg: require('./ModelAssertion/_boundLowerErrMsg'),
  _boundUpperErrMsg: require('./ModelAssertion/_boundUpperErrMsg'),
  _objBadKeyErrMsg: require('./ModelAssertion/_objBadKeyErrMsg'),
  _objBadValErrMsg: require('./ModelAssertion/_objBadValErrMsg'),
  assertAfterCheck: require('./ModelAssertion/assertAfterCheck'),
  assertBounded: require('./ModelAssertion/assertBounded'),
  assertBoundedBetween: require('./ModelAssertion/assertBoundedBetween'),
  assertBoundedLower: require('./ModelAssertion/assertBoundedLower'),
  assertBoundedUpper: require('./ModelAssertion/assertBoundedUpper'),
  assertMatchesRegex: require('./ModelAssertion/assertMatchesRegex'),
  assertNotEmpty: require('./ModelAssertion/assertNotEmpty'),
  assertNothing: require('./ModelAssertion/assertNothing'),
  assertObjKeysValid: require('./ModelAssertion/assertObjKeysValid'),
  assertObjValuesValid: require('./ModelAssertion/assertObjValuesValid'),
  assertOrdered: require('./ModelAssertion/assertOrdered'),
  assertPropRel: require('./ModelAssertion/assertPropRel'),
  assertValidUTCStr: require('./ModelAssertion/assertValidUTCStr'),
  assertionErrMsg: require('./ModelAssertion/assertionErrMsg')
}

const ModelFactory = {
  defArrModel: require('./ModelFactory/defArrModel'),
  defBasicModel: require('./ModelFactory/defBasicModel'),
  defBoundedFracStrModel: require('./ModelFactory/defBoundedFracStrModel'),
  defBoundedIntModel: require('./ModelFactory/defBoundedIntModel'),
  defBoundedNumModel: require('./ModelFactory/defBoundedNumModel'),
  defCheckedKVObjModel: require('./ModelFactory/defCheckedKVObjModel'),
  defNonEmptyArrModel: require('./ModelFactory/defNonEmptyArrModel'),
  defObjModel: require('./ModelFactory/defObjModel'),
  defRegexMatchedStrModel: require('./ModelFactory/defRegexMatchedStrModel'),
  defSealedObjModel: require('./ModelFactory/defSealedObjModel')
}

const Validation = {
  _throwIfErrNotArray: require('./Validation/_throwIfErrNotArray'),
  _throwIfNotErr: require('./Validation/_throwIfNotErr'),
  _throwIfNotResult: require('./Validation/_throwIfNotResult'),
  _typeWithOkErr: require('./Validation/_typeWithOkErr'),
  kindOf: require('./Validation/kindOf'),
  objBadKey: require('./Validation/objBadKey'),
  objBadVal: require('./Validation/objBadVal'),
  throwIfFalse: require('./Validation/throwIfFalse'),
  throwIfTrue: require('./Validation/throwIfTrue'),
  validator: require('./Validation/validator')
}

module.exports = {
  ADT,
  Boolean,
  Conversion,
  Datetime,
  Functional,
  Misc,
  Model,
  ModelAssertion,
  ModelFactory,
  Validation
}
