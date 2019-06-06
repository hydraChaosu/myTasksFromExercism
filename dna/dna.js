import { ModuleMap } from "jest-haste-map";

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

const rnaTranslate = RNA => {
  if (RNA.length % 3 !== 0) throw new Error("RNA have incorrect length");
  const codonsFromRNA = [];
  for (let i = 0; i < RNA.length; i = i + 3) {
    codonsFromRNA.push(RNA.slice(i, i + 3));
  }
  const tempErr = [];
  const proteins = codonsFromRNA.map(codon => {
    if (CODONS.hasOwnProperty(codon)) {
      if (CODONS[codon] === false)
        throw new Error(`Codon ${codon} Stopped translation`);
      return CODONS[codon];
    } else {
      tempErr.push(codon);
    }
  });
  if (tempErr.length > 0)
    throw new Error(`The Codon ${tempErr} don't exist chceck the RNA`);
  return proteins;
};

module.exports = rnaTranslate;
