export const classify = number => {
  if (number <= 0)
    throw new Error("Classification is only possible for natural numbers.");
  if (number === 1) return "deficient";

  let nFactors = factors(number);
  const result = nFactors.reduce((prev, curr) => prev + curr);
  if (result === number) {
    return "perfect";
  } else if (result > number) {
    return "abundant";
  } else {
    return "deficient";
  }
};

const factors = number => {
  let result = [];
  for (let i = 0; i < number; i++) {
    if (number % i === 0) {
      result = result.concat(i);
    }
  }
  return result;
};
