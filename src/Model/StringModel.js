const defBasicModel = require('../ModelFactory/defBasicModel')

// noinspection JSValidateTypes
/**
 * An [ObjectModel](http://objectmodel.js.org/) which validates that an input
 * is a [Javascript String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
 *
 * If input passes validation, will return the input
 *
 * Throws an exception if passed in an invalid value.
 *
 * @class
 * @category Model
 * @sig * -> String | THROW
 * @param {*} - The input to validate
 * @returns {String} The validated input
 * @example
 *
 * const StringModel = require('@eluvio/elv-js-helpers/Model/StringModel')
 *
 * StringModel('foo') //=> 'foo'
 *
 * StringModel(42)    //=> EXCEPTION: 'expecting String, got Number 42'
 *
 */
const StringModel = defBasicModel('String', String)

module.exports = StringModel
