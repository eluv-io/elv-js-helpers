'use strict'
const {Any} = require('objectmodel')

const defBasicModel = require('../ModelFactory/defBasicModel')

/**
 * Passthrough for `Any` model from [ObjectModel](http://objectmodel.js.org/#doc-any-model)
 * _(Copyright © 2015 Sylvain Pollet-Villard, MIT license)_
 *
 * Used to define fields that can hold any type.
 *
 * @class
 * @category Model
 * @sig * -> *
 * @param {*} - Any input
 * @returns {*} The input
 * @example
 *
 * 'use strict'
 * const AnyModel = require('@eluvio/elv-js-helpers/Model/AnyModel')
 *
 * AnyModel([])         //=> []
 *
 * AnyModel(null)       //=> null
 *
 * AnyModel(undefined)  //=> undefined
 *
 * AnyModel([1])        //=> [1]
 *
 * AnyModel('')         //=> ''
 *
 * AnyModel(Math.round) //=> Math.round
 *
 */
const AnyModel = defBasicModel('Any', Any)

module.exports = AnyModel
