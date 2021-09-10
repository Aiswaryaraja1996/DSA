function runProgram(input) {
  input = input.split("\n");
  var t = (input.length - 1) / 2;
  var pos = 0;
  for (var i = 0; i < t; i++) {
    var n = Number(input[pos]);
    var arr = input[pos + 1].trim().split(" ").map(Number);
    var exp = 1;
    var sideStck = [];
    var res = [];

    var j = 0;
    while (j < n) {
      if (sideStck.length!==0 && exp === sideStck[sideStck.length - 1]) {
        res.push(sideStck[sideStck.length - 1]);
        sideStck.pop();
        exp++;
      } else if (exp === arr[j]) {
        res.push(arr[j]);
        exp++;
        j++;
      } else {
        sideStck.push(arr[j]);
        j++;
      }
    }
    while(exp === sideStck[sideStck.length - 1]) {
    
        exp++;
        res.push(sideStck[sideStck.length - 1]);
        sideStck.pop();        
   
    }
    if (sideStck.length === 0) {
      console.log("yes");
    } else {
      console.log("no");
    }
    pos = pos + 2;
  }
}
runProgram(`5 
4 1 5 3 2 
5 
3 1 2 5 4 
5 
5 3 2 1 4 
10 
1 2 10 5 4 3 7 6 8 9 
10 
1 2 10 5 4 3 9 8 7 6 
5 
3 5 2 4 1 
5 
1 2 4 3 5 
4 
4 2 3 1 
0`);
