const curry = require('./curry')


// TODO - err if args is not array-like

const wrapApply = curry(
  (fn, args) => () => fn.apply(null, args)
)

module.exports = wrapApply
