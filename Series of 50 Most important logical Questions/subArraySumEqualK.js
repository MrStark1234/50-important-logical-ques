//https://leetcode.com/problems/subarray-sum-equals-k/

var subarraySum = function (nums, k) {
  let n = nums.length;
  let map = new Map();
  map.set(0, 1);
  let preSum = 0;
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    preSum += nums[i];
    let remove = preSum - k;
    cnt += map.get(remove) || 0;
    map.set(preSum, (map.get(preSum) || 0) + 1);
  }
  return cnt;
};
