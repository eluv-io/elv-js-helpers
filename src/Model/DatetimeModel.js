const defBasicModel = require('../ModelFactory/defBasicModel')

// noinspection JSValidateTypes
/**
 * An [ObjectModel](http://objectmodel.js.org/) which validates that an input
 * is a [Javascript Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
 *
 * If input passes Validation, will return the input (proxied by ObjectModel)
 *
 * Throws an exception if passed in an invalid value.
 *
 * @class
 * @category Model
 * @sig * -> Date | THROW
 * @param {*} - The input to validate
 * @returns {Date} The validated input, proxied by ObjectModel
 * @example
 *
 * const DatetimeModel = require('@eluvio/elv-js-helpers/Model/DatetimeModel')
 *
 * DatetimeModel(new Date) //=> current Datetime (proxied by ObjectModel)
 *
 * DatetimeModel('foo')    //=> EXCEPTION: 'expecting Date, got String "foo"'
 *
 */
const DatetimeModel = defBasicModel('Javascript Date object', Date)

module.exports=DatetimeModel
