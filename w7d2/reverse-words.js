/* 
  Given a string containing space separated words
  Reverse each word in the string.

  If you need to, use .split to start, then try to do it without.
*/

const str1 = "hello";
// console.log(str1.split(""));
const expected1 = "olleh";

const str2 = "hello world";
// console.log(str2.split(""));
const expected2 = "olleh dlrow";

const str3 = "abc def ghi";
const expected3 = "cba fed ihg";

// split str to "" 
// reserve individual character
// join them back to a newStr ""

/**
 * Reverses the letters in each words in the given space separated
 * string of words. Does NOT reverse the order of the words themselves.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str Contains space separated words.
 * @returns {string} The given string with each word's letters reversed.
 */

function reverse(str) {
  var reverStr = "";
  for(var i = str.length-1; i >= 0; i-=1) {
      reverStr += str[i];
  }
  return reverStr;
}

/**
 * The function `reverseWords` takes a string as input and returns a new string with each word in the
 * input string reversed.
 * @param str - The input string that contains words to be reversed.
 * @returns a string with the words in the input string reversed.
 */

function reverseWords(str) {
  var newStr = "";
  var wordArr = str.split(" ");
  // need space in empty space to split word between space
  for(const word of wordArr) {
    let revWord = reverse(word);
    newStr += revWord;
    newStr += " ";
  }
  return newStr.slice(0,newStr.length-1);
}
console.log(reverseWords(str1));
console.log(reverseWords(str2));
console.log(reverseWords(str3));

