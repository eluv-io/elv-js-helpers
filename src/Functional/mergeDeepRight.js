const _mergeDeepRight = require('ramda/src/mergeDeepRight')

const curry = require('./curry')

// Returns a new object with properties added/updated/replaced by merging another object.
// Original object's constructor used to process merged data.
// Used to preserve ObjectModel constraints on non-primitive models
const mergeDeepRight = curry(
  (originalObj, updates) => originalObj.constructor(_mergeDeepRight(originalObj, updates))
)

module.exports = mergeDeepRight
