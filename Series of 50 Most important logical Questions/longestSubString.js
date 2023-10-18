// Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest substring
// without repeating characters.

// Example: - Input: s =  "abcabcbb"
// Output:  3        The answer is "abc", with the length of 3.

const lengthOfLongestSubString = (s) => {
  let maxLength = 0;
  let left = 0;
  const uniqueWord = new Set();

  for (let right = 0; right < s.length; right++) {
    while (uniqueWord.has(s[right])) {
      uniqueWord.delete(s[left]);
      left++;
    }

    uniqueWord.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};

console.log(lengthOfLongestSubString("abcdefabcdef"));

// [bca]=uniqueWord
