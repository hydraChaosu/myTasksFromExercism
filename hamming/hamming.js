export const compute = (DNA1, DNA2) => {
  let count = 0;

  if (DNA1.length === DNA2.length) {
    for (let i = 0; i < DNA1.length; i++) {
      if (DNA1[i] !== DNA2[i]) {
        count++;
      }
    }
    return count;
  } else if (DNA1.length === 0) {
    throw new Error("left strand must not be empty");
  } else if (DNA2.length === 0) {
    throw new Error("right strand must not be empty");
  } else {
    throw new Error("left and right strands must be of equal length");
  }
};
