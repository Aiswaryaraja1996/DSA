function runProgram(input){
    input=input.trim().split("\n");
    var n = Number(input[0]);
    var q = [];
    for(var i = 1 ; i <= n ; i++){
        var optns = input[i].trim().split(" ");
        var op = optns[0]; 
        if(op === 'E'){
            var ele = Number(optns[1]);
            q.push(ele);
            console.log(q.length);                              
        }
        else if(op === 'D') {         
            var removedEle = q.shift();
            if(!removedEle){
                console.log(`-1 0`);
            }
            else{
                console.log(`${removedEle} ${q.length}`)
            }
        }
      
    }

}

runProgram(`5
E 2
D
D
E 3
D`)