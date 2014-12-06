import 'utils/compatibility/String';

export default function ( node, className ) {
	var classNames, index, dirty;

	if ( node.classList && node.classList.remove ) {
		node.classList.remove( className );
	}

	classNames = node.className.split( ' ' ).map( trim ).filter( Boolean );

	while ( ~( index = classNames.indexOf( className ) ) ) {
		classNames.splice( index, 1 );
		dirty = true;
	}

	if ( dirty ) {
		node.className = classNames.join( ' ' );
	}
}

function trim ( string ) {
	return string.trim();
}
