function gcd(a, b) {
  var rem = a % b;
  if (rem === 0) return b;
  return gcd(b, rem);
}

function runProgram(input) {
  input = input.trim().split("\n");
  var t = Number(input[0]);
  for (var i = 1; i <= t; i++) {
    var nums = input[i].trim().split(" ").map(Number);
    if (nums[0] > nums[1]) {
      var soln = gcd(nums[0], nums[1]);
    } else {
      var soln = gcd(nums[1], nums[0]);
    }
    console.log(soln);
  }
}

runProgram(`2
6 9
2 25`);
