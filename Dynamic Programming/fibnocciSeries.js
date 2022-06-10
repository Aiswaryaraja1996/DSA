function runProgram(input){
    var soln = fib(Number(input));
    console.log(soln);
}
function fib(n){
    var fib=[]
    fib[0]=0;
    fib[1]=1;
    for(var i=2 ;i <= n; i++){
        fib[i] = fib[i-1] + fib[i-2];
    }

    return fib[n];
}

runProgram(4);