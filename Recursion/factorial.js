function fact(n){
    if(n <= 1) return 1;
    else{
        return (n * fact(n-1));
    }
}

function runProgram(input){
    input = Number(input);
    var soln = fact(input);
    console.log(soln);
}

runProgram(5);