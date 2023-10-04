/* 
Given by Riot games.
*/

// b : 70
// a : 164 -> 184
// c : 32 -> 42

const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

/**
 * Rehashes an incorrectly hashed string by combining letter count occurrences
 * and alphabetizing them.
 * Time: O(?).
 * Space: O(?).
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */
function rehash(s) {
    // Hint: We can use isNaN to check for non-numbers, as well as parseInt for converting our strings to numbers.
    // Hash tables {} to track the letters found and their values is recommended!
    let letterCount = {};
    let num = '';
    let key = '';

    // Step 1: Process the input string and update letter counts
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (isNaN(char)) {
            key = char;
            // Step 3: Character is a letter
            if (!letterCount[char]) {
                letterCount[char] = 0;
            }
        } else {
            // Step 4: Character is a digit
            num += char;
            let prevChar = s[i+1];
            if (isNaN(prevChar)) {
                letterCount[key] += parseInt(num);
                num = '';
            }
        }
    }

    // Step 5: Alphabetically sort the keys
    const sortedKeys = Object.keys(letterCount).sort();

    // Step 6: Build the correctly rehashed string
    let result = "";
    for (const key of sortedKeys) {
        result += key + letterCount[key];
    }

    return result;
}
console.log(rehash(str1));
/*****************************************************************************/

