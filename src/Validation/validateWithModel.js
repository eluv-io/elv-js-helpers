'use strict'
const Err = require('../ADT/Err')
const Ok = require('../ADT/Ok')

const curry = require('../Functional/curry')
/**
 * An ObjectModel definition.
 * @external Model
 * @see http://objectmodel.js.org/
 */

/**
 * Validates `input` against a [Model](http://objectmodel.js.org/) and returns a
 * [Crocks Result](https://crocks.dev/docs/crocks/Result.html) instance. This returned instance will be an
 * [Ok](https://crocks.dev/docs/crocks/Result.html#ok) wrapping the input data if it passed the Model's validations,
 * or an [Err](https://crocks.dev/docs/crocks/Result.html#err) wrapping an array of validation errors.
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
 * 'use strict'
 * const validateWithModel = require('@eluvio/elv-js-helpers/Validation/validateWithModel')
 *
 * const PositiveNumModel = require('@eluvio/elv-js-helpers/Model/PositiveNumModel')
 * const resultToPOJO = require('@eluvio/elv-js-helpers/Conversion/ResultToPOJO')
 *
 * const goodResult = validateWithModel(PositiveNumModel, 42)
 * goodResult.inspect()                             //=> 'Ok 42'
 * resultToPOJO(goodResult).ok                      //=> true
 * resultToPOJO(goodResult).value                   //=> 42
 *
 * const errZeroInput = validateWithModel(PositiveNumModel, 0)
 * resultToPOJO(errZeroInput).ok                    //=> false
 * resultToPOJO(errZeroInput).errMsgs               //=> ['PositiveNumber: Value must be > 0 (got: 0)']
 *
 * const errStringInput = validateWithModel(PositiveNumModel, 'foo')
 * resultToPOJO(errStringInput).ok                  //=> false
 * resultToPOJO(errStringInput).errMsgs             //=> ['PositiveNumber: expecting Number, got String "foo"']
 *
 * // function is curried, call with just 1 argument to return a more specific validation function
 * const validatePositiveNumber = validateWithModel(PositiveNumModel)
 *
 * validatePositiveNumber(42).inspect()             //=> 'Ok 42'
 *
 * resultToPOJO(validatePositiveNumber(0)).ok       //=> false
 *
 * resultToPOJO(validatePositiveNumber('foo')).ok   //=> false
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
