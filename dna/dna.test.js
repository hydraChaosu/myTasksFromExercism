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
    let thrownError;
    try {
      rnaTranslation(RNA);
    } catch (error) {
      thrownError = error;
    }
    expect(thrownError).toEqual(Error("Codon UAA Stopped translation"));
  });
  it("throw an error when RNA have wrong length", () => {
    const RNA = "AUGUAACU";
    let thrownError;
    try {
      rnaTranslation(RNA);
    } catch (error) {
      thrownError = error;
    }
    expect(thrownError).toEqual(Error("RNA have incorrect length"));
  });
  it("throw an error when codon is not existing", () => {
    const RNA = "AUGZZZBBB";
    let thrownError;
    try {
      rnaTranslation(RNA);
    } catch (error) {
      thrownError = error;
    }
    expect(thrownError).toEqual(
      Error("The Codon ZZZ,BBB don't exist chceck the RNA")
    );
  });
});
