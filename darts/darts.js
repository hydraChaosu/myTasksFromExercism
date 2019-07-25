//
// This is only a SKELETON file for the 'Darts' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const solve = (x, y) => {
  /*export default*/

  // console.log(x, y);
  x = x < 0 ? x * -1 : x;
  y = y < 0 ? y * -1 : y;
  // console.log(x, y);
  const d = Math.sqrt(x * x + y * y);
  // console.log(d);
  // inner circle
  if (d <= 1) {
    return 10;
  }
  //middle circle
  if (d <= 5) {
    return 5;
  }
  //outer circle
  if (d <= 10) {
    return 1;
  }
  //outside circle
  if (d) {
    return 0;
  }

  //out = 0
  //outer = 1
  // middle =5
  //inner =15
};
