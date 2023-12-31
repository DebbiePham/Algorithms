/* 
  Return the fibonacci number at the nth position, recursively.
  
  Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

  The next number is found by adding up the two numbers before it,
  starting with 0 and 1 as the first two numbers of the sequence.
*/

const num1 = 0;
const expected1 = 0;

const num2 = 1;
const expected2 = 1;

const num3 = 2;
const expected3 = 1;

const num4 = 3;
const expected4 = 2;

const num5 = 4;
const expected5 = 3;

const num6 = 8;
const expected6 = 21;

/**
 * Recursively finds the nth number in the fibonacci sequence.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} num The position of the desired number in the fibonacci sequence.
 * @returns {number} The fibonacci number at the given position.
 */
function fibonacci(num) {
    // base case
    if ( num < 2) {
        return num;
    }
     // recured
    return fibonacci(num-1) + fibonacci(num-2);
}

console.log(fibonacci(num1), "should equal", expected1);
console.log(fibonacci(num2), "should equal", expected2);
console.log(fibonacci(num3), "should equal", expected3);
console.log(fibonacci(num4), "should equal", expected4);
console.log(fibonacci(num5), "should equal", expected5);
console.log(fibonacci(num6), "should equal", expected6);