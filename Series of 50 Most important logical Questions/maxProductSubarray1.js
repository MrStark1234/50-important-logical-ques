//https://leetcode.com/problems/maximum-product-subarray/submissions/1359244127/

var maxProduct = function (nums) {
  let max = Number.MIN_VALUE;
  for (let i = 0; i < nums.length; i++) {
    let pro = 1;
    for (let j = 0; j < nums.length; j++) {
      pro = pro * nums[j];
      max = Math.max(max, pro);
    }
  }
  return max;
};
