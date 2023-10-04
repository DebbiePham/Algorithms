/* 
  Given a SORTED array of integers, dedupe the array 
  Because array elements are already in order, all duplicate values will be grouped together.

  Ok to use a new array

  Bonus: do it in O(n) time (no nested loops, new array ok)
  Bonus: Do it in-place (no new array)
  Bonus: Do it in-place in O(n) time and no new array
  Bonus: Keep it O(n) time even if it is not sorted
*/

const nums1 = [1, 1, 1, 1];
const expected1 = [1];

const nums2 = [1, 1, 2, 2, 3, 3];
const expected2 = [1, 2, 3];

const nums3 = [1, 1, 2, 3, 3, 4];
const expected3 = [1, 2, 3, 4];

const nums4 = [1, 1];
const expected4 = [1];

/**
 * De-dupes the given sorted array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array deduped.
 */
function dedupeSorted(nums) { 
    if (nums.length <= 1) {
        return nums
    }
    let new_arr = [];
    for(let i =0; i < nums.length; i++) {
        if(nums[i] !== new_arr[new_arr.length-1]){
            new_arr.push(nums[i]);
        } 
    } 
    return new_arr
}
// console.log(dedupeSorted(nums1),"should equal", expected1);
// console.log(dedupeSorted(nums2),"should equal", expected2);
// console.log(dedupeSorted(nums3),"should equal", expected3);
// console.log(dedupeSorted(nums4),"should equal", expected4);

function dedupeSorted_bonus(nums) {
    let output = [...new Set(nums)];
    return output
}
console.log(dedupeSorted_bonus(nums1),"should equal", expected1);
console.log(dedupeSorted_bonus(nums2),"should equal", expected2);
console.log(dedupeSorted_bonus(nums3),"should equal", expected3);
console.log(dedupeSorted_bonus(nums4),"should equal", expected4);
