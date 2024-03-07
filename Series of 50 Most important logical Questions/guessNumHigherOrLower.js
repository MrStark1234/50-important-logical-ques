//https://leetcode.com/problems/guess-number-higher-or-lower/
//We are playing the Guess Game. The game is as follows:

//I pick a number from 1 to n. You have to guess which number I picked.
//Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.
//You call a pre-defined API int guess(int num), which returns three possible results:

// -1: Your guess is higher than the number I picked (i.e. num > pick).
//  1: Your guess is lower than the number I picked (i.e. num < pick).
//  0: your guess is equal to the number I picked (i.e. num == pick).
//  Return the number that I picked.

// Example 1:
//Input: n = 10, pick = 6
//Output: 6

//TRY TO GIVE OPTIMAL SOLUTION

function guess(num, pick) {
  if (num == pick) {
    return 0;
  } else if (num > pick) {
    return -1;
  } else {
    return 1;
  }
}

function findNum(n, pick) {
  //   for (let i = 1; i <= n; i++) {
  //     if (guess(i, pick) === 0) {
  //       return i;
  //     }
  //   }
  let l = 1;
  let r = n;

  let mid = 0;
  while (r >= l) {
    mid = l + Math.floor((r - l) / 2);
    let result = guess(mid, pick);
    if (result === -1) r = mid - 1;
    else if (result === 1) l = mid + 1;
    else if (result === 0) break;
  }
  return mid;
}

console.log(findNum(10000, 9997));
