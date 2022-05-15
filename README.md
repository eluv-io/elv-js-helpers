# elv-js-helpers

A collection of Javascript helper functions used by several Eluvio libraries.

**THIS LIBRARY IS CURRENTLY IN PRE-RELEASE: FUNCTION NAMES AND SIGNATURES ARE STILL IN FLUX.** 

## Installation

#### Install from NPM:

```
npm install --save @eluvio/elv-js-helpers
```

## Usage

It is possible to import individual items or the entire library, depending on whether code size is a concern.

### Entire library (CommonJS)

```javascript
// namespace entire suite to a const
const H = require('@eluvio/elv-js-helpers')

// create references to particular items in order to avoid needing to use H. prefix
const { etaDurStr, etaTimeStr } = H
const {_boundLowerErrMsg} = H

// Note that the following syntax still causes entire library to be bundled into your project
const { etaDurStr, etaTimeStr } = require('@eluvio/elv-js-helpers')
```

### Entire library (JS Modules)

```javascript
// namespace entire suite to H
import H from '@eluvio/elv-js-helpers'

// create references to particular items in order to avoid needing to use H. prefix
const { etaDurStr, etaTimeStr } = H
const {_boundLowerErrMsg} = H

// Note that the following syntax still causes entire library to be bundled into your project
import { etaDurStr, etaTimeStr }  from '@eluvio/elv-js-helpers'
```

### Individual items (CommonJS)

```javascript
// require in each item directly
const etaDurStr = require('@eluvio/elv-js-helpers/Datetime/etaDurStr')
const etaTimeStr = require('@eluvio/elv-js-helpers/Datetime/etaTimeStr')
const _boundLowerErrMsg = require('@eluvio/elv-js-helpers/ModelAssertion/_boundLowerErrMsg')
```

### Individual items (JS Modules)

```javascript
// import in each item directly
import etaDurStr from '@eluvio/elv-js-helpers/Datetime/etaDurStr'
import etaTimeStr from '@eluvio/elv-js-helpers/Datetime/etaTimeStr'
import _boundLowerErrMsg from '@eluvio/elv-js-helpers/ModelAssertion/_boundLowerErrMsg'
```

### Entire library (browser)

Although not recommended, it is also possible to import the entire library directly into a browser via a `<script>` tag 
pointing to a copy of either `dist/elv-js-helpers.js` or `dist/elv-js-helpers.min.js`. This will create a variable named 
`ElvJsHelpers` in the global namespace. There is no support for importing individual items via a `<script>` tag. (It 
is expected that browser apps would be built using a bundling tool like Webpack/Rollup/Parcel)
```html
<!-- Import entire library as ElvJsHelper -->
<script src="elv-js-helpers.js"></script>
<script type="application/javascript">
    console.log('System locale is: ' + ElvJsHelpers.Datetime.sysLocale())
    console.log('_boundLowerErrMsg(0,true)= "' + ElvJsHelpers.ModelAssertion._boundLowerErrMsg(0,true) + '"')
</script>
```


## API Documentation
[https://eluv-io.github.io/elv-js-helpers/api.html](https://eluv-io.github.io/elv-js-helpers/api.html)

