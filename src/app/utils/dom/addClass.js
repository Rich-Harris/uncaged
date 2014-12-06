import 'utils/compatibility/String';

export default function ( node, className ) {
	var classNames;

	if ( node.classList && node.classList.add ) {
		node.classList.add( className );
	}

	classNames = node.className.split( ' ' ).map( trim ).filter( Boolean );

	if ( !~classNames.indexOf( className ) ) {
		classNames.push( className );
		node.className = classNames.join( ' ' );
	}
}

function trim ( string ) {
	return string.trim();
}
