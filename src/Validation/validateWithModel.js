const curry = require('../Functional/curry')
const {Ok, Err} = require('crocks/Result')
/**
 * An ObjectModel definition.
 * @external Model
 * @see http://objectmodel.js.org/
 */

/**
 * Validates `input` against a [Model](http://objectmodel.js.org/) and returns a
 * [Crocks Result](https://crocks.dev/docs/crocks/Result.html) instance. This returned instance will be an
 * [Ok](https://crocks.dev/docs/crocks/Result.html#ok) wrapping the input data if it passed the Model's validations,
 * or an [Err](https://crocks.dev/docs/crocks/Result.html#err) wrapping an array of validation error message strings.
 *
 * Function is curried, it can be called with just `Model` to return a validation function.
 *
 * @function
 * @curried
 * @category Validation
 * @sig Model -> (a -> Result [String] a)
 * @param {Model} Model - An ObjectModel definition to validate against
 * @param {*} input - The input to validate
 * @returns {function}
 * @example
 *
 * const PositiveNumModel = require('@eluvio/elv-js-helpers/Model/PositiveNumModel')
 *
 * const validateWithModel = require('@eluvio/elv-js-helpers/Validation/validateWithModel')
 *
 * validateWithModel(PositiveNumModel, 42)    //=> Ok 42
 *
 * validateWithModel(PositiveNumModel, 0)     //=> Err ['PositiveNumber: Value must be > 0 (got: 0)']
 *
 * validateWithModel(PositiveNumModel, 'foo') //=> Err ['PositiveNumber: expecting Number, got String "foo"']
 *
 * // function is curried, call with just 1 argument to return a more specific validation function
 * const validatePositiveNumber = validateWithModel(PositiveNumModel)
 *
 * validatePositiveNumber(42)         //=> Ok 42
 *
 * validatePositiveNumber(0)          //=> Err ['PositiveNumber: Value must be > 0 (got: 0)']
 *
 * validatePositiveNumber('foo')      //=> Err ['PositiveNumber: expecting Number, got String "foo"']
 *
 */
const validateWithModel = curry(
  (model, input) => {
    let foundErrors = []
    const errorCollector = errors => errors.forEach(
      e => foundErrors.push(
        // add toString() method to ObjectModel error to allow conversion
        // TODO: push upstream into objectmodel
        Object.assign(
          {
            toString: () => `${model.name}: ${e.message}`
          },
          e
        )
      )
    )
    // noinspection JSValidateTypes
    return model.test(input, errorCollector) ?
      Ok(input) :
      Err(foundErrors)
  }
)

module.exports = validateWithModel
