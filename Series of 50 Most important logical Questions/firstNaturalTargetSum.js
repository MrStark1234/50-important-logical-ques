// Given two integers targetCount and targetSum, find and print the first targetCount integers whose digits sum up to targetSum. The program should output these integers in increasing order.
// Example:
// Suppose the user inputs targetCount = 3 and targetSum = 5.

// The program will find and print the first three integers whose digits' sum equals 5.
// For example, if the digits' sum of a number is 5, it can be 5, 14, 23, 32 , 41 etc.

// targetCount = 3    1+4 = 5   = 14   2+3 = 5  = 23
// targetSum = 5

// 1 2 3 4    '5'   6 7 8 9 10 11 12 13 1+4 = 5 2+3 = 5

function firstNaturalTargetSum(targetCount, targetSum) {
  let count = 0;
  let curNum = 1;
  let result = [];

  while (count < targetCount) {
    let curSum = 0;
    for (let i = curNum; i > 0; i = Math.floor((i /= 10))) {
      curSum += i % 10;
    }
    if (curSum === targetSum) {
      result.push(curNum);
      count++;
    }
    curNum++;
  }
  return result;
}
console.log(firstNaturalTargetSum(10, 5));
