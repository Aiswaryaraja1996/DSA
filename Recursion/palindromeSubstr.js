function palindromeCheck(input, j, k, list) {
  while (j >= 0 && k < input.length) {
    if (input[j] != input[k]) {
      break;
    }
    list.push(input.substring(j, k + 1));

    j--;
    k++;
  }
}

function palindromeSubstr(input, j, k, list) {
  var list = [];

  for (let i = 0; i < input.length; i++) {
    palindromeCheck(input, i, i, list);
    palindromeCheck(input, i, i + 1, list);
  }
  list.push(-1);
  console.log(list.join(" "));
}

function runProgram(input) {
  input = input.trim().split("\n");
  var t = Number(input[0]);
  var pos = 1;
  for (var i = 0; i < t; i++) {
    var str = input[pos + 1];
    palindromeSubstr(str, 0, 0);
    pos = pos + 2;
  }
}

runProgram(`2
3
abc
4
aaaa`);
