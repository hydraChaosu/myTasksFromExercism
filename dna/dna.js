const DNA = [
  { AUG: "Methionine" },
  { UUU: "Phenylalanine" },
  { UUC: "Phenylalanine" },
  { UUA: "Leucine" },
  { UUG: "Leucine" },
  { UCU: "Serine" },
  { UCC: "Serine" },
  { UCA: "Serine" },
  { UCG: "Serine" },
  { UAU: "Tyrosine" },
  { UAC: "Tyrosine" },
  { UGU: "Cysteine" },
  { UGC: "Cysteine" },
  { UGG: "Tryptophan" },
  { UAA: false },
  { UAG: false },
  { UGA: false }
];

const rnaTranslate = RNA => {
  if (RNA.length % 3 !== 0) return "Incorrect length of RNA";
};
