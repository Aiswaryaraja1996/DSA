function binaryEq(n) {
  if (n === 1) return 1;
  else{
    var a = n % 2;
    return binaryEq(Math.floor(n / 2)) + "" + a;

  }    

}

function runProgram(input) {
  input = input.trim().split("\n");
  var t = Number(input[0]);

  for (var i = 1; i <= t; i++) {
    var n = Number(input[i]);
    var soln = binaryEq(n);
    console.log(soln);
  }
}

runProgram(`9
49301
99864
22929
94209
57010
43022
2894
78255
64788`);





1100000010010101
11000011000011000
101100110010001
10111000000000001
1101111010110010
1010100000001110
101101001110
10011000110101111
1111110100010100