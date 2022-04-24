// ** Binary Search ** //
/*
- Binary search is an algorithm; its input is a sorted list of elements.

- Binary search will take [log₂(n)] steps to run in the worst case, whereas
  simple search will take [n] steps.

- Binary search only works when your list is in sorted older.
*/

function binarySearch(list, target) {
  let start = 0,
    end = list.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2),
      guess = list[mid];

    if (guess === target) {
      return mid;
    }

    if (guess > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return null;
}
binarySearch([1, 3, 5, 7, 9], 7); // output: 3 (the index of target elemrnt)

/*
problem: ## Search Insert Position - LeetCode ##
Given a sorted array of integers and a target value, return the index if the target is found.
If not, return the index where it would be if it were inserted in order.
*/

function searchInsert(nums, target) {
  let start = 0,
    end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2),
      guess = nums[mid];

    if (guess === target) {
      return mid;
    }

    if (guess > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return start;
}

searchInsert([1, 3, 5, 6], 2);
