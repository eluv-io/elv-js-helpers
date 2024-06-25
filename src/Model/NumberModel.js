const defBasicModel = require('../ModelFactory/defBasicModel')

// noinspection JSValidateTypes
/**
 * An [ObjectModel](http://objectmodel.js.org/) which validates that an input
 * is a [Javascript Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
 *
 * If input passes validation, will return the input.
 *
 * Throws an exception if passed in an invalid value. `Infinity` is accepted, but `NaN` is not.
 *
 * @class
 * @category Model
 * @sig * -> Number | THROW
 * @param {*} - The input to validate
 * @returns {Number} The validated input
 * @example
 *
 * const NumberModel = require('@eluvio/elv-js-helpers/Model/NumberModel')
 *
 * NumberModel(42)        //=> 42
 *
 * NumberModel('foo')     //=> EXCEPTION: 'expecting Number, got String "foo"'
 *
 * NumberModel(Infinity)  //=> Infinity
 *
 * NumberModel(-Infinity) //=> -Infinity
 *
 * // Error message for NaN is not the greatest:
 * NumberModel(NaN)      //=> EXCEPTION: 'expecting Number, got Number NaN'
 *
 */
const NumberModel = defBasicModel('Number', Number)

module.exports = NumberModel
