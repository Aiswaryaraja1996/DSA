function grpCount(n) {
  if (n === 1) {
    return "1";
  }
  var soln = grpCount(n - 1);
  var res = countChars(soln);
  return res;
}

function countChars(str) {
  if (str === "1") {
    return "11";
  } else {
    var output = "";
    var count = 1;
    for (var i = 1; i < str.length; i++) {
      var curr = str[i];
      var prev = str[i - 1];
      if (curr === prev) {
        count++;
      } else {
        output += count + prev;
        count = 1;
      }
      if (i === str.length - 1) {
        output += count + curr;
      }
    }
    return output;
  }
}

function runProgram(input) {
  var input = input.trim().split("\n");
  var t = Number(input[0]);
  for (var i = 1; i <= t; i++) {
    var result = grpCount(Number(input[i]));
    console.log(result);
  }
}

runProgram(`3
1
2
4`);
