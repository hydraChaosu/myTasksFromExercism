if (!Array.prototype.flat) {
  Array.prototype.flat = function() {
    var depth = arguments[0];
    depth = depth === undefined ? 1 : Math.floor(depth);
    if (depth < 1) return Array.prototype.slice.call(this);
    return (function flat(arr, depth) {
      var len = arr.length >>> 0;
      var flattened = [];
      var i = 0;
      while (i < len) {
        if (i in arr) {
          var el = arr[i];
          if (Array.isArray(el) && depth > 0)
            flattened = flattened.concat(flat(el, depth - 1));
          else flattened.push(el);
        }
        i++;
      }
      return flattened;
    })(this, depth);
  };
}

export class Words {
  count(string) {
    const regex = new RegExp(/\s{1,}|\\n{1,}|\\t{1,}/g);
    let allWords = string
      .toLowerCase()
      .trim()
      .split(regex);
    let results = {
      [Symbol.iterator]: function*() {
        for (let key in this) {
          yield [key, this[key]]; // yield [key, value] pair
        }
      }
    };

    allWords.forEach(element => {
      if ([...results].flat().includes(element)) {
        results[element]++;
      } else {
        results[element] = 1;
      }
    });
    delete results[Symbol.iterator];
    console.log(results);
    return results;
  }
}
