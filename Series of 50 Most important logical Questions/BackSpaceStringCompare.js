//Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.
//Note that after backspacing an empty text, the text will continue empty.

//Example 1:

// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".
//----------------------------------------------------------------------------------
//Example 2:

// Input: s = "a#c", t = "b"
// Output: false
// Explanation: s becomes "c" while t becomes "b".

var backspaceCompare = function (s, t) {
  function processString(str) {
    const arr = [];
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (char === "#") {
        arr.pop();
      } else {
        arr.push(char);
      }
    }
    return arr.join("");
  }

  return processString(s) === processString(t);
};

console.log(backspaceCompare("a#c", "b"));
