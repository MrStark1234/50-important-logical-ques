//https://leetcode.com/problems/reverse-pairs/

var merge = function (arr, l, m, r) {
  let temp = [];
  let left = l;
  let right = m + 1;
  while (left <= m && right <= r) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }
  while (left <= m) {
    temp.push(arr[left]);
    left++;
  }
  while (right <= r) {
    temp.push(arr[right]);
    right++;
  }
  for (let i = l; i <= r; i++) {
    arr[i] = temp[i - l];
  }
};

var countPair = function (arr, low, mid, high) {
  let cnt = 0;
  let right = mid + 1;
  for (let i = low; i <= mid; i++) {
    while (right <= high && arr[i] > 2 * arr[right]) right++;
    cnt += right - (mid + 1);
  }
  return cnt;
};

var mergeSort = function (arr, l, r) {
  let cnt = 0;
  if (l >= r) return cnt;
  let mid = Math.floor((l + r) / 2);
  cnt += mergeSort(arr, l, mid);
  cnt += mergeSort(arr, mid + 1, r);
  cnt += countPair(arr, l, mid, r);
  merge(arr, l, mid, r);
  return cnt;
};

var reversePairs = function (nums) {
  return mergeSort(nums, 0, nums.length - 1);
};
