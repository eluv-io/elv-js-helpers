const defRegexMatchedStrModel = require('../ModelFactory/defRegexMatchedStrModel')

const REGEX_RATIONAL = require('../Validation/REGEX_RATIONAL')

/**
 * An [ObjectModel](http://objectmodel.js.org/) which validates that an input is:
 *
 *  * A [Javascript String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
 *  * Is in the form 'x/y', '-x/y', 'x', or '-x' where x and y are integers and y != 0
 *
 * Leading zeroes are allowed, e.g. '001/002'
 *
 * If input passes validations, will return the input (proxied by ObjectModel)
 *
 * Throws an exception if passed in an invalid value.
 *
 * @class
 * @category Model
 * @sig * -> String | THROW
 * @param {*} - The input to validate
 * @returns {String} The validated input, proxied by ObjectModel
 * @example
 *
 * const FractionStrModel = require('@eluvio/elv-js-helpers/Model/FractionStrModel')
 *
 * FractionStrModel('foo')  //=> EXCEPTION: 'Value must be a string in the form of a whole number or a fraction (got: "foo")'
 *
 * FractionStrModel('  ')   //=> EXCEPTION: 'Value must be a string in the form of a whole number or a fraction (got: "   ")'
 *
 * FractionStrModel(42)     //=> EXCEPTION: 'expecting String, got Number 42'
 *
 * FractionStrModel('42')   //=> '42' (proxied by ObjectModel)
 *
 * FractionStrModel('0')    //=> '0' (proxied by ObjectModel)
 *
 * FractionStrModel('-42')  //=> '-42' (proxied by ObjectModel)
 *
 * FractionStrModel('42/2') //=> '42/2' (proxied by ObjectModel)
 *
 * FractionStrModel('42/0') //=> EXCEPTION: 'Value must be a string in the form of a whole number or a fraction (got: "42/0")'
 *
 */
const FractionStrModel = defRegexMatchedStrModel(
  'FractionString',
  REGEX_RATIONAL,
  'must be a string in the form of a whole number or a fraction'
)

module.exports = FractionStrModel
