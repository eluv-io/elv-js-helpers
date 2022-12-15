const isGeneratorFunction = require('../Boolean/isGeneratorFunction')

const permuterGenFn = (items1, items2, combineFn, filterFn) => {

  const _invokeIfGeneratorFunction = x => isGeneratorFunction(x) ? x() : x

  return function* () {
    for (const item1 of _invokeIfGeneratorFunction(items1)) {
      for (const item2 of _invokeIfGeneratorFunction(items2)) {
        const result = combineFn(item1, item2)
        if (!filterFn || filterFn(result)) yield result
      }
    }
  }
}

module.exports = permuterGenFn
