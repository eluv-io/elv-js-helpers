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
 * NonNegativeNumModel(42)    //=> 42
 *
 * NonNegativeNumModel(0)     //=> 0
 *
 * NonNegativeNumModel(-1)    //=> EXCEPTION: 'Value must be >= 0 (got: -1)'
 *
 * NonNegativeNumModel('foo') //=> EXCEPTION: 'expecting Number, got String "foo"'
 *
 */
const NonNegativeNumModel = defBoundedNumModel('NonNegativeNumber', 0, null, true, null)

module.exports = NonNegativeNumModel
