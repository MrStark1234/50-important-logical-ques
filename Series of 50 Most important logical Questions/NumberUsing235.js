// Make Numbers using 2, 3, and 5 only and return the Nth number  in that sequence.

// Example
// Input = n = 5
// Output = 23

function NumberUsing235(n) {
  let arr = [2, 3, 5];
  for (let i = 1; i < n; i++) {
    let num = arr.shift();
    arr.push(num * 10 + 2);
    arr.push(num * 10 + 3);
    arr.push(num * 10 + 5);
  }
  return arr[0];
}
console.log(NumberUsing235(13));
