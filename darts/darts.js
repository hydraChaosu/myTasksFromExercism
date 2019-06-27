/*export default*/ function solve(x, y) {
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
}

console.log(solve(9, -9)); //0
console.log(solve(0, 10)); //1
console.log(solve(4, 4)); //1
console.log(solve(0, 5)); //5
console.log(solve(0.8, -0.8)); //5
console.log(solve(0, -1)); //10
