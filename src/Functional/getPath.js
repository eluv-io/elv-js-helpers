const getPathOr = require('crocks/helpers/getPathOr')

// Gets value at specified path from object, or `undefined` if not found.
//
// Similar to Ramda's path() but does not support negative indexes
//
const getPath = getPathOr(undefined)

module.exports = getPath
