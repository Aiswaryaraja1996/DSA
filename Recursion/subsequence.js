function subSequence(s, r, obj) {
  if (r.length !== 0 && s.length !== 0) {
    if (!(r in obj)) {
      console.log(r);
      obj[r] = 0;
    }
  } else if (s.length === 0) {
    if (!(r in obj)) {
      console.log(r);
      obj[r] = 0;
    }
    return;
  }

  subSequence(s.substr(1), r + s[0] , obj);
  
  subSequence(s.substr(1), r ,obj);
}

function runProgram(input) {
  input = input.trim().split("\n");
  var str = input[1];
  var obj = {};
  var res = "";
  subSequence(str, res, obj);
}

runProgram(`4
abcd`);



// a
// ab
// abc
// abcd
// abd
// ac
// acd
// ad
// b
// bc
// bcd
// bd
// c
// cd
// d
