//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = string => {
  const a = string.split("");
  let long = 1;
  let result = "";

  for (let i = 0; i < a.length; i++) {
    if (a[i] === a[i + 1]) {
      long++;
    } else {
      if (long === 1) {
        result += a[i];
      } else {
        result += `${long}${a[i]}`;
      }
      long = 1;
    }
  }
  return result;
};

export const decode = string => {
  const a = string.split("");
  let result = "";
  let numLen = "";
  for (let i = 0; i < a.length; i++) {
    debugger;
    if (a[i] * 0 === 0 && a[i] !== " ") {
      debugger;
      const temNum = a[i] * 1;
      numLen += temNum;
    } else {
      debugger;
      if (numLen === "") {
        result += a[i];
        debugger;
      } else {
        for (let enu = 0; enu < numLen; enu++) {
          result += a[i];
        }
        // result += numLen + a[i];
        debugger;
      }
      numLen = "";
      debugger;
    }
  }
  console.log(result);
  return result;
};

encode("WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB");
decode("12WB12W3B24WB");
