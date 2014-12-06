Guardian Interactive utils
==========================

The purpose of this repo is to keep frequently-used utilities together in such a way that you can bung them all into your project and not worry about whether you use them or not, because the RequireJS optimiser will only include the ones that are actually required.

For example...

```js
define( function ( require ) {

	'use strict';

	var addCommas = require( 'utils/string/addCommas' );

	console.log( addCommas( 1234567.89 ) ); // logs '1,234,567.89'

});
```
