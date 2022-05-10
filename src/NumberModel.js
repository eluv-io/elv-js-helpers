const {BasicModel} = require('objectmodel')

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
 * @param {Any} - The input to validate
 * @returns {Number} The validated input, proxied by ObjectModel
 *
 * @example
 *
 * NumberModel(42)    //=> 42 (proxied by ObjectModel)
 *
 * NumberModel('foo') //=> EXCEPTION: 'expecting Number, got String "foo"'
 *
 * NumberModel(NaN) //=> EXCEPTION: 'expecting Number, got Number NaN'  // not the greatest error message :-P
 *
 */
const NumberModel = BasicModel(Number).as('Number')

module.exports = NumberModel
