//make a function to check if a number is integer or not
//Do not use any inbuilt method

//12/1 = 12 Remainder = 0
//12.5/1 = 12 Remainder = .5

function isInt(num) {
  if (num % 1 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isInt(14));
