function permute(a, l, r) {
  if (l === r) {
    console.log(a);
    return;
  } else {
    for (var j = l; j <= r; j++) {
      a = swap(a, l,j);
      permute(a, l + 1, r);
      a = swap(a, j,l);
    }
  }
}

function swap(ar, m, n) {
  var temp = ar[m];
  ar[m] = ar[n];
  ar[n] = temp;
  return ar;
}

function runProgram(input) {
  input = input.trim().split("\n");
  var arr = input[1].trim().split(" ").map(Number);
  permute(arr, 0, arr.length-1);
}

runProgram(`3
1 2 3`);
