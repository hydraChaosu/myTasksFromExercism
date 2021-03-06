export const steps = (number, count = 0) => {
  if (number == 0 || number < 0) {
    throw new Error("Only positive numbers are allowed");
  }

  if (number == 1) {
    return count;
  }
  if (number % 2 === 0) {
    return steps(number / 2, count + 1);
  } else {
    return steps(number * 3 + 1, count + 1);
  }
};
