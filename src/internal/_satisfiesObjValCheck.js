const kindOf = require('kind-of')

const _objBadVal = require('./_objBadVal')

// isNotObjectWithBadValue :: (a -> Boolean) -> (Object -> Boolean)
// Returns false (failing validation) ONLY if x is an object AND x has a bad value (checkFn(value) is falsy)
// Returns true if x is an object and all values are good (checkFn(value) is truthy).
// Returns true if x is not an object
//
// Used to short circuit value validation if a non-object is passed in.
// Cannot use validateThenAssertTrue(ObjectModel, checkFn) due to idiosyncrasies of objectmodel's ObjectModel constructor
// (ObjectModel(undefined) is a valid call)
// Also this allows checkFn to be defined to check only a single value and not need to handle iteration
const _satisfiesObjValCheck = valueModel => x =>
  !(kindOf(x) === 'object' && _objBadVal(valueModel, x) !== undefined)

module.exports = _satisfiesObjValCheck
