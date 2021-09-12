function noOfWays(n) {
  if (n < 0) return 0;
  else if (n === 0 || n === 1) return 1;
  else if (n === 2) return 2;
  else if (n === 3) return 4;

  return noOfWays(n - 1) + noOfWays(n - 2) + noOfWays(n - 3);
}

function runProgram(input) {
  input = Number(input);
  var soln = noOfWays(input);
  console.log(soln);
}

runProgram(`4`);
