function rot13(str) {
  // Split string into array if single characters
  // Check if character is letter
  // Shift letter back 13 places
  // Account for letters that need to wrap to end of alphabet
  // Join new string
  return str.split("").map( char => checkChar(char) ).join("");

  function checkChar(char) {
  	if( /[A-Z]/.test(char) ) {
  		return "A";
  	} else {
  		return char;
  	}
  }
}

// Change the inputs below to test
var result = rot13("SERR PBQR PNZC");
console.log(result);