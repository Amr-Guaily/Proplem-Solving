/*
problem: ## Squares of a Sorted Array - LeetCode ##
Given an integer array nums sorted in non-decreasing order,
return an array of the squares of each number sorted in non-decreasing order.
*/

function sortedSquares(nums) {
  // Declarative fashion:
  // return nums.map((num) => Math.pow(num, 2)).sort((a, b) => a - b);

  // Imperative fashion - 2 pointers:
  // This solutions only works for sorted array
  const result = [];
  let start = 0,
    end = nums.length - 1;

  for (let i = end; i >= 0; i--) {
    let sqaredStart = Math.pow(nums[start], 2),
      squaredEnd = Math.pow(nums[end], 2);

    if (sqaredStart > squaredEnd) {
      result[i] = sqaredStart;
      start++;
    } else {
      result[i] = squaredEnd;
      end--;
    }
  }
  return result;
}

console.log(sortedSquares([-4, -1, 0, 3, 10]));
