function powRec(a,b){
    if(b == 0){
        return 1;
    }
    else{
        --b;
        return a*powRec(a,b);
    }
}

function runProgram(input){
    input = input.trim().split(" ");
    var a = Number(input[0]);
    var b = Number(input[1]);

    var soln = powRec(a,b);
    console.log(soln);

}

runProgram(`3 2`)