/* 
    Given a square matrix (2d array) of integers
    Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/

const squareMatrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];
const expected1 = 2;
/* 
    left to right diagonal: 1 + 5 + 9 = 15
    right to left diagonal: 3 + 5 + 9 = 17
    absolute difference = 2
  */

const squareMatrix2 = [
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
];
const expected2 = 0;
/* 
    left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
    right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
    absolute difference = 0
  */

/**
 * Calculates the absolute diagonal difference of a square matrix.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Array<number>>} sqrMatrix A 2d array of numbers representing
 *    a square matrix (rows and columns).
 * @returns {number} Represents the absolute difference between the top left to
 *    bottom right diagonal and the top right to bottom left diagonal.
 */
function diagonalDifference(sqrMatrix) {
    // Hint about performance: we are dealing with a square matrix. Is the Matrix's length the same as the length of the internal arrays? (*￣3￣)╭
    // Initialize variables to keep track of the sums of the two diagonals.
    let leftToRightDiagonal = 0;
    let rightToLeftDiagonal = 0;
    const n = sqrMatrix.length;
    // Iterate through the matrix to calculate the sum of the top-left to bottom-right diagonal and the top-right to bottom-left diagonal.
    for (let i = 0; i < n; i++) {
        leftToRightDiagonal += sqrMatrix[i][i];
        rightToLeftDiagonal += sqrMatrix[i][n - 1 - i];
    }
    // Calculate the absolute difference between the two sums.
    // Math.abs() is a JavaScript built-in function that stands for "Math absolute." It is used to find the absolute value of a number, which is the distance of that number from zero on the number line, regardless of whether it is positive or negative.
    return Math.abs(leftToRightDiagonal - rightToLeftDiagonal);
}

console.log(diagonalDifference(squareMatrix1), "should equal", expected1);
console.log(diagonalDifference(squareMatrix2), "should equal", expected2);
/*****************************************************************************/
