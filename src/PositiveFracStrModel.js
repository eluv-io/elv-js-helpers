const defBoundedFracStrModel = require('./defBoundedFracStrModel')

/**
 * An [ObjectModel](http://objectmodel.js.org/) which validates that an input is:
 *
 *  * A [Javascript String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
 *  * Is in the form 'x' or 'x/y' where x and y are positive integers
 *
 * If input passes validations, will return the input (proxied by ObjectModel)
 *
 * Throws an exception if passed in an invalid value.
 *
 * @class
 * @category Model
 * @sig * -> * | THROW
 * @param {*} - The input to validate
 * @returns {Number} The validated input, proxied by ObjectModel
 *
 * @example
 *
 * PositiveFracStrModel('42')    //=> '42' (proxied by ObjectModel)
 *
 * PositiveFracStrModel('0')     //=> EXCEPTION: 'Value must be > 0 (got: "0")'
 *
 * PositiveFracStrModel('42/2')  //=> '42/2' (proxied by ObjectModel)
 *
 * PositiveFracStrModel('foo')   //=> EXCEPTION: 'Value must be a string in the form of a whole number or a fraction (got: "foo")'
 *
 */
const PositiveFracStrModel = defBoundedFracStrModel(
  'PositiveFractionString',
  '0',
  null,
  false,
  null
)

module.exports = PositiveFracStrModel
