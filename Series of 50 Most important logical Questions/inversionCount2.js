//https://www.geeksforgeeks.org/problems/inversion-of-array-1587115620/1

class Solution {
  merge(arr, low, mid, high) {
    let left = low;
    let right = mid + 1;
    let temp = [];
    let count = 0;
    while (left <= mid && right <= high) {
      if (arr[left] <= arr[right]) {
        temp.push(arr[left]);
        left++;
      } else {
        temp.push(arr[right]);
        count += mid - left + 1;
        right++;
      }
    }
    while (left <= mid) {
      temp.push(arr[left]);
      left++;
    }
    while (right <= high) {
      temp.push(arr[right]);
      right++;
    }
    for (let i = low; i <= high; ++i) {
      arr[i] = temp[i - low];
    }
    return count;
  }

  mergeSort(arr, low, high) {
    let count = 0;
    if (low >= high) return count;

    let mid = Math.floor((low + high) / 2);
    count += this.mergeSort(arr, low, mid);
    count += this.mergeSort(arr, mid + 1, high);
    count += this.merge(arr, low, mid, high);
    return count;
  }
  // Function to count inversions in the array.
  inversionCount(arr, n) {
    // your code here
    return this.mergeSort(arr, 0, n - 1);
  }
}
