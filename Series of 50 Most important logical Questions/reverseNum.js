// Write a JavaScript function which Reverse a Number without using any InBuilt method.

const reverseKardo = (num) => {
  if (typeof num !== "number") return 0;
  let reverse = 0;
  while (num > 0) {
    let rem = num % 10;
    reverse = reverse * 10 + rem;
    num = Math.floor(num / 10);
  }
  return reverse;
};

console.log(reverseKardo(1234));

//1234

// rem =
// reverse = 4321
// num = 123

let str = "abcd";
let re = str.reverse();
console.log(re);
