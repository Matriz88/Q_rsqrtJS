function Q_rsqrt(number) {
	var buffer = new ArrayBuffer(Float32Array.BYTES_PER_ELEMENT);
	var y = new Float32Array(buffer);
	var i = new Uint32Array(buffer);
	var threehalfs = 1.5;
	var x2;

	x2 = number * 0.5;
	y[0] = number;
	i[0] = 0x5f3759df - ( i[0] >> 1 );
	y = y[0];
	y = y * ( threehalfs - ( x2 * y * y ) );

	return y;
}

//node Q_rsqrt.js <number>
console.log(Q_rsqrt(process.argv[2]))