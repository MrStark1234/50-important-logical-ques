// Problem statement
// Sort the given unsorted array 'arr' of size 'N' in non-decreasing order using the selection sort algorithm.

//  Note:
// Change in the input array/list itself.

// Example:
// Input:
// N = 5
// arr = {8, 6, 2, 5, 1}

// Output:
// 1 2 5 6 8

function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i <= n - 2; i++) {
    let mini = i;
    for (let j = i; j <= n - 1; j++) {
      if (arr[j] < arr[mini]) {
        mini = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[mini];
    arr[mini] = temp;
  }
}
