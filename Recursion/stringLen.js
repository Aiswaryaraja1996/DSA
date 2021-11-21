function strLen(str){
    var c = 0;
    if(!str){
        return 0;
    }
    else{
         c++;       
        return c + strLen(str.slice(1),c) ;
    }

}

function runProgram(input){

    var soln = strLen(input);
    console.log(soln);
}

runProgram('abc');