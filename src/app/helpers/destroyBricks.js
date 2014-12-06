export default function destroyBricks ( ball, bricks, dx, dy, board, game ) {
	var rowNum,
		columnNum,
		row,
		column,
		brick,
		c1, c2, r1, r2,
		x,
		y,
		candidates,
		candidate,
		collision,
		i;

	x = ball.vx > 0 ? ball.x + ball.radius : ball.x - ball.radius;
	y = ball.vy > 0 ? ball.y + ball.radius : ball.y - ball.radius;

	c1 = ~~( x / game.brickWidth );
	c2 = ~~( ( x + dx ) / game.brickWidth );

	r1 = ~~( y / game.brickHeight );
	r2 = ~~( ( y + dy ) / game.brickHeight );

	if ( c2 !== c1 ) {
		c2 = c2 > c1 ? c1 + 1 : c1 - 1;
	}

	if ( r2 !== r1 ) {
		r2 = r2 > r1 ? r1 + 1 : r1 - 1;
	}

	row = bricks[ r2 ];
	if ( !row ) return;

	brick = row[ c2 ];
	if ( !brick ) return;

	if ( c2 !== c1 ) {
		ball.vx *= -1;
	}

	if ( r2 !== r1 ) {
		ball.vy *= -1;
	}
}

function collide ( ball, x1, y1, x2, y2 ) {
	console.log( 'colliding', ball, x1, y1, x2, y2 );
}