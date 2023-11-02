//Implement a myAtoi function which takes a string (s), and converts a string to a 32-bit signed integer
//Ignore any leading whitespace.
//Check if the next character is '-' or '+'.Determines if the final result is negative or positive respectively.
//If there is alphabets after number then ignore it, but if there is alphabets before number then return 0.
//If the integer is out of the 32-bit signed integer range [-2**31, 2*31 - 1], then return the original value of the integer (depends on positive or negative)
//Return the integer as the final result.

//Use Case
//Input :- "42"   Output :- 42
//Input :- "      -42"   Output :-  -42
//Input :- "-42 is a negative number"   Output :-  -42
//Input :- "negative number -42"   Output :-  0
//Input :- -2147483648 +1   Output :-  -2147483648 same
//Input :- 2147483647 +1  Output :-  2147483647 same

const myAtoi = (s) => {
  let max32BitInt = 2 ** 31 - 1;
  let min32BitInt = 2 ** 31 * -1;

  let num = parseInt(s);
  //if given value is not a number
  if (Number.isNaN(num)) num = 0;
  if (num > max32BitInt) num = max32BitInt;
  if (num < min32BitInt) num = min32BitInt;

  return num;
};

// console.log(myAtoi(21474836479));
