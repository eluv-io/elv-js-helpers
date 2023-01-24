const isChain = require('crocks/core/isChain')
const isFunction = require('crocks/core/isFunction')

const kind = require('../Validation/kind')

/**
 * Renamed and modified version of the `pipeK()` [Crocks](https://crocks.dev/docs/functions/helpers.html#pipeK) function
 * _(Copyright © 2016, Ian Hofmann-Hicks, ISC license)_
 *
 * Allows composing functional workflows that would normally require use of `.chain()`.
 *
 * @function
 * @curried
 * @category Functional
 * @sig Chain m => ((a -> m b), ..., (y -> m z)) -> a -> m z
 * @param {...*} - Two or more chainable operations
 * @returns {ADT} A chainable ADT
 * @example
 *
 * const pipeChainable = require('@eluvio/elv-js-helpers/Functional/pipeChainable')
 *
 * // https://api.dictionaryapi.dev/api/v2/entries/en/aardvark
 * // https://oeis.org/search?q=id:A000040&fmt=json
 *
 */

function pipeChainable() {
  const head = arguments[0]
  let fns = [], len = arguments.length - 1
  while ( len-- > 0 ) fns[ len ] = arguments[ len + 1 ]

  if(!(arguments.length && isFunction(head))) {
    throw new TypeError('pipeChainable: first item is not a function')
  }

  if(arguments.length === 1) {
    return head
  }

  let tail = fns.reduce(function (comp, fn) {
    if(!isFunction(fn)) {
      throw new TypeError(`pipeChainable: expecting function, got ${kind(fn)} (${fn.type?.() || fn})`)
    }

    return function(m) {
      if(!isChain(m)) {
        throw new TypeError(`pipeChainable: expecting type that supports chain(), got ${kind(m)} (${m.type?.() || m})`)
      }
      return comp(m).chain(fn)
    }
  }, function (x) { return x })

  return function() {
    return tail(head.apply(null, arguments))
  }
}

module.exports = pipeChainable
