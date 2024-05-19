//https://leetcode.com/problems/two-sum/

var twoSum = function (nums, target) {
  let n = nums.length;
  let map = new Map();
  for (let i = 0; i < n; i++) {
    let need = target - nums[i];
    if (map.has(need)) return [map.get(need), i];
    map.set(nums[i], i);
  }
  return [];
};
