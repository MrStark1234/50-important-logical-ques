class Solution {
  merge(arr, l, m, r) {
    // Your code here
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
  }

  mergeSort(arr, l, r) {
    //code here
    if (l >= r) return;
    let mid = Math.floor((l + r) / 2);
    this.mergeSort(arr, l, mid);
    this.mergeSort(arr, mid + 1, r);
    this.merge(arr, l, mid, r);
  }
}
