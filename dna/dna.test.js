const rnaTranslation = require("./dna");

describe("tests RNA translation to proteins", () => {
  it("works", () => {
    const RNA = "AUGUUUUCU";
    expect(rnaTranslation(RNA)).toEqual([
      "Methionine",
      "Phenylalanine",
      "Serine"
    ]);
  });
  it("stops translation after catching wrong RNA", () => {
    const RNA = "AUGUAAUCU";
    expect(rnaTranslation(RNA)).toEqual("Codon UAA Stopped translation");
  });
  it("throw an error when RNA have wrong length", () => {
    const RNA = "AUGUAACU";
    expect(rnaTranslation(RNA)).toEqual("RNA have incorrect length");
  });
  it("throw an error when codon is not existing", () => {
    const RNA = "AUGZZZBBB";
    expect(rnaTranslation(RNA)).toEqual(
      "Codon ['ZZZ','BBB'] don't exist chceck RNA  "
    );
  });
});
