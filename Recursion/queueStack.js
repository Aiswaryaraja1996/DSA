function processData(input) {
    input = input.trim().split("\n");
    var t = Number(input[0]);
    var q1 = [];
    var q2 = [];
    for(var i = 1 ; i <= t ; i++){
        var optns = input[i].trim().split(" ");
        var op = optns[0];
        switch(op){
            case '1':
                var ele = Number(optns[1]);
                q1.push(ele);            
                break;
            case '2':
                while(q1.length > 1){
                    var ele = q1.shift();
                    q2.push(ele);
                }
                q1.pop();

                break;
            case '3':
                
                break;
                
        }
    }
 
} 

processData(`10
1 42
2
1 14
3
1 28
3
1 60
1 78
2
2`)