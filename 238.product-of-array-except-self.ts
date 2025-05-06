/*
 * @lc app=leetcode id=238 lang=typescript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
function productExceptSelf(nums: number[]): number[] {
  // Initialize the result array with 1s
  // and calculate the left products
  const n = nums.length;
  const result = new Array(n).fill(1);
  // Initialize the result array with 1s
  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
    result[i] *= leftProduct;
    leftProduct *= nums[i];
  }
  // Calculate the left products
  // and store them in the result array
  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return result;
}
// @lc code=end
