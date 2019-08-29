//
// This is only a SKELETON file for the 'Nucleotide-Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class NucleotideCounts {
  static parse(nucleoit) {
    const nucleoits = { A: 0, C: 1, G: 2, T: 3 };
    const result = [0, 0, 0, 0];
    for (let i = 0; i < nucleoit.length; i++) {
      if (nucleoits[nucleoit[i]] === undefined)
        throw new Error("Invalid nucleotide in strand");
      result[nucleoits[nucleoit[i]]] += 1;
    }
    return result.join(" ");
  }
}
