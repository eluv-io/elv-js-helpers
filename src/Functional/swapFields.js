const _swapFields = require('./_swapFields')
const curry = require('./curry')
const liftA3 = require('./liftA3')

const validatePropName = require('../Validation/validatePropName')

// Swaps values in two fields of an object wrapped in an Ok
// Returns a Result
// If fed an ObjectModel instance, will return wrapped plain javascript object with model constraints removed
const swapFields = curry (
  (fieldName1, fieldName2, wrappedObj) =>  liftA3(
    _swapFields,
    validatePropName(fieldName1),
    validatePropName(fieldName2),
    wrappedObj
  )
)

module.exports = swapFields
