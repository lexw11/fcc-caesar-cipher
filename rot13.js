function rot13(str) {
	return str
		// Split string into array of individual characters
		.split("")
		// Decode all letter characters
		.map( char => checkChar(char) )
		// Join decoded array back into string
		.join("");

	// Decodes individual character
	function checkChar(char) {
		// Check if character is letter
		if ( /[A-Z]/.test(char) ) {
			// Get encoded letter UTF-16 code
			let ind = char.charCodeAt(0);
			let newInd;
			
			// Get decoded letter UTF-16 code
			if ( ind < 78 ) {
				// Handle letters that need to wrap to end of alphabet
				newInd = ind + 13;
			} else {
				newInd = ind - 13;
			}

			return String.fromCharCode( newInd );

		} else {
			return char;
		}
	}
}

// Change the inputs below to test
var result = rot13("SERR PBQR PNZC");
console.log(result);