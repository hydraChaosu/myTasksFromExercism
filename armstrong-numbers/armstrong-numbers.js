//
// This is only a SKELETON file for the 'Armstrong numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const validate = number => {
  const numberLength = String(number).length;
  const numbers = String(number).split("");
  const result = numbers.reduce((acc, cur) => {
    return (acc = acc + cur ** numberLength);
  }, 0);
  return result === number;
};
