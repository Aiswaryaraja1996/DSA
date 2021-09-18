function runProgram(input){
    input = input.trim().split("\n");
    var t = Number(input[0]);
    var q = [];
    for(var i = 1 ; i <= t ; i++){
        var optns = input[i].trim().split(" ");
        var op = optns[0];
        switch(op){
            case 'E':
                q.push(Number(optns[1]));
                break;
            case 'D':
                q.shift();
                break;
            case 'R':
                var stck = [];
                while(q.length > 0){
                   var ele =  q.shift();
                   stck.push(ele);                   
                }
                while(stck.length > 0){
                    var ele = stck.pop();
                    q.push(ele);
                }
                break;

        }
        console.log(q);
    }
}

runProgram(`5
E 1
E 2
E 3
R
D`)