const curry = require('./curry')
const mergeDeepRight= require('./mergeDeepRight')

// Returns a new object with properties added/updated/replaced by merging another object.
// Original object's constructor used to process merged data.
// Used to preserve ObjectModel constraints on non-primitive models
const mergeDeepLeft = curry(
  (updates, originalObj) => mergeDeepRight(originalObj, updates)
)

// Note that above could be defined more succinctly as `const mergeDeepLeft = flip(mergeDeepRight)`
// but then `mergeDeepLeft` would never appear in stack traces. Longer form used for easier debugging.

module.exports = mergeDeepLeft
