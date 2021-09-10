function runProgram(input) {
  input = input.trim().split("\n");
  var t = Number(input[0]);
  var pos = 1;
  for (var i = 0; i < t; i++) {
    var n = Number(input[pos]);
    var str = input[pos + 1];
    var stck = [];
    var chk = true;
    for (var j = 0; j < n; j++) {
      if (str[j] === str[j].toUpperCase()) {
        stck.push(str[j]);
      } else {
        var chr = stck.pop();
        if(!chr) var code = 0;
        else code = chr.charCodeAt();

        if ((Math.abs(code - str[j].charCodeAt()) !== 32)) {
          chk = false;
        }
      }
    }
    if (stck.length !== 0 || chk === false) {
      console.log("not balanced");
    } else {
      console.log("balanced");
    }
    pos+=2;
  }

}

runProgram(`2
6
ABCcba
6
oooooo`);
