var songs = [
	[ 'break-free.mp3' ],
	[ 'breakaway.mp3' ],
	[ 'london-calling.mp3' ],

	shuf([
		'rule-britannia.mp3',
		'god-save-the-queen.mp3',
		'jerusalem.mp3',
		'pomp-and-circumstance.mp3'
	])
];

var soundtrack = {
	level: null,
	playlist: null,

	shuffle: function ( level ) {
		var playlist, nextSong;

		if ( level === soundtrack.level ) {
			return;
		}

		soundtrack.playlist = songs[ level ].slice();
		soundtrack.continue();
	},

	'continue': function () {
		var nextSong;

		if ( soundtrack.current ) {
			soundtrack.current.pause();
			soundtrack.current.src = soundtrack.current.src;

			soundtrack.current = null;
		}

		nextSong = song( soundtrack.playlist.shift() );

		if ( nextSong ) {
			nextSong.play();
			soundtrack.current = nextSong;
		} else {
			soundtrack.playlist = songs[ soundtrack.level ].slice();
			soundtrack.continue();
		}
	}
};

function song ( filename ) {
	var node, src;

	node = new Audio();
	src = '${version}/files/soundtrack/' + filename;

	// reset
	node.addEventListener( 'ended', () => {
		node.src = src;
		soundtrack.current = null;

		soundtrack.continue();
	});

	node.src = src;
	return node;
}

function shuf ( array ) {
	var newArr = [], i;

	array = array.slice();

	while ( array.length ) {
		i = ~~( Math.random() * array.length );
		newArr.push( array.splice( i, 1 )[0] );
	}

	return newArr;
}

export default soundtrack;