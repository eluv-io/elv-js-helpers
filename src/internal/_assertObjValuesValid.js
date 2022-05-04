const isNil = require('ramda/src/isNil')
const T = require('ramda/src/T')

const _objBadValErrMsg = require('./_objBadValErrMsg')
const _satisfiesObjValCheck = require('./_satisfiesObjValCheck')

// assertObjectValuesValid :: ObjectModel -> [(a -> Boolean), String | (Object -> Object -> String)]
// Returns a pair [assertion function, failure message string or function] for use (via JavaScript spread syntax)
// in objectmodel .assert() call, e.g. .assert(...assertObjectValuesValid(PositiveIntegerModel))
// The resulting assertion will check that input is an object, then
// check that all the object's values return truthy values when passed to checkFn
const _assertObjectValuesValid = valueModel =>
  isNil(valueModel) ?
    [T, ''] : // no valueModel passed in, all values valid
    [
      _satisfiesObjValCheck(valueModel),
      _objBadValErrMsg(valueModel)
    ]

module.exports = _assertObjectValuesValid
