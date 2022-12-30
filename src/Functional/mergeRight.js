const _mergeRight = require('@eluvio/ramda-fork/src/mergeRight')

const curry = require('./curry')

// Returns a new object with properties added/updated/replaced by merging another object.
// Original object's constructor used to process merged data.
// Used to preserve ObjectModel constraints on non-primitive models
const mergeRight = curry(
  (originalObj, updates) => originalObj.constructor(_mergeRight(originalObj, updates))
)

module.exports = mergeRight
