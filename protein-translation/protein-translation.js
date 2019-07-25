//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const CODONS = {
  AUG: "Methionine",
  UUU: "Phenylalanine",
  UUC: "Phenylalanine",
  UUA: "Leucine",
  UUG: "Leucine",
  UCU: "Serine",
  UCC: "Serine",
  UCA: "Serine",
  UCG: "Serine",
  UAU: "Tyrosine",
  UAC: "Tyrosine",
  UGU: "Cysteine",
  UGC: "Cysteine",
  UGG: "Tryptophan",
  UAA: false,
  UAG: false,
  UGA: false
};

export const translate = RNA => {
  if (!RNA) return [];
  if (RNA.length % 3 !== 0) throw new Error("RNA have incorrect length");
  const codonsFromRNA = [];
  for (let i = 0; i < RNA.length; i = i + 3) {
    codonsFromRNA.push(RNA.slice(i, i + 3));
  }
  const proteins = [];
  for (let i = 0; i < codonsFromRNA.length; i++) {
    if (CODONS.hasOwnProperty(codonsFromRNA[i])) {
      if (CODONS[codonsFromRNA[i]] === false) break;
      proteins.push(CODONS[codonsFromRNA[i]]);
    } else {
      throw new Error("Invalid codon");
    }
  }

  return proteins;
};
