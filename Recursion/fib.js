function noOfWays(n) {

    if(n === 3 || n === 7 || n === 0){
        return 1;
    }

    else if (n < 0 ) return 0; 
   
  
    return noOfWays(n - 3) + noOfWays(n - 10) + noOfWays(n - 7);
  }
  
  function runProgram(input) {
    input = Number(input);
    var soln = noOfWays(input);
    console.log(soln);
  }

  runProgram(38);