'use strict'
const defBasicModel = require('../ModelFactory/defBasicModel')

/**
 * Validates that an input is a function
 *
 * @class
 * @category Model
 * @sig * -> *
 * @param {*} - Any input
 * @returns {*} The input
 *
 * @example
 *
 * 'use strict'
 * const FunctionModel = require('@eluvio/elv-js-helpers/Model/FunctionModel')
 *
 * FunctionModel(Math.round) //=> Math.round
 *
 * FunctionModel([])         //=> EXCEPTION: 'expecting Function, got Array []'
 *
 * FunctionModel(null)       //=> EXCEPTION: 'expecting Function, got null'
 *
 * FunctionModel(undefined)  //=> EXCEPTION: 'expecting Function, got undefined'
 *
 * FunctionModel([1])        //=> EXCEPTION: 'expecting Function, got Array [1]'
 *
 * FunctionModel('')         //=> EXCEPTION: 'expecting Function, got String ""'
 *
 */
const FunctionModel = defBasicModel('Function', Function)

module.exports = FunctionModel
