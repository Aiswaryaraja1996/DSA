function loveForSamosa(a, k) {
  var sum = 0,
    i = 0;
  while (sum <= k) {
    sum += a[i];
    i++;
  }
  return i-1;
}

function runProgram(input) {
  input = input.trim().split("\n");
  var n = input[0].trim().split(" ").map(Number)[1];
  var arr = input[1].trim().split(" ").map(Number);
  arr.sort((a, b) => a - b);

  var soln = loveForSamosa(arr, n);
  console.log(soln);
}

runProgram(`4 10
5 4 2 4`);
