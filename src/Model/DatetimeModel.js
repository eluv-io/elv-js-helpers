const defBasicModel = require('../ModelFactory/defBasicModel')

/**
 * An [ObjectModel](http://objectmodel.js.org/) which validates that an input
 * is a [Javascript Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
 *
 * If input passes validation, will return the input
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
 * // when validation succeeds, returns the input:
 * const testVal = new Date('2022-01-01T07:30:00Z')
 * const myDatetime = DatetimeModel(testVal)
 * myDatetime.valueOf()                             //=> 1641022200000
 *
 * DatetimeModel('foo')                             //=> EXCEPTION: 'expecting Date, got String "foo"'
 *
 */
const DatetimeModel = defBasicModel('Javascript Date object', Date)

module.exports=DatetimeModel
