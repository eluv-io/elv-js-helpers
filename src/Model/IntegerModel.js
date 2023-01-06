const NumberModel = require('./NumberModel')

const passesModelCheck = require('../Boolean/passesModelCheck')

const assertAfterCheck = require('../ModelAssertion/assertAfterCheck')

/**
 * An [ObjectModel](http://objectmodel.js.org/) which validates that an input
 * is:
 *
 * * A [Javascript Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
 * * An integer
 *
 * If input passes validation, will return the input
 *
 * Throws an exception if passed in an invalid value.
 *
 * @class
 * @category Model
 * @sig * -> Integer | THROW
 * @param {*} - The input to validate
 * @returns {Integer} The validated input
 * @example
 *
 * const IntegerModel = require('@eluvio/elv-js-helpers/Model/IntegerModel')
 *
 * IntegerModel(42)    //=> 42
 *
 * IntegerModel(4.2)   //=> EXCEPTION: 'Value must be an integer (got: 4.2)'
 *
 * IntegerModel('foo') //=> EXCEPTION: 'expecting Number, got String "foo"'
 *
 */
const IntegerModel = NumberModel
  .extend()
  .assert(
    ...assertAfterCheck(
      passesModelCheck(NumberModel),
      n => Number.isInteger(n),
      'must be an integer'
    )
  )
  .as('Integer')

module.exports = IntegerModel
