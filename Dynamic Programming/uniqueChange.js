function runProgram(input) {
  var input = input.trim().split("\n");
  var target = input[0].trim().split(" ").map(Number)[0];
  var n = input[0].trim().split(" ").map(Number)[1];
  var arr = input[1].trim().split(" ").map(Number);
  var soln = uniqueWay(arr, n, target);
  console.log(soln);
}

function uniqueWay(a, n, t) {
  var dp = Array(t + 1).fill(0);
  dp[0] = 1;
  for (var i = 0; i < n; i++) {
    for (var j = a[i]; j <= t; j++) {
      dp[j] += dp[j - a[i]];
    }
  }
  
  return dp[t];
}

runProgram(`4 3
1 2 3`);
