function runProgram(input) {
  input = input.trim().split("\n");
  var t = Number(input[0]);
  var pos = 1;  
  for (var i = 0; i < t; i++) {
    var n = Number(input[pos]);
    var stck = [];
    var arr = input[pos + 1].split(" ").map(Number);
    arr.sort((a, b) => a - b);
    for (var j = 0; j < arr.length; j++) {
      if (stck.length === 0 || arr[j] !== stck[stck.length - 1]) {
        stck.push(arr[j]);
      } else {
        stck.pop();
      }
    }
    console.log(stck.join(" "));
    pos = pos + 2;
  }
}

runProgram(`2
1
5
5
1 2 1 3 2`);
