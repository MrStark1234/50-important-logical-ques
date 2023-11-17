//Given an array of integers nums, find the next permutation of nums.

//The next permutation of an array of integers is the
//next lexicographically greater permutation of its integer.
//Input: [2,1,3]    Output: [2,3,1]
//Input: [3,2,1]    Output: [1,2,3]

//[2,1,5,4,3,0,0]
//[2,3,5,4,1,0,0]
//[2,3,0,0,1,4,5]
//First we find the break point
//To find someone gratter then breakpoint but smallest one
//Then we swap them
//Reverse the remaining Array's elements

function nextPermutation(nums) {
  let n = nums.length;
  let indx = -1;

  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      indx = i;
      break;
    }
  }

  if (indx == -1) {
    nums.reverse();
    return nums;
  }

  for (let i = n - 1; n > indx; i--) {
    if (nums[i] > nums[indx]) {
      [nums[i], (nums[indx] = nums[indx]), nums[i]];
      break;
    }
  }

  nums.splice(indx + 1, n - indx - 1, ...nums.slice(indx + 1).reverse());
  return nums;
}

console.log(nextPermutation([3, 2, 6, 5, 4, 1, 1]));
