function runProgram(input) {
  input = input.trim().split("\n");
  var t = Number(input[0]);
  var pos = 1;
  for (var j = 0; j < t; j++) {
    var n = Number(input[pos]);
    var arr = input[pos + 1].trim().split(" ").map(Number);
    var stck = [];
    var res = [];
    for (var i = arr.length - 1; i >= 0; i--) {
      while (stck.length !== 0 && stck[stck.length - 1] <= arr[i]) {
        stck.pop();
      }
      if (stck.length === 0) {
        res.push(-1);
      } else {
        res.push(stck[stck.length - 1]);
      }
      stck.push(arr[i]);
    }
    res.reverse();
    console.log(res.join(" "));
    pos = pos + 2;
  }
}

runProgram(`1
4
1 3 2 4`);
