function runProgram(input) {
  input = input.trim().split("\n");
  var t = Number(input[0]);
  var pos = 1;
  for (var i = 0; i < t; i++) {
    var str1 = input[pos];
    var str2 = input[pos + 1];

    var n = str1.length;
    var m = str2.length;

    var dp = Array(n + 1)
      .fill()
      .map(() => Array(m + 1).fill(-1));

    console.log(editDistance(str1, str2, n, m, dp));

    pos += 2;
  }
}

function editDistance(str1, str2, n, m, dp) {
  if (n === 0) return m;
  if (m === 0) return n;

  if (dp[n][m] !== -1) {
    return dp[n][m];
  }

  if (str1[n - 1] === str2[m - 1]) {
    if (dp[n - 1][m - 1] === -1) {
      return (dp[n][m] = editDistance(str1, str2, n - 1, m - 1, dp));
    } else {
      return (dp[n][m] = dp[n - 1][m - 1]);
    }
  } else {
    let t1, t2, t3; 
    if (dp[n - 1][m] != -1) {
      t1 = dp[n - 1][m];
    } else {
      t1 = editDistance(str1, str2, n - 1, m, dp);
    }

    if (dp[n][m - 1] != -1) {
      t2 = dp[n][m - 1];
    } else {
      t2 = editDistance(str1, str2, n, m - 1, dp);
    }

    if (dp[n - 1][m - 1] != -1) {
      t3 = dp[n - 1][m - 1];
    } else {
      t3 = editDistance(str1, str2, n - 1, m - 1, dp);
    }
    return (dp[n][m] = 1 + Math.min(t1, Math.min(t2, t3)));
  }
}

runProgram(`3
abcde
abde
abde
abcde
abcde
abxde
`);
