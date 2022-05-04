const isNil = require('ramda/src/isNil')
const T = require('ramda/src/T')

const _objBadKeyErrMsg = require('./_objBadKeyErrMsg')
const _satisfiesObjKeyCheck = require('./_satisfiesObjKeyCheck')

// assertObjectKeysValid :: ObjectModel -> [(a -> Boolean), String | (Object -> Object -> String)]
// Returns a pair [assertion function, failure message string or function] for use (via JavaScript spread syntax)
// in objectmodel .assert() call, e.g. .assert(...assertObjectKeysValid(StringModel))
// The resulting assertion will check that input is an object, then
// check that all the object's keys return true values when passed to isValid(keyModel)
const _assertObjKeysValid = keyModel =>
  isNil(keyModel) ?
    [T, ''] : // no keyModel passed in, all keys valid
    [
      _satisfiesObjKeyCheck(keyModel),
      _objBadKeyErrMsg(keyModel)
    ]

module.exports = _assertObjKeysValid
