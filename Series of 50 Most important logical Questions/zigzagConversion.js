// Zigzag Conversion
//Example:
// Input: s =  "ABCDEFGHIJK" , numRows = 3
// Output: "AEIBDFHJCGK"

const zigzagConversion = (s, numRows) => {
  if (numRows === 1) return s;

  const row = Array.from({ length: numRows }, () => "");

  let currentRow = 0;
  let goDown = false;

  for (i = 0; i < s.length; i++) {
    row[currentRow] += s[i];

    if (currentRow === 0 || currentRow === numRows - 1) {
      goDown = !goDown;
    }
    currentRow += goDown ? 1 : -1;
  }
  return row.join("");
};

console.log(zigzagConversion("ABCDEFGHIJKL", 3));
