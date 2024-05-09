// https://leetcode.com/problems/rotate-array/

var reverse = function (arr, s, e) {
  while (s < e) {
    let temp = arr[s];
    arr[s] = arr[e];
    arr[e] = temp;
    s++;
    e--;
  }
};
var rotate = function (nums, k) {
  let n = nums.length;
  k = k % n;

  reverse(nums, 0, n - k - 1);
  reverse(nums, n - k, n - 1);
  reverse(nums, 0, n - 1);
  return nums;
};
