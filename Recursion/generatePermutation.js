function permute(a, l, r) {
    if (l === r) {
      console.log(a.split("").join(" "));
      return;
    } else {
      for (var j = l; j <= r; j++) {
        a = swap(a, l, j);
        permute(a, l + 1, r);
        // a = swap(a, j, l);
      }
    }
  }
  
  function swap(ar, m, n) {
    var chr = ar.split("");
    var temp = chr[m];
    chr[m] = chr[n];
    chr[n] = temp;
    return chr.join("");
  }
  
  function runProgram(input) {
    input = input.trim().split("\n");
    var arrStr = input[1].trim().split(" ").join("");
    permute(arrStr, 0, arrStr.length - 1);
  }

  runProgram(`3
  1 2 3`)