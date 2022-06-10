function runProgram(input) {
  input = input.trim().split("\n");
  var t = Number(input[0]);
  var pos = 1;
  for (var i = 0; i < t; i++) {

    var str1 = input[pos];
    var str2 = input[pos + 1];



    var count = 0;

    for (let i = 0; i < str2.length && count < str1.length; i++) {
      if (str1[count] === str2[i]) {
        count++;
      }
    }

    count === str1.length ? console.log("YES") : console.log("NO");

    pos+=2;
  }
}

runProgram(`2
abc
adbce
ax
xaa`);
