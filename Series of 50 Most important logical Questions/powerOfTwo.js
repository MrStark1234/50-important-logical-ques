//Given an integer n, return true if it is a power of two. Otherwise, return false.

//An integer n is a power of two, if there exists an integer x such that n == 2x.

// 1. all the numbers are divisible by 2
// 2. Devide the numbers will always return 1 at the end
// 3. The number which is not the power of 2 is not return 1 at the end.

function powerOfTwo(n) {
  if (n <= 0) return false;

  while (n % 2 == 0) n = n / 2;
  return n === 1 ? true : false;
}
console.log(powerOfTwo(2));
