const defBasicModel = require('../ModelFactory/defBasicModel')

// noinspection JSValidateTypes
/**
 * An [ObjectModel](http://objectmodel.js.org/) which validates that an input
 * is a [Javascript Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
 *
 * If input passes validation, will return the input (proxied by ObjectModel)
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
 * const NumberModel = require('@eluvio/elv-js-helpers/Model/NumberModel')
 *
 * NumberModel(42)    //=> 42 (proxied by ObjectModel)
 *
 * NumberModel('foo') //=> EXCEPTION: 'expecting Number, got String "foo"'
 *
 * NumberModel(NaN) //=> EXCEPTION: 'expecting Number, got Number NaN'  // not the greatest error message :-P
 *
 */
const NumberModel = defBasicModel('Number', Number)

module.exports = NumberModel
