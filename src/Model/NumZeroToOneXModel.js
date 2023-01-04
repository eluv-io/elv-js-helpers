const defBoundedNumModel = require('../ModelFactory/defBoundedNumModel')

/**
 * An [ObjectModel](http://objectmodel.js.org/) which validates that an input is:
 *
 *  * A [Javascript Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
 *  * Is greater than or equal to zero, and less than one
 *
 * If input passes validations, will return the input
 *
 * Throws an exception if passed in an invalid value.
 *
 * @class
 * @category Model
 * @sig * -> Number | THROW
 * @param {*} - The input to validate
 * @returns {Number} The validated input, proxied by ObjectModel
 * @example
 *
 * const NumZeroToOneXModel = require('@eluvio/elv-js-helpers/Model/NumZeroToOneXModel')
 *
 * NumZeroToOneXModel(0)     //=> 0
 *
 * NumZeroToOneXModel(0.5)   //=> 0.5
 *
 * NumZeroToOneXModel(1)     //=> EXCEPTION: 'Value must be >= 0 and < 1 (got: 1)'
 *
 * NumZeroToOneXModel(42)    //=> EXCEPTION: 'Value must be >= 0 and < 1 (got: 42)'
 *
 * NumZeroToOneXModel('foo') //=> EXCEPTION: 'expecting Number, got String "foo"'
 *
 */
const NumZeroToOneXModel = defBoundedNumModel(
  'NumberZeroToOne',
  0,
  1,
  true,
  false
)

module.exports = NumZeroToOneXModel
