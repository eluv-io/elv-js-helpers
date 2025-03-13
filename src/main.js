// This file is auto-generated by ./bin/buildMain.js

'use strict'
const ADT = {
  Async: require('./ADT/Async'),
  Err: require('./ADT/Err'),
  Just: require('./ADT/Just'),
  List: require('./ADT/List'),
  Nothing: require('./ADT/Nothing'),
  Ok: require('./ADT/Ok'),
  Pair: require('./ADT/Pair'),
  ReaderAsync: require('./ADT/ReaderAsync')
}

const Boolean = {
  conditionalCheck: require('./Boolean/conditionalCheck'),
  failsModelCheck: require('./Boolean/failsModelCheck'),
  hasNoDuplicates: require('./Boolean/hasNoDuplicates'),
  isArray: require('./Boolean/isArray'),
  isBase58String: require('./Boolean/isBase58String'),
  isEmpty: require('./Boolean/isEmpty'),
  isEqual: require('./Boolean/isEqual'),
  isEquivalent: require('./Boolean/isEquivalent'),
  isErr: require('./Boolean/isErr'),
  isFraction: require('./Boolean/isFraction'),
  isFunction: require('./Boolean/isFunction'),
  isGT: require('./Boolean/isGT'),
  isGTCustom: require('./Boolean/isGTCustom'),
  isGTE: require('./Boolean/isGTE'),
  isGeneratorFunction: require('./Boolean/isGeneratorFunction'),
  isLT: require('./Boolean/isLT'),
  isLTE: require('./Boolean/isLTE'),
  isModel: require('./Boolean/isModel'),
  isNil: require('./Boolean/isNil'),
  isNotEmpty: require('./Boolean/isNotEmpty'),
  isNull: require('./Boolean/isNull'),
  isNumber: require('./Boolean/isNumber'),
  isObject: require('./Boolean/isObject'),
  isOfKind: require('./Boolean/isOfKind'),
  isOk: require('./Boolean/isOk'),
  isRegExp: require('./Boolean/isRegExp'),
  isResult: require('./Boolean/isResult'),
  isString: require('./Boolean/isString'),
  isUndefined: require('./Boolean/isUndefined'),
  matchesRegex: require('./Boolean/matchesRegex'),
  neighborsPass: require('./Boolean/neighborsPass'),
  objHasKey: require('./Boolean/objHasKey'),
  passesModelCheck: require('./Boolean/passesModelCheck'),
  passesObjKeyCheck: require('./Boolean/passesObjKeyCheck'),
  passesObjValCheck: require('./Boolean/passesObjValCheck'),
  satisfiesBetweenBounds: require('./Boolean/satisfiesBetweenBounds'),
  satisfiesLowerBound: require('./Boolean/satisfiesLowerBound'),
  satisfiesUpperBound: require('./Boolean/satisfiesUpperBound'),
  throwsException: require('./Boolean/throwsException')
}

const Conversion = {
  REDACT_PATTERNS: require('./Conversion/REDACT_PATTERNS'),
  _strOrRegExSrc: require('./Conversion/_strOrRegExSrc'),
  base58Decode: require('./Conversion/base58Decode'),
  base58Encode: require('./Conversion/base58Encode'),
  boolsToInt: require('./Conversion/boolsToInt'),
  escapeForRegExp: require('./Conversion/escapeForRegExp'),
  format: require('./Conversion/format'),
  fracStrToNum: require('./Conversion/fracStrToNum'),
  fracToNum: require('./Conversion/fracToNum'),
  fraction: require('./Conversion/fraction'),
  fromPairs: require('./Conversion/fromPairs'),
  objFromEntries: require('./Conversion/objFromEntries'),
  objToEntries: require('./Conversion/objToEntries'),
  reFromTemplate: require('./Conversion/reFromTemplate'),
  redact: require('./Conversion/redact'),
  resultToPOJO: require('./Conversion/resultToPOJO'),
  resultUnwrap: require('./Conversion/resultUnwrap'),
  toPairs: require('./Conversion/toPairs'),
  wrapNonArray: require('./Conversion/wrapNonArray')
}

const Datetime = {
  RE_UTC_TIMESTAMP: require('./Datetime/RE_UTC_TIMESTAMP'),
  addSeconds: require('./Datetime/addSeconds'),
  estRemainingDur: require('./Datetime/estRemainingDur'),
  estTotalDur: require('./Datetime/estTotalDur'),
  etaDurStr: require('./Datetime/etaDurStr'),
  etaTimeStr: require('./Datetime/etaTimeStr'),
  now: require('./Datetime/now'),
  parseUTCStr: require('./Datetime/parseUTCStr'),
  sysLocale: require('./Datetime/sysLocale'),
  sysTimezone: require('./Datetime/sysTimezone'),
  toLocaleString: require('./Datetime/toLocaleString'),
  utcStrToDate: require('./Datetime/utcStrToDate')
}

const Functional = {
  F: require('./Functional/F'),
  T: require('./Functional/T'),
  _swapFields: require('./Functional/_swapFields'),
  addPreprocessFn2: require('./Functional/addPreprocessFn2'),
  all: require('./Functional/all'),
  and: require('./Functional/and'),
  assocComputed: require('./Functional/assocComputed'),
  asyncToPromise: require('./Functional/asyncToPromise'),
  chain: require('./Functional/chain'),
  clone: require('./Functional/clone'),
  cloneAssoc: require('./Functional/cloneAssoc'),
  cmpIndexable: require('./Functional/cmpIndexable'),
  comparator: require('./Functional/comparator'),
  compare: require('./Functional/compare'),
  compareFracStr: require('./Functional/compareFracStr'),
  constant: require('./Functional/constant'),
  curry: require('./Functional/curry'),
  either: require('./Functional/either'),
  filter: require('./Functional/filter'),
  filterKV: require('./Functional/filterKV'),
  find: require('./Functional/find'),
  findBest: require('./Functional/findBest'),
  flatten: require('./Functional/flatten'),
  flip: require('./Functional/flip'),
  getPath: require('./Functional/getPath'),
  getProp: require('./Functional/getProp'),
  groupBy: require('./Functional/groupBy'),
  head: require('./Functional/head'),
  identity: require('./Functional/identity'),
  ifElse: require('./Functional/ifElse'),
  immer: require('./Functional/immer'),
  init: require('./Functional/init'),
  last: require('./Functional/last'),
  length: require('./Functional/length'),
  lensProp: require('./Functional/lensProp'),
  liftA2: require('./Functional/liftA2'),
  liftA2Join: require('./Functional/liftA2Join'),
  liftA3: require('./Functional/liftA3'),
  liftA3Join: require('./Functional/liftA3Join'),
  listPush: require('./Functional/listPush'),
  map: require('./Functional/map'),
  mapObjKV: require('./Functional/mapObjKV'),
  mapObjKeys: require('./Functional/mapObjKeys'),
  mapObjValues: require('./Functional/mapObjValues'),
  mapWithIndex: require('./Functional/mapWithIndex'),
  max: require('./Functional/max'),
  mergeDeepLeft: require('./Functional/mergeDeepLeft'),
  mergeDeepRight: require('./Functional/mergeDeepRight'),
  mergeRight: require('./Functional/mergeRight'),
  mergeWith: require('./Functional/mergeWith'),
  negate: require('./Functional/negate'),
  objRefUUID: require('./Functional/objRefUUID'),
  omit: require('./Functional/omit'),
  or: require('./Functional/or'),
  over: require('./Functional/over'),
  permuterGenFn: require('./Functional/permuterGenFn'),
  pick: require('./Functional/pick'),
  pickBy: require('./Functional/pickBy'),
  pipe: require('./Functional/pipe'),
  pipeChainable: require('./Functional/pipeChainable'),
  pluck: require('./Functional/pluck'),
  reduce: require('./Functional/reduce'),
  resultToAsync: require('./Functional/resultToAsync'),
  reverse: require('./Functional/reverse'),
  setArity: require('./Functional/setArity'),
  setPath: require('./Functional/setPath'),
  sortBy: require('./Functional/sortBy'),
  swapFields: require('./Functional/swapFields'),
  tail: require('./Functional/tail'),
  tap: require('./Functional/tap'),
  times: require('./Functional/times'),
  truthTable: require('./Functional/truthTable'),
  tryCatch: require('./Functional/tryCatch'),
  uniq: require('./Functional/uniq'),
  view: require('./Functional/view'),
  when: require('./Functional/when'),
  wrapApply: require('./Functional/wrapApply')
}

const Math = {
  absRelChange: require('./Math/absRelChange'),
  growth: require('./Math/growth'),
  relChangeToMult: require('./Math/relChangeToMult'),
  roundEven: require('./Math/roundEven'),
  roundToMultiple: require('./Math/roundToMultiple'),
  roundToPrecision: require('./Math/roundToPrecision'),
  snapRelative: require('./Math/snapRelative')
}

const Misc = {
  callerFuncName: require('./Misc/callerFuncName'),
  currentFuncName: require('./Misc/currentFuncName'),
  dumpJSON: require('./Misc/dumpJSON'),
  pause: require('./Misc/pause'),
  throwError: require('./Misc/throwError'),
  uuid: require('./Misc/uuid')
}

const Model = {
  AnyModel: require('./Model/AnyModel'),
  Base58StrModel: require('./Model/Base58StrModel'),
  DatetimeModel: require('./Model/DatetimeModel'),
  EmptyArrModel: require('./Model/EmptyArrModel'),
  FractionStrModel: require('./Model/FractionStrModel'),
  FunctionModel: require('./Model/FunctionModel'),
  IntegerModel: require('./Model/IntegerModel'),
  LoggerModel: require('./Model/LoggerModel'),
  NonBlankStrModel: require('./Model/NonBlankStrModel'),
  NonEmptyArrModel: require('./Model/NonEmptyArrModel'),
  NonNegativeIntModel: require('./Model/NonNegativeIntModel'),
  NonNegativeNumModel: require('./Model/NonNegativeNumModel'),
  NumZeroToOneModel: require('./Model/NumZeroToOneModel'),
  NumZeroToOneXModel: require('./Model/NumZeroToOneXModel'),
  NumberModel: require('./Model/NumberModel'),
  ObjectModel: require('./Model/ObjectModel'),
  PositiveFracStrModel: require('./Model/PositiveFracStrModel'),
  PositiveIntModel: require('./Model/PositiveIntModel'),
  PositiveNumModel: require('./Model/PositiveNumModel'),
  StringModel: require('./Model/StringModel'),
  UTCStrModel: require('./Model/UTCStrModel'),
  UUIDStrLowerModel: require('./Model/UUIDStrLowerModel'),
  UUIDStrModel: require('./Model/UUIDStrModel'),
  UUIDStrUpperModel: require('./Model/UUIDStrUpperModel')
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
  assertEmpty: require('./ModelAssertion/assertEmpty'),
  assertMatchesRegex: require('./ModelAssertion/assertMatchesRegex'),
  assertNeighborsPass: require('./ModelAssertion/assertNeighborsPass'),
  assertNotEmpty: require('./ModelAssertion/assertNotEmpty'),
  assertNothing: require('./ModelAssertion/assertNothing'),
  assertObjKeysValid: require('./ModelAssertion/assertObjKeysValid'),
  assertObjValuesValid: require('./ModelAssertion/assertObjValuesValid'),
  assertOrdered: require('./ModelAssertion/assertOrdered'),
  assertPropMaxGTEMin: require('./ModelAssertion/assertPropMaxGTEMin'),
  assertPropRel: require('./ModelAssertion/assertPropRel'),
  assertValidUTCStr: require('./ModelAssertion/assertValidUTCStr'),
  assertionErrMsg: require('./ModelAssertion/assertionErrMsg')
}

const ModelFactory = {
  defArrayModel: require('./ModelFactory/defArrayModel'),
  defBasicModel: require('./ModelFactory/defBasicModel'),
  defBoundedFracStrModel: require('./ModelFactory/defBoundedFracStrModel'),
  defBoundedIntModel: require('./ModelFactory/defBoundedIntModel'),
  defBoundedNumModel: require('./ModelFactory/defBoundedNumModel'),
  defNonEmptyArrModel: require('./ModelFactory/defNonEmptyArrModel'),
  defNonEmptyTypedKVObjModel: require('./ModelFactory/defNonEmptyTypedKVObjModel'),
  defObjectModel: require('./ModelFactory/defObjectModel'),
  defRegexMatchedStrModel: require('./ModelFactory/defRegexMatchedStrModel'),
  defSealedObjModel: require('./ModelFactory/defSealedObjModel'),
  defTypedKVObjModel: require('./ModelFactory/defTypedKVObjModel')
}

const Validation = {
  RE_BASE58_CHAR: require('./Validation/RE_BASE58_CHAR'),
  RE_RATIONAL: require('./Validation/RE_RATIONAL'),
  RE_UUID: require('./Validation/RE_UUID'),
  RE_UUID_LOWER_CASE: require('./Validation/RE_UUID_LOWER_CASE'),
  RE_UUID_UPPER_CASE: require('./Validation/RE_UUID_UPPER_CASE'),
  _throwIfArgsBad: require('./Validation/_throwIfArgsBad'),
  _throwIfNotErr: require('./Validation/_throwIfNotErr'),
  _throwIfNotResult: require('./Validation/_throwIfNotResult'),
  _typeWithOkErr: require('./Validation/_typeWithOkErr'),
  kind: require('./Validation/kind'),
  objBadKey: require('./Validation/objBadKey'),
  objBadVal: require('./Validation/objBadVal'),
  throwIfArgsBad: require('./Validation/throwIfArgsBad'),
  throwIfFalse: require('./Validation/throwIfFalse'),
  throwIfTrue: require('./Validation/throwIfTrue'),
  throwIfUndefined: require('./Validation/throwIfUndefined'),
  validateArgs: require('./Validation/validateArgs'),
  validatePropName: require('./Validation/validatePropName'),
  validateWithFn: require('./Validation/validateWithFn'),
  validateWithModel: require('./Validation/validateWithModel')
}

module.exports = {
  ADT,
  Boolean,
  Conversion,
  Datetime,
  Functional,
  Math,
  Misc,
  Model,
  ModelAssertion,
  ModelFactory,
  Validation
}
