const curry = require('./curry')
const mergeDeepRight = require('./mergeDeepRight')

// Like Ramda's assoc, returns a copy of object with property in an object set to a specified value.
// Unlike Ramda, returns a deep clone of object rather than a shallow clone.
// Also preserves ObjectModel constraints, and checks constraints before returning.
const cloneAssoc = curry(
  (prop, value, obj) => mergeDeepRight(obj, {[prop]: value})
)

module.exports = cloneAssoc
