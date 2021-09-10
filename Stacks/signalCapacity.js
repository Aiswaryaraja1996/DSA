function runProgram(input) {
  input = input.trim().split("\n");
  var t = Number(input[0]);
  var pos = 1;
  for (var i = 0; i < t; i++) {
    var n = Number(input[pos]);
    var arr = input[pos + 1].split(" ").map(Number);
    var stck = [];
    var idx = [];
    var res = [];
    for (var j = 0; j < arr.length; j++) {
      while (
        stck.length !== 0 &&
        idx.length !== 0 &&
        stck[stck.length - 1] <= arr[j]
      ) {
        stck.pop();
        idx.pop();
      }
      if (stck[stck.length - 1] > arr[j]) {
        res.push(j - idx[idx.length - 1]);
        
      } else if(stck.length === 0){
        res.push(j + 1);
      }
      stck.push(arr[j]);
      idx.push(j);
    }
    console.log(res.join(" "));
    pos = pos + 2;
  }
}
runProgram(`2
7
100 110 60 60 60 75 85
5
3 5 0 9 8`);
