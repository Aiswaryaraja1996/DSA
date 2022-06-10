function partOrNot(a, n, k) {

  var sum = 0,
    i = 0;
  while (sum <= k && i < n) {
    sum += a[i];
    i++;
 
  }
  if (sum <= k && i-1 <= n) {
    return "Party";
  } else {
      console.log(sum,i);
    return "Sad";
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  var n = input[0].trim().split(" ").map(Number)[1];
  var k = input[0].trim().split(" ").map(Number)[2];
  var arr = input[1].trim().split(" ").map(Number);
  arr.sort((a, b) => a - b);

  var soln = partOrNot(arr, n, k);
  console.log(soln);
}

runProgram(`5 3 24
6 4 21 20 13`);
