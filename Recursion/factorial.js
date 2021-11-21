function factorial(inp){
    if(inp==0){
        return 1;
    }
    else{
        return inp * factorial(inp - 1);
    }
}

function runProgram(input){

input = Number(input);
var soln = factorial(input);

console.log(soln);

}

runProgram(5);