const defBasicModel = require('../ModelFactory/defBasicModel')

/**
 * Validates that an input is a function
 *
 * @class
 * @category Model
 * @sig * -> *
 * @param {*} - Any input
 * @returns {*} The input, proxied by ObjectModel
 *
 *
 */
const FunctionModel = defBasicModel('Function', Function)

module.exports = FunctionModel
