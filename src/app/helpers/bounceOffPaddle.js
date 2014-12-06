export default function bounceOffPaddle ( ball, paddle ) {
	var paddleLeft, paddleRight, paddleRadius;

	// trivial rejects
	if ( ball.y + ball.radius < paddle.y ) return;
	if ( ball.x + ball.radius < paddle.x - paddle.width / 2 ) return;
	if ( ball.x - ball.radius > paddle.x + paddle.width / 2 ) return;

	paddleLeft = paddle.x - paddle.width / 2;
	paddleRight = paddle.x + paddle.width / 2;
	paddleRadius = paddle.height / 2;

	// trivial accepts
	if ( ( ball.x > paddleLeft + paddleRadius ) && ( ball.x < paddleRight - paddleRadius ) ) {
		ball.y = ( paddle.y - ( ball.y + ball.radius - paddle.y ) - ball.radius );
		ball.vx += ( ball.x - paddle.x ) * 4;
	}

	// possible intersection between rounded edges
	// TODO

	ball.vy *= -1;
}