function runProgram(input) {
  input = input.trim().split("\n");
  var n = Number(input[0]);
  var arr = input[1].trim().split(" ").map(Number);

  var dp = Array(n).fill(1);

    var max = 0;

  for (var i = 1; i < n; i++)
    for (var j = 0; j < i; j++)
      if (arr[i] > arr[j] && dp[i] < dp[j] + 1) dp[i] = dp[j] + 1;

  for (i = 0; i < n; i++) if (max < dp[i]) max = dp[i];

  console.log(max);
}

runProgram(`9
10 22 9 33 21 50 41 60 80`);
