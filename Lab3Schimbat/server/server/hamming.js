function decode(bits,parityC,numberOfDataBits) {
	if(numberOfDataBits!=0) {
		if (numberOfDataBits == 4 && parityC == 0) {
			var z4 = parity(bits[3] + bits[4] + bits[5] + bits[6]);
			var z2 = parity(bits[1] + bits[2] + bits[5] + bits[6]);
			var z1 = parity(bits[0] + bits[2] + bits[4] + bits[6]);
			// var z0 = ...

			var errorPosition = z1 * 1 + z2 * 2 + z4 * 4;
			var errorDetected = false;
			var errorCorrected = false;
			var parity_Check = false;

			if (errorPosition != 0 && parityC == 0) errorDetected = true;
			if (errorDetected) {
				bits[errorPosition - 1] = parity(bits[errorPosition - 1] + 1);
			}
			return {errorCorrected: errorDetected, errorPosition: errorPosition - 1, bits: bits};
		} else if(numberOfDataBits==4&&parityC==1){
			var z4 = parity(bits[4] + bits[5] + bits[6] + bits[7]);
			var z2 = parity(bits[2] + bits[3] + bits[6] + bits[7]);
			var z1 = parity(bits[1] + bits[3] + bits[5] + bits[7]);
			var zp = parity(bits[0] + bits[1] + bits[2] + bits[3] + bits[4] + bits[5] + bits[6] + bits[7]);
			var errorPosition = z1 * 1 + z2 * 2 + z4 * 4;
			if (errorPosition == 0 && zp == 1) {
				errorDetected = true;
				errorCorrected = true;
				parity_Check = true;
				// which means the parity bit is wrong
				bits[parseInt(errorPosition)] = parity(bits[errorPosition] + 1);
			} else if (errorPosition != 0 && zp == 0) {
				errorDetected = true; //more that 1 errors
			} else if (errorPosition != 0 && zp == 1) {
				errorDetected = true;
				errorCorrected = true;
				bits[errorPosition] = parity(bits[errorPosition] + 1)
			}
			return {errorCorrected: errorDetected, errorPosition: errorPosition - 1, bits: bits};

		}
		if (numberOfDataBits == 8 && parityC == 0) {
			var z8 = parity(bits[7] + bits[8] + bits[9] + bits[10] + bits[11]);
			var z4 = parity(bits[3] + bits[4] + bits[5] + bits[6] + bits[11]);
			var z2 = parity(bits[1] + bits[2] + bits[5] + bits[6] + bits[9] + bits[10]);
			var z1 = parity(bits[0] + bits[2] + bits[4] + bits[6] + bits[8] + bits[10]);
			var errorPosition = z1 * 1 + z2 * 2 + z4 * 4 + z8 * 8;
			var errorDetected = false;
			if (errorPosition != 0 && parityC == 0) errorDetected = true;
			if (errorDetected) {
				bits[errorPosition - 1] = parity(bits[errorPosition - 1] + 1);
			}
			return {errorCorrected: errorDetected, errorPosition: errorPosition - 1, bits: bits};

		} else if(numberOfDataBits==8&&parityC==1){
			var z8 = parity(bits[8] + bits[9] + bits[10] + bits[11] + bits[12]);
			var z4 = parity(bits[4] + bits[5] + bits[6] + bits[7] + bits[12]);
			var z2 = parity(bits[2] + bits[3] + bits[6] + bits[7] + bits[10] + bits[11]);
			var z1 = parity(bits[1] + bits[3] + bits[5] + bits[7] + bits[9] + bits[11]);
			var zp = parity(bits[0] + bits[1] + bits[2] + bits[3] + bits[4] + bits[5] + bits[6] + bits[7] + bits[8] + bits[9] + bits[10] + bits[11] + bits[12])
			var errorPosition = z1 * 1 + z2 * 2 + z4 * 4 + z8 * 8;
			if (errorPosition == 0 && zp == 1) {
				errorDetected = true;
				errorCorrected = true;
				parity_Check = true;
				// which means the parity bit is wrong
				bits[errorPosition] = parity(bits[errorPosition] + 1);
			} else if (errorPosition != 0 && zp == 0) {
				errorDetected = true; //more that 1 errors
			} else if (errorPosition != 0 && zp == 1) {
				errorDetected = true;
				errorCorrected = true;
				bits[errorPosition] = parity(bits[errorPosition] + 1)
			}
			return {errorCorrected: errorDetected, errorPosition: errorPosition - 1, bits: bits};
		}
		}
}

parity = function(number){
	return number % 2;
};

exports.decode = decode;
