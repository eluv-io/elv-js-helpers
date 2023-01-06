const _clone = require('@eluvio/ramda-fork/src/clone')
const isObject = require('../Boolean/isObject')
/**
 * Modified version of Ramda's `clone` function _(Copyright © 2013-2020 Scott Sauyet and Michael Hurley)_
 *
 * Uses original item's constructor function to process cloned values.
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
 * const clone = require('@eluvio/elv-js-helpers/Functional/clone')
 *
 * const defObjModel = require('@eluvio/elv-js-helpers/ModelFactory/defObjModel')
 *
 * const PersonNameModel = defObjModel('PersonName', {first: String, last: String})
 *
 * const arthur = PersonNameModel({first: 'Arthur', last:'Dent'})
 *
 * const arthurClone = clone(arthur)
 *
 * arthurClone.last = 'Clone'
 *
 * console.log(arthurClone.last)       //=> Clone
 *
 * console.log(arthur.last)            //=> Dent
 *
 * arthurClone.last = 3                //=> EXCEPTION: 'expecting last to be String, got Number 3'
 *
 */
const clone = x => isObject(x) ? x.constructor(_clone(x)) : _clone(x)

module.exports = clone
