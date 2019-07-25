//
// This is only a SKELETON file for the 'Roman Numerals' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRoman = num => {
  // let mynum = num
  let result = "";
  const numbersTranslate = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I"
  };

  const reversedKeys = Object.keys(numbersTranslate).reverse();

  do {
    for (let i = 0; i < Object.keys(numbersTranslate).length; i++) {
      // console.log(num,numberCheck[i], num >numberCheck[i])
      if (num >= reversedKeys[i]) {
        num = num - reversedKeys[i];
        result += numbersTranslate[reversedKeys[i]];
        break;
      }
    }
  } while (num > 0);
  console.log(result);
  return result;
};
