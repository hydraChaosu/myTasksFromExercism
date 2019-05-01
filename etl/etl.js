export const transform = scrabble => {
  let newScrabble = {};
  for (let points of Object.keys(scrabble)) {
    for (let letter of scrabble[points]) {
      newScrabble[letter.toLowerCase()] = Number(points);
    }
  }
  return newScrabble;
};
