export default function bounceOffWalls ( ball, board ) {
	if ( ball.x < ball.radius ) {
		ball.vx *= -1;
		ball.x = ball.radius + ( ball.radius - ball.x );
	} else if ( ball.x > ( board.width - ball.radius ) ) {
		ball.vx *= -1;
		ball.x = ( board.width - ball.radius ) - ( ball.x - ( board.width - ball.radius ) );
	}
}