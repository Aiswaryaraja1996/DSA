function runProgram(input) {
  input = input.trim().split("\n");
  var n = Number(input.shift());
  var arr = [];
  var idx = [];
  for (var i = 0; i < n; i++) {
    arr.push(Number(input[i]));
  }
  var stck = [];
  //   var res = [];
  var resIdx = [];
  for (var j = n - 1; j >= 0; j--) {
    while (
      stck.length !== 0 &&
      idx.length !== 0 &&
      stck[stck.length - 1] <= arr[j]
    ) {
      stck.pop();
      idx.pop();
    }
    if (stck.length === 0 || idx.length === 0) {
      //   res.push(-1);
      resIdx.push(-1);
    } else {
      //   res.push(stck[stck.length - 1]);
      resIdx.push(idx[idx.length - 1]);
    }
    stck.push(arr[j]);
    idx.push(j);
  }
  //   res.reverse()

  var result = [];
  var small = [];
  var smallIdx = [];

  for (var k = n - 1; k >= 0; k--) {
    while (
      small.length !== 0 &&
      smallIdx.length !== 0 &&
      small[small.length - 1] >= arr[k]
    ) {
      small.pop();
      smallIdx.pop();
    }
    if (small.length === 0 || smallIdx.length === 0) {
      result.push(-1);
    } else {
      result.push(smallIdx[smallIdx.length - 1]);
    }
    small.push(arr[k]);
    smallIdx.push(k);
  }
  result.reverse();
  resIdx.reverse();
  var final = [];
  for (var m = 0; m < resIdx.length; m++) {
    var pos = resIdx[m];
    if (result[pos] === -1 || pos === -1) {
      final.push(-1);
    } else {
      final.push(arr[result[pos]]);
    }
  }
  console.log(final.join(" "));
}
runProgram(`8
3
7
1
7
8
4
5
2`);
