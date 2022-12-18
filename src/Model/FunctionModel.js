const defBasicModel = require('../ModelFactory/defBasicModel')

/**
 * Validates that an input is a function
 *
 * @class
 * @category Model
 * @sig * -> *
 * @param {*} - Any input
 * @returns {*} The input, proxied by ObjectModel
 * @example
 *
 * const FunctionModel = require('@eluvio/elv-js-helpers/Model/FunctionModel')
 *
 *
 */
const FunctionModel = defBasicModel('Function', Function)

module.exports = FunctionModel
