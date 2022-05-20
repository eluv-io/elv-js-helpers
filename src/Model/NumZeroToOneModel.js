const defBoundedNumModel = require('../ModelFactory/defBoundedNumModel')

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
 * @category Model
 * @sig * -> Number | THROW
 * @param {*} - The input to validate
 * @returns {Number} The validated input, proxied by ObjectModel
 * @example
 *
 * const NumZeroToOneModel = require('@eluvio/elv-js-helpers/Model/NumZeroToOneModel')
 *
 * NumZeroToOneModel(0)     //=> 0 (proxied by ObjectModel)
 *
 * NumZeroToOneModel(0.5)   //=> 0.5 (proxied by ObjectModel)
 *
 * NumZeroToOneModel(1)     //=> 1 (proxied by ObjectModel)
 *
 * NumZeroToOneModel(42)    //=> EXCEPTION: 'Value must be >= 0 and <= 1 (got: 42)'
 *
 * NumZeroToOneModel('foo') //=> EXCEPTION: 'expecting Number, got String "foo"'
 *
 */
const NumZeroToOneModel = defBoundedNumModel(
  'NumberZeroToOne',
  0,
  1,
  true,
  true
)

module.exports = NumZeroToOneModel
