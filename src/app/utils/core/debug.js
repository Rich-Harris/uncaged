/*
	This module exists to make it easier to track down errors that
	occur inside promise resolution handlers. Use it like so:

	promise = doSomethingAsync
		.then( doSomethingThatThrowsAnError )
		.catch( debug );
*/
export default function ( err ) {
	setTimeout( function () {
		throw( err );
	});
}
