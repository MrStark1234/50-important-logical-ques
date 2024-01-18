//Given an array of integers, your task is to find the smallest and second smallest element in the array.
//[5,2,4,3,6,8]

//loop chalana hai

function minSecMin(arr, n) {
  let minNum = arr[0];
  let secMinNum = Infinity;
  for (let i = 1; i < n; i++) {
    if (arr[i] < minNum) {
      secMinNum = minNum;
      minNum = arr[i];
    } else if (arr[i] < secMinNum && arr[i] !== minNum) {
      secMinNum = arr[i];
    }
  }
  return { minNum, secMinNum };
}
console.log(minSecMin([5, 2, 4, 3, 6, 8], 6));
