const curry = require('./curry')

const List = require('../ADT/List')

/**
 * Returns a new [Crocks](https://crocks.dev/docs/crocks/) List object with new element added to end
 *
 * @function
 * @curried
 * @category Functional
 * @sig List -> * -> List
 * @param {List} list - A Crocks List object
 * @param {*} element - The item to add to end of list
 * @returns {List} New Crocks List containing original list elements plus new element at end
 * @example
 *
 * const listPush = require('@eluvio/elv-js-helpers/Functional/listPush')
 *
 * const List = require('@eluvio/elv-js-helpers/ADT/List')
 *
 * listPush(List([1,2,3]), 4).inspect()    //=> 'List [ 1, 2, 3, 4 ]'
 *
 */
const listPush = curry(
  (list, element) => list.concat(List.of(element))
)

module.exports = listPush
