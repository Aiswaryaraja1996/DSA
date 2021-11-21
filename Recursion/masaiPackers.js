function noOfWays(k,n,l) {
    if( k === 0){
        return 1;
    }
    else if(k < 0){
        return 0;
    }
    var sum = 0;
    for (var i = 0; i < n ; i++) {
      sum = sum + noOfWays(k - l[i],n,l);
    }
     return sum;
  }
  
  function runProgram(input) {
    input = input.trim().split("\n");
    var truckSize = input[0].trim().split(" ").map(Number);
    var l = input[1].trim().split(" ").map(Number);
  
    var k = truckSize[0];
    var n = truckSize[1];
  
 
    var sum = noOfWays(k, n ,l);
    console.log(sum);
  }

  runProgram(`30 4
  8 9 4 3`);