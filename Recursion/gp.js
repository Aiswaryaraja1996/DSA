function gcd(n, r) {
  if (n < 1) return 0;
  else {
    return Math.pow(r, -n) + gcd(n - 1, r);
  }
}

function runProgram(input) {
  input = input.trim().split(" ").map(Number);

  var soln = gcd(input[0], input[1]);

  console.log((soln + 1).toFixed(4));
}

runProgram(`3 5`);
