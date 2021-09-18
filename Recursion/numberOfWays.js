function ways(a,sum,n,c){
    if(sum === n){
        return 0;
    }
    else{
        
        sum = sum + a;
        console.log(sum);
        ways(a,sum,n);
        
    }
}

function runProgram(input){
    var n = Number(input);
    var a = 1;
    var sum = 0;
    var c = 0;
    var soln= ways(a,sum,n,c);
    // console.log(soln);
}

runProgram("4");