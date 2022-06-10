function runProgram(input) {
  input = input.trim().split("\n");
  var str1 = input[0];
  var str2 = input[1];

  var soln = commonSequence(str1, str2, str1.length, str2.length);
  console.log(soln);
}

function commonSequence(s1, s2, m, n) {
  var dp = new Array(m + 1);
  for (var i = 0; i < dp.length; i++) {
    dp[i] = new Array(n + 1);
  }

  for (var i = 0; i <= m; i++) {
    for (var j = 0; j <= n; j++) {
      if (i == 0 || j == 0) dp[i][j] = 0;
      else if (s1[i - 1] == s2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }

  return dp[m][n];
}

runProgram(`AEDFHR
ABCDGH`);
