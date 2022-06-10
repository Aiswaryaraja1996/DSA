function runProgram(input) {
  input = input.trim().split("\n");
  var k = Number(input[0]);
  var arr = input[1]
    .trim()
    .split(" ")
    .map((item) => Number(item.split(":").join("")));
  var dep = input[2]
    .trim()
    .split(" ")
    .map((item) => Number(item.split(":").join("")));

  arr.sort((a, b) => a - b);
  dep.sort((a, b) => a - b);

  var soln = arrDep(k, arr, dep);
  console.log(soln);
}

function arrDep(k, arr, dep) {
  var pf = 1;
  var i = 1;
  var j = 0;
  var res = 1;
  while (i < k && j < k) {
    if (arr[i] <= dep[j]) {
      pf++;
      i++;
    } else if (arr[i] > dep[j]) {
      pf--;
      j++;
    }
    if (pf > res) {
      res = pf;
    }
  }
  return res;
}

runProgram(`6
9:00 9:40 9:50 11:00 15:00 18:00
9:10 12:00 11:20 11:30 19:00 20:00`);
