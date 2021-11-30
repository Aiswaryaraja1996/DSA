function findPeak(arr, lower, upper, n) {
  if (n === 1) return -1;
  var mid = lower + parseInt((upper - lower) / 2);

  if (
    (mid == 0 || arr[mid - 1] <= arr[mid]) &&
    (mid == n - 1 || arr[mid + 1] <= arr[mid])
  )
    return mid;
  else if (mid > 0 && arr[mid - 1] > arr[mid])
    return findPeak(arr, lower, mid - 1, n);
  else return findPeak(arr, mid + 1, upper, n);
}

function runProgram(input) {
  input = input.trim().split("\n");
  var t = Number(input[0]);
  var pos = 1;
  for (var i = 0; i < t; i++) {
    var n = Number(input[pos]);
    var arr = input[pos + 1].trim().split(" ").map(Number);

    var soln = findPeak(arr, 0, n - 1, n);
    if(soln===-1)console.log(0);
    else if(soln===0)console.log(-1);
    else console.log(soln);
    pos = pos + 2;
  }
}

runProgram(`3
1
4
2
2 2
4
1 2 1 2`);
