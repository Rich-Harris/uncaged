export default function bounceOffCeiling ( ball, board ) {
	if ( ball.y < ball.radius ) {
		ball.vy *= -1;
		ball.y = ball.radius + ( ball.radius - ball.y );
	}
}