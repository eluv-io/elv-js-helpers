const _assertWithPrecheck = require('./internal/_assertWithPrecheck')

const NumberModel = require('./NumberModel')

/**
 * An [ObjectModel](http://objectmodel.js.org/) which validates that an input
 * is:
 *
 * * A [Javascript Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
 * * An integer
 *
 * If input passes validation, will return the input (proxied by ObjectModel)
 *
 * Throws an exception if passed in an invalid value.
 *
 * @class
 * @category Model
 * @sig * -> Integer | THROW
 * @param {Any} - The input to validate
 * @returns {Integer} The validated input, proxied by ObjectModel
 *
 * @example
 *
 * IntegerModel(42)    //=> 42 (proxied by ObjectModel)
 *
 * IntegerModel(4.2)   //=> EXCEPTION: 'Value must be an integer (got: 4.2)'
 *
 * IntegerModel('foo') //=> EXCEPTION: 'expecting Number, got String "foo"'
 *
 */
const IntegerModel = NumberModel
  .extend()
  .assert(
    ..._assertWithPrecheck(
      NumberModel,
      n => Number.isInteger(n),
      'must be an integer'
    )
  )
  .as('Integer')

module.exports = IntegerModel
