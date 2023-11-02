//Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.
//The integer division should truncate toward zero, which means losing its fractional part.

// Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range:
//[−2**31, 2**31 − 1]. For this problem, if the quotient is strictly greater than 2**31 - 1, then return 2**31 - 1, and if the quotient is strictly less than -2**31, then return -2**31.
//For example
// Input : 8/6 = 1.33 Output : 1
// Input : -8/6 = -1.33 Output : -1

const devide = (divident, divisor) => {
  if (divisor === 0) return Infinity;

  if (divident === 0) return 0;

  if (divident === -2147483648 && divisor === -1) {
    return 2147483647;
  }

  const isNegative = divident < 0 !== divisor < 0;

  let absDivident = Math.abs(divident);
  let absDivisor = Math.abs(divisor);

  let quotient = 0;

  while (absDivident >= absDivisor) {
    absDivident -= absDivisor;
    quotient++;
  }

  return isNegative ? -quotient : quotient;
};

console.log(devide(10, 3));

//10/3    Output : 3.33

// 10 -3 = 7
// 7-3 = 4
// 4-3 = 1
