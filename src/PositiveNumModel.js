const defBoundedNumModel = require('./defBoundedNumModel')

/**
 * An [ObjectModel](http://objectmodel.js.org/) which validates that an input is:
 *
 *  * A [Javascript Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
 *  * Greater than zero
 *
 * If input passes validations, will return the input (proxied by ObjectModel)
 *
 * Throws an exception if passed in an invalid value.
 *
 * @class
 * @since v0.0.1
 * @category Model
 * @sig * -> * | THROW
 * @param {Any} - The input to validate
 * @returns {Number} The validated input, proxied by ObjectModel
 *
 * @example
 *
 * PositiveNumModel(42) //=> 42 // Proxied by ObjectModel
 *
 * PositiveNumModel(0) //=> EXCEPTION: 'Value must be > 0 (got: 0)'
 *
 * PositiveNumModel('foo') //=> EXCEPTION: 'expecting Number, got String "foo"'
 *
 */
const PositiveNumModel = defBoundedNumModel(
  'PositiveNumber',
  0,
  null,
  false,
  null
)

module.exports = PositiveNumModel
