'use strict'
const _clone = require('@eluvio/ramda-fork/src/clone')
const isObject = require('../Boolean/isObject')
/**
 * Modified version of Ramda's `clone` function _(Copyright © Scott Sauyet and Michael Hurley)_
 *
 * Uses original item's constructor function when input is an object.
 *
 * Used to preserve ObjectModel constraints.
 *
 * @function
 * @category Functional
 * @sig * -> *
 * @param {(Object | Array)} x - the item to clone
 * @returns {(Object | Array)}
 * @example
 *
 * 'use strict'
 * const clone = require('@eluvio/elv-js-helpers/Functional/clone')
 *
 * const defObjectModel = require('@eluvio/elv-js-helpers/ModelFactory/defObjectModel')
 *
 * const PersonNameModel = defObjectModel('PersonName', {first: String, last: String})
 *
 * const arthur = PersonNameModel({first: 'Arthur', last:'Dent'})
 *
 * const arthurClone = clone(arthur)
 *
 * arthurClone.last = 'Clone'
 *
 * console.log(arthurClone.last)       //=> OUTPUT: 'Clone'
 *
 * console.log(arthur.last)            //=> OUTPUT: 'Dent'
 *
 * arthurClone.last = 3                //=> EXCEPTION: 'expecting last to be String, got Number 3'
 *
 */
const clone = x => isObject(x) ? x.constructor(_clone(x)) : _clone(x)

module.exports = clone
