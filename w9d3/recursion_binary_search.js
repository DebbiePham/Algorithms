/*
  Recursive Binary Search

  Input: SORTED array of ints, int value
  Output: bool representing if value is found

  Recursively search to find if the value exists, do not loop over every element.

  Approach:
  Take the middle item and compare it to the given value.
  Based on that comparison, narrow your search to a particular section of the array
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

/**
 * Add params if needed for recursion
 * Recursively performs a binary search (divide and conquer) to determine if
 * the given sorted nums array contains the given number to search for.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @param {number} searchNum
 * @returns {boolean} Whether the searchNum was found in the nums numsay.
 */
function binarySearch(nums, searchNum) {
    let low = nums[0];
    let high = 
    let mid = Math.floor(nums.length/2);
  
  if (nums.length === 1 && nums[0] != searchNum) {
    return false;
  } 
  if (nums[mid] === searchNum) {
    return true;
  } else if (searchNum < nums[mid]) {
    return binarySearch(searchNum, nums.slice(0, mid));
  } else if (searchNum > nums[mid]) {
    return binarySearch(searchNum, nums.slice(mid));
  }
}

// do not workout

// console.log(binarySearch(nums1, searchNum1), "expected", expected1);
// console.log(binarySearch(nums2, searchNum2), "expected", expected2);
// console.log(binarySearch(nums3, searchNum3), "expected", expected3);