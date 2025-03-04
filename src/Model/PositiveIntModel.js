'use strict'
const defBoundedIntModel = require('../ModelFactory/defBoundedIntModel')

/**
 * An [ObjectModel](http://objectmodel.js.org/) which validates that an input is:
 *
 *  * A [Javascript Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
 *  * An integer
 *  * Greater than zero
 *
 * If input passes validations, will return the input
 *
 * Throws an exception if passed in an invalid value.
 *
 * @class
 * @category Model
 * @sig * -> * | THROW
 * @param {*} - The input to validate
 * @returns {Number} The validated input
 * @example
 *
 * 'use strict'
 * const PositiveIntModel = require('@eluvio/elv-js-helpers/Model/PositiveIntModel')
 *
 * PositiveIntModel(42)    //=> 42
 *
 * PositiveIntModel(0)     //=> EXCEPTION: 'Value must be > 0 (got: 0)'
 *
 * PositiveIntModel(4.2)   //=> EXCEPTION: 'Value must be an integer (got: 4.2)'
 *
 * PositiveIntModel('foo') //=> EXCEPTION: 'expecting Number, got String "foo"'
 *
 * PositiveIntModel(Infinity) //=> EXCEPTION: 'Value must be an integer (got: Infinity)'
 *
 * PositiveIntModel(-Infinity) //=> EXCEPTION: 'Value must be an integer (got: -Infinity)'
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
