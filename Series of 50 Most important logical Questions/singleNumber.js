//https://leetcode.com/problems/single-number/

var singleNumber = function (nums) {
  ans = 0;
  for (let i of nums) {
    ans = ans ^ i;
  }
  return ans;
};
