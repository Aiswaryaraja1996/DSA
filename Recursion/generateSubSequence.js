function subSequence(ans,s,l,r){
    if(l<=r+1 && ans !== ''){
        console.log(ans);
    }

    for(var i = l ; i <= r ; i++){
        subSequence(ans+s[i],s,i+1,r);
    }

}

function runProgram(input){
    input = input.trim().split("\n");
    var str = input[1].trim();
    subSequence('',str,0,str.length-1);
}

runProgram(`4
abcd`);