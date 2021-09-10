function runProgram(input){
    input = input.trim().split("\n");
    var t = Number(input[0]);
    var q = [];
    var stck = [];

    for(var i = 1 ; i <= t ; i++){
        var query = input[i].trim().split(" ");
        var optn = query[0];
        
        switch(optn){
            case '1':
                var ele = Number(query[1]);
                q.push(ele);
                break;
            case '2':
                var ele = Number(query[1]);
                stck.push(ele);
                break;
            case '3':
                if(q.length !== 0) console.log(q[0]);
                else console.log(-1);
                break;
            case '4':
                if(stck.length !== 0) console.log(stck[stck.length - 1]);
                else console.log(-1);
                break;
            case '5':
                var ele = q.shift();
                stck.push(ele);
                
        }

    }
}

runProgram(`7
1 4
2 3
1 2
3
4
5
4`)