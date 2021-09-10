function binaryEq(n) {
  if (n === 0) return 0;
  else {
    return (n % 2) + 10 * binaryEq(Math.floor(n / 2));
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  var t = Number(input[0]);

  for (var i = 1; i <= t; i++) {
    var n = Number(input[i]);
    var soln = binaryEq(n);
    console.log(soln);
  }
}

runProgram(`2
15
83719`);
