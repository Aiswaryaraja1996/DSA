function sqRoot(num) {
  if (num == 0 || num == 1) return num;
  var l = 1;
  var u = num / 2;
  var ans = 1;
  while (l <= u) {
    var mid =parseInt( l + (u - l) / 2);
    if (mid <= num / mid) {
      ans = mid;
      l = mid + 1;
    } else {
      u = mid - 1;
    }
  }
  return ans;
}

function runProgram(input) {
  input = input.trim().split("\n");
  var t = Number(input[0]);
  for (var i = 1; i <= t; i++) {
    var soln = sqRoot(Number(input[i]));
    console.log(soln);
  }
}

runProgram(`5
625
8
9
4
11`);
