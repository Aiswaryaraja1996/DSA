function runProgram(input) {
  input = input.trim().split("\n");
  var n = Number(input[0]);
  var arr = input[1].trim().split(" ").map(Number);
  var x = [];
  var idx = [];
  var y = [];
  var stck = [];
  for (var i = 0; i < n; i++) {
    while (stck.length !== 0 && stck[stck.length - 1] <= arr[i]) {
      stck.pop();
      idx.pop();
    }
    if (stck.length === 0) x.push(-1);
    else x.push(idx[idx.length - 1]);
    stck.push(arr[i]);
    idx.push(i + 1);
  }
  var stck = [];
  for (var i = n - 1; i >= 0; i--) {
    while (stck.length !== 0 && stck[stck.length - 1] <= arr[i]) {
      stck.pop();
      idx.pop();
    }
    if (stck.length === 0) y.push(-1);
    else y.push(idx[idx.length - 1]);
    stck.push(arr[i]);
    idx.push(i + 1);
  }
  y.reverse();
  var res = [];
  for (var k = 0; k < n; k++) {
    res.push(x[k] + y[k]);
  }
  console.log(res.join(" "));
}

runProgram(`5
5 4 1 3 2`);
