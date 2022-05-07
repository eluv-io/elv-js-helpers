const {BasicModel} = require('objectmodel')

// noinspection JSValidateTypes
/**
 * An [ObjectModel](http://objectmodel.js.org/) which validates that an input
 * is a [Javascript Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
 *
 * If input passes validation, will return the input (proxied by ObjectModel)
 *
 * Throws an exception if passed in an invalid value.
 *
 * @class
 * @category Model
 * @sig * -> Date | THROW
 * @param {Any} - The input to validate
 * @returns {Date} The validated input, proxied by ObjectModel
 *
 * @example
 *
 * DatetimeModel(new Date) //=> current datetime (proxied by ObjectModel)
 *
 * DatetimeModel('foo')    //=> EXCEPTION: 'expecting Date, got String "foo"'
 *
 */
const DatetimeModel = BasicModel(Date).as('Javascript Date object')

module.exports=DatetimeModel
