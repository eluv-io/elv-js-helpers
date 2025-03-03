'use strict'
const _throwIfArgsBad = require('./_throwIfArgsBad')
const callerFuncName = require('../Misc/callerFuncName')

/**
 * Throws an exception with the calling function's name if `args` object does not validate successfully.
 *
 * Meant to be used at the beginning of a function.
 *
 * Usually the function accepts named parameters (i.e. an object) and the validation will be checking an object.
 *
 * WARNING: must be called directly by the function in order to show calling function name correctly - do not pipe/compose.
 *
 * @function
 * @curried
 * @category Validation
 * @sig ObjectOrModel -> * -> undefined | THROW
 * @param {Object} modelOrObj - a Model or an Object that can be used as an ObjectModel spec
 * @param {*} args - the input to validate
 * @returns {Any}
 * @example
 *
 * 'use strict'
 * const throwIfArgsBad = require('@eluvio/elv-js-helpers/Validation/throwIfArgsBad')
 *
 * const defObjectModel = require('@eluvio/elv-js-helpers/ModelFactory/defObjectModel')
 * const NonNegativeIntModel = require('@eluvio/elv-js-helpers/Model/NonNegativeIntModel')
 *
 * const PersonModel = defObjectModel('Person', {first: String, last: String, age: NonNegativeIntModel})
 *
 * const getAge = person => {
 *   throwIfArgsBad(PersonModel, person)
 *   return person.age
 * }
 *
 * const validPerson = {first: 'Arthur', last: 'Dent', age: 30}
 * getAge(validPerson)                                          //=> 30
 *
 * const badData = {first: 'Arthur', last: 'Dent'}
 * getAge(badData)                                              //=> EXCEPTION: 'getAge() expecting age to be Number, got undefined'
 *
 * getAge(42)                                                   //=> EXCEPTION: 'getAge() expecting Object, got Number 42'
 *
 */
const throwIfArgsBad = (modelOrObj, args) => _throwIfArgsBad(callerFuncName(), modelOrObj, args)

module.exports = throwIfArgsBad
