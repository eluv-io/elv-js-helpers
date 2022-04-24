const BoundedNumberModel = require('./BoundedNumberModel')

/**
 * An [ObjectModel](http://objectmodel.js.org/) which validates that an input is:
 *
 *  * A [Javascript Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
 *  * Is between zero and one, inclusive
 *
 * If input passes validations, will return the input (proxied by ObjectModel)
 *
 * Throws an exception if passed in an invalid value.
 *
 * @class
 * @since v0.0.1
 * @category Model
 * @sig * -> Number | THROW
 * @param {Any} - The input to validate
 * @returns {Number} The validated input, proxied by ObjectModel
 *
 * @example
 *
 * NumberZeroToOneModel(0) //=> 0
 *
 * NumberZeroToOneModel(1) //=> 1
 *
 * NumberZeroToOneModel(42) //=> EXCEPTION: 'Value must be >= 0 and <= 1 (got: 42)'
 *
 * NumberZeroToOneModel('foo') //=> EXCEPTION: 'expecting Number, got String "foo"'
 *
 */
const NumberZeroToOneModel = BoundedNumberModel('NumberZeroToOne', 0, 1, true, true)

module.exports = NumberZeroToOneModel
