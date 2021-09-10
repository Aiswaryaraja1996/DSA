function strLen(str){

    if(str === ''){
        return 0;
    }
    else{
       
        return strLen(str.slice(1)) + 1;
    }
}


function runProgram(input){
    input = String(input);
    
    var soln = strLen(input);
    console.log(soln);

}

runProgram("string");