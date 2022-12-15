const {Any} = require('objectmodel')

/**
 * Passthrough for `Any` model from [ObjectModel](http://objectmodel.js.org/#doc-any-model)
 * _(Copyright © 2015 Sylvain Pollet-Villard, MIT license)_
 *
 * It is used to define fields that can hold any type.
 *
 * @class
 * @category Model
 * @sig * -> *
 * @param {*} - Any input
 * @returns {*} The input, proxied by ObjectModel
 * @example
 *
 * const AnyModel = require('@eluvio/elv-js-helpers/Model/AnyModel')
 *
 *
 */
const AnyModel = Any

module.exports = AnyModel
