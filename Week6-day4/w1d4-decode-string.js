/* 
  String Decode  
*/

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";

"a3a2"
"aaa"

const str2 = "a3b2c12d10";
const expected2 = "aaabbccccccccccccdddddddddd";

/**
 * Decodes the given string by duplicating each character by the following int
 * amount if there is an int after the character.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str An encoded string with characters that may have an int
 *    after indicating how many times the character occurs.
 * @returns {string} The given str decoded / expanded.
 */
function decodeStr(str) {
  var result = "";
  var letter = "";
  var countString = ""; // example: "123"

  for (var i = 0; i < str.length; i++) {
    var currentChar = str[i];
    
    if (isNumber(currentChar)) {
      countString += currentChar;
    } else {
      // this is a letter
      if (letter == "") {
        // first time entering loop, update letter to current char
        letter = currentChar;
      } else {
        // encountered a new letter, need to print previous letter and update the registered letter
        result += getRepeatedLetter(letter, countString);
        letter = currentChar;
        countString = "";
      }
    }
  }

  // process left-over
  if (countString.length > 0) {
    result += getRepeatedLetter(letter, countString);
  }
  return result;
}

function isNumber(inputString) {
  // isNaN returns true if input is Not-a-Number
  return !isNaN(inputString);
}

function getRepeatedLetter(letter, countString) {
  var result = "";

  for (var i = 0 ; i < Number(countString); i++) {
    result += letter;
  }

  return result;
}

var result = decodeStr("a3b2c12d10");
