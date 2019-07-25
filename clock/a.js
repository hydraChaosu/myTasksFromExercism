const min = 0;
const max = 100;
function showOdd(min = 0, max = 100) {
  if (min % 2 === 1) {
    for (let i = min; i <= max; i = i + 2) {
      console.log(i);
    }
  } else {
    for (let i = min + 1; i <= max; i = i + 2) {
      console.log(i);
    }
  }
}
showOdd(1, 100);
showOdd(0, 100);
