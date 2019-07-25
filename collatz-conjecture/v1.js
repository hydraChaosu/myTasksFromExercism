export const steps = (number, count = 0) => {
  if (number == 0 || number < 0) {
    throw new Error("Only positive numbers are allowed");
  }

  if (number == 1) {
    return count;
  }
  if (number % 2 === 0) {
    number = number / 2;
    return steps(number, count + 1);
  } else {
    number = number * 3 + 1;
    return steps(number, count + 1);
  }
};
