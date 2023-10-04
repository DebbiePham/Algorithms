/* 
  Array: Binary Search (non recursive)

  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted .

  Bonus (alumni interview): 
    first complete it without the bonus, because they ask for additions
    after the initial algo is complete

    return how many times the given number occurs
*/

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;

// bonus, how many times does the search num appear?
const nums4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
const searchNum4 = 2;
const expected4 = 4;

/**
 * Efficiently determines if the given num exists in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @returns {boolean} Whether the given num exists in the given array.
 */
function binarySearch(sortedNums, searchNum) {
    // pseudocode
    let low = 0;
    let high = sortedNums.length - 1;


    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        
        if (sortedNums[mid] === searchNum) {
            return true;
        }
        if (searchNum < sortedNums[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1
        }
    }
    return false
}

console.log(binarySearch(nums1, searchNum1), 'should equal', expected1);
console.log(binarySearch(nums2, searchNum2), 'should equal', expected2);
console.log(binarySearch(nums3, searchNum3), 'should equal', expected3);

function binarySearch1(sortedNums, searchNum) {
    // pseudocode
    let low = 0;
    let high = sortedNums.length - 1;
    //  set initial count to zero
    let count = 0;

    // declare an empty object to hold the result of search and count 
    const result = {}
    // Applying binary search, iterate while start does not meet end
    while (low <= high) {
        // find the middle index
        let mid = Math.floor((low + high) / 2);
        // if element is present in the middle, increment occurence
        if (sortedNums[mid] === searchNum) {
            count ++;
            return true;
        }
        if (searchNum < sortedNums[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1
        }
    }
    return result;
}

console.log(binarySearch(nums4, searchNum4));