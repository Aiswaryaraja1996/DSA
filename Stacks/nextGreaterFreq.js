function runProgram(input) {
  var a = input.trim().split(" ").map(Number);

  var freq = [];
  var obj = {};
  for (var j = 0; j < a.length; j++) {
    if (obj[a[j]]) {
      obj[a[j]]++;
    } else {
      obj[a[j]] = 1;
    }
  }
  for (i = 0; i < a.length; i++) {
    if (obj[a[i]]) {
      freq.push(obj[a[i]]);
    }
  }
  console.log(obj);
  var stck = [];
  var res = [];
  var idx = [];
  for (var k = freq.length - 1; k >= 0; k--) {
    while (stck.length !== 0 && stck[stck.length - 1] <= freq[k]) {
      stck.pop();
      idx.pop();
    }
    if (stck.length === 0) res.push(-1);
    else res.push(a[idx[idx.length - 1]]);
    stck.push(freq[k]);
    idx.push(k);
  }
  console.log(res.reverse().join(" "));
}
runProgram(`1 1 2 3 4 2 1`);
