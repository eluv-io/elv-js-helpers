const _mergeDeepLeft = require('ramda/src/mergeDeepLeft')

const curry = require('./curry')

// Returns a new object with properties added/updated/replaced by merging another object.
// Original object's constructor used to process merged data.
// Used to preserve ObjectModel constraints on non-primitive models
const mergeDeepLeft = curry(
  (updates, originalObj) => originalObj.constructor(_mergeDeepLeft(updates, originalObj))
)

module.exports = mergeDeepLeft
