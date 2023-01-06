const defBasicModel = require('../ModelFactory/defBasicModel')

// noinspection JSValidateTypes
/**
 * An [ObjectModel](http://objectmodel.js.org/) which validates that an input
 * is a [Javascript Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
 *
 * If input passes validation, will return the input.
 *
 * Throws an exception if passed in an invalid value.
 *
 * @class
 * @category Model
 * @sig * -> Object | THROW
 * @param {*} - The input to validate
 * @returns {Number} The validated input
 * @example
 *
 * const ObjectModel = require('@eluvio/elv-js-helpers/Model/ObjectModel')
 *
 * ObjectModel({foo: "bar"})    //=> {foo: "bar"}
 *
 * ObjectModel('foo') //=> EXCEPTION: 'expecting Object, got String "foo"'
 *
 */
const ObjectModel = defBasicModel('Object', Object)

module.exports = ObjectModel
