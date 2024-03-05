//Question Link => https://leetcode.com/problems/sqrtx/

//Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
//You must not use any built-in exponent function or operator.
//For example, do not use Math.pow(x, 0.5) in javascript or x ** 0.5 in python.

//Example 1:
//Input: x = 4
//Output: 2
//Explanation: The square root of 4 is 2, so we return 2.

//2**0.5 -> 2^0.5

//X = 4

function sqrtx(x) {
  let ans = -1;
  for (let i = 0; i <= x; i++) {
    if (i * i <= x) {
      ans = i; // 0 , 1 , 2
    } else {
      return ans;
    }
  }
  return ans;
}

console.log(sqrtx(12));

// 0*0 => 0  , 1*1 => 1, 2*2 => 4
