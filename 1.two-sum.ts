/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const numToIndex = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numToIndex.has(complement)) {
      return [numToIndex.get(complement)!, i];
    }
    numToIndex.set(nums[i], i);
  }

  return [];
}
// @lc code=end
