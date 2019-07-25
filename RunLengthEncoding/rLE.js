function rleEncode(string) {
  const a = string.split("");
  let cut = 0;
  let long = 1;
  let result = "";

  for (let i = 0; i < a.length; i++) {
    if (a[i] === a[i + 1]) {
      long++;
    } else {
      console.log(long, a[i]);
      if (long === 1) {
        result += a[i];
      } else {
        result += `${long}${a[i]}`;
      }
      long = 1;
    }
  }

  // for (let i = 0; i < a.length; i++) {
  //   // console.log(1);
  //   debugger;
  //   if (a[i] === a[i + 1]) {
  //     cut++;
  //     debugger;
  //   } else {
  //     if (cut > 0) {
  //       // console.log(a.slice(i, cut));
  //       result += a.slice(i - cut, i - cut + cut + 1).join("");
  //       debugger;
  //     } else {
  //       // console.log(a.slice(i, cut));
  //       result += a.slice(i, i + 1).join("");
  //       debugger;
  //     }
  //     cut = 0;
  //     debugger;
  //   }
  // }
  // console.log(string === result);

  console.log(result);
  console.log(result === "12WB12W3B24WB");
}

function rleDecode(str) {
  const a = str.split("");
  for (let i = 0; i < a.length; i++) {
    // console.log(a[i]);
    if (typeof parseInt(a[i]) === Number) {
      console.log(a[i]);
    }
  }
}

// WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB
// -->
//12WB12W3B24WB

// AABCCCDEEEE
//  -->
// 2AB3CD4E
// rleEncode("WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB");
rleDecode("12WB12W3B24WB");
