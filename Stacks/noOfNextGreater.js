function runProgram(input) {
  var arr = input.trim().split(" ").map(Number);
  var stck = [];
  var res = [];
  var idx = [];

  for (var k = arr.length - 1; k >= 0; k--) {
    while (stck.length !== 0 && stck[stck.length - 1] <= arr[k]) {
      stck.pop();
      idx.pop();
    }
    if (stck.length === 0) res.push(0);
    else res.push(idx.length);
    stck.push(arr[k]);
    idx.push(k);
  }
  console.log(res.reverse());
}
runProgram(`3 4 2 7 5 8 10 6`);
