const defBoundedIntModel = require('./defBoundedIntModel')

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
 * @category Model
 * @sig * -> * | THROW
 * @param {Any} - The input to validate
 * @returns {Integer} The validated input, proxied by ObjectModel
 *
 * @example
 *
 * NonNegativeIntModel(42)    //=> 42
 *
 * NonNegativeIntModel(0)     //=> 0
 *
 * NonNegativeIntModel(4.2)   //=> EXCEPTION: 'Value must be an integer (got: 4.2)'
 *
 * NonNegativeIntModel(-1)    //=> EXCEPTION: 'Value must be >= 0 (got: -1)'
 *
 * NonNegativeIntModel('foo') //=> EXCEPTION: 'expecting Number, got String "foo"'
 *
 */
const NonNegativeIntModel = defBoundedIntModel('NonNegativeInteger', 0, null, true, null)

module.exports = NonNegativeIntModel
