
var min = Number.MAX_SAFE_INTEGER;
var max = Number.MIN_SAFE_INTEGER;


function noOfWays(sum, result, array, k) {
  for (var l = 1; l <= array.length; l++) {
    if (sum === k) {
      var result_b = result;
      if (result_b.split(",").length < min) min = result_b.split(",").length;
      if (result_b.split(",").length > max) max = result_b.split(",").length;
      break;
    } else {
      var sum_b = sum + array[l - 1];
      var result_b = result + "," + array[l - 1];
      if (sum_b == k) {
        if (result_b.split(",").length < min) min = result_b.split(",").length;
        if (result_b.split(",").length > max) max = result_b.split(",").length;
      } else {
        if (sum_b < k)
        noOfWays(sum_b, result_b, array, k);
      }
    }
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  var truckSize = input[0].trim().split(" ").map(Number);
  var l = input[1].trim().split(" ").map(Number);

  var k = truckSize[0];
  var n = truckSize[1];
  for (var i = 0; i < l.length; i++) {
    var ans = String(l[i]);
    var sum = l[i];
    noOfWays(sum, ans,l, k);
  }

  if(min === Number.MAX_SAFE_INTEGER || max === Number.MIN_SAFE_INTEGER ) console.log(-1);
  else console.log(min, max);
}


runProgram(`39 3
8 10 2`)