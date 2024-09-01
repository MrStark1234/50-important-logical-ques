//  https://www.geeksforgeeks.org/problems/inversion-of-array-1587115620/1

class Solution {
  // Function to count inversions in the array.
  inversionCount(arr, n) {
    let cnt = 0;
    for (let i = 0; i < n - 1; ++i) {
      for (let j = i + 1; j < n; ++j) {
        if (arr[i] > arr[j]) cnt++;
      }
    }
    return cnt;
  }
}
