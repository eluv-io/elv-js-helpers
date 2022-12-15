const unless = require('crocks/logic/unless')
const filter = require('ramda/src/filter')
const last = require('ramda/src/last')
const sort = require('ramda/src/sort')

const cmpIndexable = require('./cmpIndexable')
const curry = require('./curry')
const mapWithIndex = require('./mapWithIndex')
const pipe = require('./pipe')

const Pair = require('../ADT/Pair')

const findBest = curry(
  (sortKeyArrayFn, minSortKeyArray, iterable) =>
    pipe(
      mapWithIndex((e, i) => Pair(e, sortKeyArrayFn(e, i))), // convert to list of Pairs (element, sortKeyArrayForElement)
      filter(p => cmpIndexable(minSortKeyArray, p.snd()) <= 0), // filter by minSortKeyArray
      sort((p1, p2) => cmpIndexable(p1.snd(), p2.snd())), // sort any remaining Pairs by sortKeyArray
      last, // take the max (if any items remain)
      unless(x => x === undefined, i => i.fst()), // convert from Pair back to simple value (if it exists)
    )(iterable)
)

module.exports = findBest
//
// const f = (e, i) => [-Math.abs(5 - e), -i]
//
// const candidates = [0, 2, 4, 6, 8, 10]
//
// console.log(findBest(f, [], candidates))
