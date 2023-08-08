/* 
  String: Is Palindrome

  Create a function that returns a boolean whether the string is a strict palindrome. 
    - palindrome = string that is same forwards and backwards
  
  Do not ignore spaces, punctuation and capitalization
 */

const str1 = "a x a";
const expected1 = true;

const str2 = "racecar";
const expected2 = true;

const str3 = "Dud";
const expected3 = false;

const str4 = "oho!";
const expected4 = false;

/**
 * Determines if the given str is a palindrome (same forwards and backwards).
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given str is a palindrome or not.
 */


// base on big O notation evaluation, the second solution is the most effecient way to create code and below is reasons why:
// 1st one, it is short code, but it has to looped through the string 4 times which is 4n also know as O(n)
function isPalindrome(str) {
  // check condition if we read (reserve) the string backward and it still same === with the original str
  return str == str.split("").reverse().join("");
  // must return boolean (true.false) for the funtion
}
var result = isPalindrome(str1);
console.log(result);

// this code is only loop through 1/2 way which is 0(n)
function isPalindrome1(str) {
  var len = Math.floor(str.length/2);
  var currentChar = str[i];
  for (var i = 0; i < len; i++){
    if (currentChar != str[str.length - i -1])
    return false;
  }
  return true;
}
var result = isPalindrome1(str2);
console.log(result);
// this one this the worst because it has to create an empty string, loop through string, append the result to the empty string which is O(n square)
function isPalindrome2(str) {
  var revStr = ""
  for (var i = str.length-1; i >= 0; i-=1) {
    revStr += str[i];
  }
  return revStr == str;
}
console.log(isPalindrome2(str3));

module.export = {isPalindrome1};