/* 
  Acronyms

  Create a function that, given a string, returns the string’s acronym 
  (first letter of each word capitalized). 

  Do it with .split first if you need to, then try to do it without
*/

const str1 = "object oriented programming";
const expected1 = "OOP";

const str2 = "abstraction polymorphism inheritance encapsulation";
const expected2 = "APIE";

const str3 = "software development life cycle";
const expected3 = "SDLC";

// /**
//  * Turns the given str into an acronym.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {string} wordsStr A string to be turned into an acronym.
//  * @returns {string} The acronym.
//  */
function acronymize(str) {
  // store the result of str.split into a variable
  var str_arr = str.split(" ");
  // create a variable to hole each first letter to an empty string
  var output = ""
  // loop over the result and add the first index of each word in the array to the output variable
  for(i = 0; i < str_arr.length; i++) {
    output += str_arr[i][0].toUpperCase()
  }
  return output
}
console.log(acronymize(str3))


// Bonus: ignore extra spaces
const str4 = "  global   information tracker    ";
const expected4 = "GIT";
// function without using .split and .trim method
function acronymize_extra(inputString) {
  var retVal = "";
  var hasSeenSpace = true;

  for (var i = 0; i < inputString.length; i++) {
    var currentChar = inputString[i];
    if (currentChar == " ") {
      hasSeenSpace = true;
    } else if (hasSeenSpace) {
      // currentChar is not a space AND we have seen a space before
      retVal += currentChar;
      hasSeenSpace = false;
    }
  }
  return retVal.toUpperCase();
}

console.log(acronymize_extra(str4))

//  function using .trim and split method
function acronymize_extra1(str) {
  var strimmedString = str.trim();
  var splited_str = strimmedString.split(" ");
  var output = "";
  for(var i = 0; i < splited_str.length; i++) {
    if(splited_str[i].length > 0) {
      output += splited_str[i][0];
    }
  }
  return output.toUpperCase();
}
console.log(acronymize_extra1(str4));
