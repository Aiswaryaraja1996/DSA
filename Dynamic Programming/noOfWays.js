function runProgram(input) {
    var soln = noOfWays(Number(input));
    console.log(soln);
}

function noOfWays(n) {
    var ways = [];
    ways[0]=0;
    ways[1]=1;
    ways[2]=2;
    ways[3]=4;
    for(var i=4 ; i <= n ; i++) {
        ways[i]=ways[i-1] + ways[i-2] + ways[i-3];
    }
    return ways[n];
}

runProgram(4)