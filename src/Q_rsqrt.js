/**
 * Fast inverse square root
 * @param number {number} //float
 * @returns {Float32Array}
 */
function Q_rsqrt(number) {
    // The Q_rsqrt function needs to perform a "right bit-shift".
    // A "right bit-shift" consists in shifting a binary value from left to right (or viceversa).
    // In order to be able to perform a "right bit-shift" we need to use binary data buffer.

    // So we create the buffer:
    var buffer = new ArrayBuffer(Float32Array.BYTES_PER_ELEMENT);

    // Now we need to create a new "typed array" representing a 32-bit floating number.
    // A "typed array" is an array-like view of an underlying binary data buffer.
    var y = new Float32Array(buffer);

    // Now we create a new "typed array" representing a 32-bit unsigned integer.
    // This object will allow us to perform the "right bit-shift",
    // because right/left bit-shift only works on unsigned/signed integers.
    // We're gonna use an unsigned integer because Q_rsqrt accepts positive and negative numbers.

    // This new object will share the same buffer of y.
    // This means that if we alter the value of y then the value of i will also change.
    var i = new Uint32Array(buffer);

    var threehalfs = 1.5;
    var x2;

    // This is (nearly) the original Q_rsqrt of Quake III Arena engine.
    x2 = number * 0.5;
    y[0] = number;
    i[0] = 0x5f3759df - ( i[0] >> 1 );          // here the value of y is also changed cause they share the same buffer
    y = y[0];
    y = y * ( threehalfs - ( x2 * y * y ) );    // Newton's method iteration

    return y;
}

// node Q_rsqrt.js <number>
console.log(Q_rsqrt(parseFloat(process.argv[2])));
