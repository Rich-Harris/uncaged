export default function range ( start, end ) {
	var array = [],
		i;
	for ( i = start; i <= end; i += 1 ) {
		array.push( i );
	}
	return array;
}
