var uid = 0, uids = {};

export default function ( name ) {
	if ( name ) {
		if ( !uids[ name ] ) {
			uids[ name ] = 0;
		}

		return name + '_' + ( ++uids[ name ] );
	}

	return ++uid;
};
