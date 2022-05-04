const defBoundedIntModel = require('./defBoundedIntModel')

// PositiveIntegerModel :: a -> PositiveIntegerModel a | *exception*
// Returns either an ObjectModel containing a positive integer or throws an exception
/**
 * An [ObjectModel](http://objectmodel.js.org/) which validates that an input is:
 *
 *  * A [Javascript Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
 *  * An integer
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
 * PositiveIntegerModel(42)    //=> 42 // Proxied by ObjectModel
 *
 * PositiveIntegerModel(0)     //=> EXCEPTION: 'Value must be > 0 (got: 0)'
 *
 * PositiveIntegerModel(4.2)   //=> EXCEPTION: 'Value must be an integer (got: 4.2)'
 *
 * PositiveIntegerModel('foo') //=> EXCEPTION: 'expecting Number, got String "foo"'
 *
 */
const PositiveIntModel = defBoundedIntModel(
  'PositiveInteger',
  0,
  null,
  false,
  null
)

module.exports = PositiveIntModel
