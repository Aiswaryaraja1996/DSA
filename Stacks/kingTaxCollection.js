function runProgram(input) {
  input = input.trim().split("\n");
  var n = Number(input[0]);
  var arr = input[1].split(" ").map(Number);
  arr.sort(function (a, b) {
    return a - b;
  });
  var sum = 0;
  for (var i = 2 * n - 1; i >= n; i--) {
    sum += arr[i];
  }
  console.log(sum);
}

runProgram(`2
1 3 1 2`)
