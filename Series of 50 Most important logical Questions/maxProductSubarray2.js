//https://leetcode.com/problems/maximum-product-subarray/submissions/1359244127/

var maxProduct = function (nums) {
  let n = nums.length;
  let pre = 1;
  let suf = 1;
  let max = -Infinity;
  for (let i = 0; i < n; i++) {
    if (pre == 0) pre = 1;
    if (suf == 0) suf = 1;
    pre = pre * nums[i];
    suf = suf * nums[n - i - 1];
    max = Math.max(max, Math.max(pre, suf));
  }
  return max;
};
