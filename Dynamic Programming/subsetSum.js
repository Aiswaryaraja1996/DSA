function runProgram(input) {
  input = input.trim().split("\n");
  var n = Number(input[0]);
  var arr = input[1].trim().split(" ").map(Number);
  var sum = Number(input[2]);
  var dp = Array(n+1).fill().map(() => Array(sum+1).fill(-1));
  var soln = subsetSum(arr, n, sum, dp);

  soln ? console.log("yes") : console.log("no");
}

function subsetSum(a, n, s, dp) {
 
  if (s == 0) return true;
  if (n <= 0) return false;
  if (dp[n][s] != -1) return dp[n][s];
  if (a[n - 1] > s) return (dp[n][s] = subsetSum(a, n - 1, s, dp));
  else
    return (dp[n][s] = subsetSum(a, n - 1, s - a[n - 1], dp) || subsetSum(a, n - 1, s, dp)
       );
}

runProgram(`5
10000 20001 30001 6999 900001
120001`);
