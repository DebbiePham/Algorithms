/* 
  Balance Index

  Here, a balance point is ON an index, not between indices.

  Return the balance index where sums are equal on either side
  (exclude its own value).
  
  Return -1 if none exist.
  
*/

const nums1 = [-2, 5, 7, 0, 3];
const expected1 = 2;

const nums2 = [9, 9];
const expected2 = -1;

/**
 * Finds the balance index in the given array where the sum to the left of the
 *    index is equal to the sum to the right of the index.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The balance index or -1 if there is none.
 */
function balanceIndex(nums) {
    if (nums.length < 3) {
        return -1
    }
    // set a var for sum
    let left = 0;
    let right = 0;
    let half = Math.floor(nums.length/2);
    
    for (var k = 0; k < nums.length; k++ ) {
        // for loop from the begining
        for (var i = 0; i < half; i++ ) {
            left += nums[i];
        }
        console.log("left", (left));

        // for loop from the end
        
        for (var j = half + 1; j < nums.length; j++) {
            right += nums[j];
        }
        console.log("right", (right));

        if (left === right) {
            return half;
        } 
        return -1;
    }
}

console.log(balanceIndex(nums1));
console.log(balanceIndex(nums2));
