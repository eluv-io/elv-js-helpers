const kindOf = require('kind-of')

const _objBadKey = require('./_objBadKey')

// _satisfiesObjKeyModel :: ObjectModel -> (Object -> Boolean)
// Returns false (failing validation) ONLY if x is an object AND x has a bad key (validator(keyModel) returns Err)
// Returns true if x is an object and all keys are good
// Returns true if x is not an object
//
// Used to short circuit key validation if a non-object is passed in.
const _satisfiesObjKeyCheck = keyCheckFn => x =>
  !(kindOf(x) === 'object' && _objBadKey(keyCheckFn, x) !== undefined)

module.exports = _satisfiesObjKeyCheck
