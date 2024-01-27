//Write a function which takes N number of rows to make a structure like Pyramid.

//       *
//      ***
//     *****
//    *******
//   *********

// *  ******      *
// *  ******     ***
// *  ******    *****
// *  ******   *******
// *  ******  *********
// *  ******

function pyramidPattern(N) {
  for (let r = 1; r <= N; r++) {
    let space = "";
    let star = "";
    for (let s = 1; s <= N - r; s++) {
      space += " ";
    }
    for (let c = 1; c <= 2 * r - 1; c++) {
      star += "*";
    }

    console.log(space + star);
  }
}
console.log(pyramidPattern(8));
