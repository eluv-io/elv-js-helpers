const {Ok, Err} = require('crocks/Result')
/**
 * An ObjectModel definition.
 * @external Model
 * @see http://objectmodel.js.org/
 */

/**
 * Returns a function that will validate an input against a [Model](http://objectmodel.js.org/).
 * When the returned function is called with an input, it will return a [Crocks Result](https://crocks.dev/docs/crocks/Result.html)
 * instance. This returned instance will be an [Ok](https://crocks.dev/docs/crocks/Result.html#ok) wrapping the input
 * data if it passed the Model's validations, or an [Err](https://crocks.dev/docs/crocks/Result.html#err) wrapping
 * an array of validation error message strings.
 *
 * @function
 * @since v0.0.1
 * @category Validation
 * @sig Model -> (a -> Result [String] a)
 * @param {Model} model An ObjectModel definition to validate against
 * @returns {function}
 *
 * @example
 *
 * const PositiveNumModel = require('@eluvio/elv-js-helpers/PositiveNumModel')
 *
 * const validatePositiveNumber = validator(PositiveNumModel)
 *
 * validatePositiveNumber(42) //=> Ok 42
 *
 * validatePositiveNumber(0) //=> Err ['PositiveNumber: Value must be > 0 (got: 0)']
 *
 * validatePositiveNumber('foo') //=> Err ['PositiveNumber: expecting Number, got String "foo"']
 *
 */
const validator = model =>
  input => {
    let foundErrors = []
    const errorCollector = errors => errors.forEach(
      e => foundErrors.push(`${model.name}: ${e.message}`)
    )
    // noinspection JSValidateTypes
    return model.test(input, errorCollector) ?
      Ok(model(input)) :
      Err(foundErrors)
  }

module.exports = validator
