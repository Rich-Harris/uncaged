if ( !ArrayBuffer.prototype.slice ) {
	ArrayBuffer.prototype.slice = function ( start, end ) {
		var self, result, resultArray, i;

		self = new Uint8Array(this);

		if ( end === undefined ) {
			end = self.length;
		}

		result = new ArrayBuffer(end - start);
		resultArray = new Uint8Array(result);

		for ( i = 0; i < resultArray.length; i++ ) {
			resultArray[i] = self[i + start];
		}

		return result;
	};
}
