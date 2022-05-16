// unit test for toLocaleString.js

const chai = require('chai')
chai.should()

const toLocaleString = require('../../../../src/Datetime/toLocaleString')
const utcStrToDate = require('../../../../src/Datetime/utcStrToDate')

describe('toLocaleString', () => {
  const myDate = utcStrToDate('2022-03-01T14:00:00Z')


  it('should work as expected', () => {
    const USA_Pacific_short = toLocaleString(
      'en-US',
      {
        hour: 'numeric',
        day: 'numeric',
        minute: 'numeric',
        month: 'short',
        second: 'numeric',
        timeZone: 'America/Los_Angeles',
        timeZoneName: 'short'
      }
    )

    USA_Pacific_short(myDate).should.equal('Mar 1, 6:00:00 AM PST')

    const UK_long = toLocaleString(
      'en-GB',
      {
        dateStyle: 'full',
        timeStyle: 'long',
        timeZone: 'Europe/London'
      }
    )

    UK_long(myDate).should.equal('Tuesday, 1 March 2022 at 14:00:00 GMT')
  })

  it('should be curried', () => {
    toLocaleString(
      'en-US',
      {
        dateStyle: 'short',
        timeStyle: 'short',
        timeZone: 'America/New_York'
      },
      myDate
    ).should.equal('3/1/22, 9:00 AM')
  })
})

/**
 * @example
 *
 * const toLocaleString = require('@eluvio/elv-js-helpers/Datetime/toLocaleString')
 * const utcStrToDate = require('@eluvio/elv-js-helpers/Datetime/utcStrToDate')
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * // function is curried, it is possible to pass all arguments at once to define/invoke in one step
 *
 *
 *
 */
