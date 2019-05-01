const TRANSFORM = {
  G: "C",
  C: "G",
  T: "A",
  A: "U"
};

export const toRna = dna => {
  return [...dna]
    .map(item => {
      const nucleotide = TRANSFORM[item];
      if (nucleotide !== undefined) {
        return nucleotide;
      } else {
        throw new Error("Invalid input DNA.");
      }
    })
    .join("");
};
