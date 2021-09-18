function processData(input) {
    input = input.trim().split("\n");
    var t = Number(input[0]);
    var s1 = [];
    var s2 = [];
    for(var i = 1 ; i <= t ; i++){
        var optns = input[i].trim().split(" ");
        var op = optns[0];
        switch(op){
            case '1':
                while(s1.length > 0){
                    var ele = s1[s1.length-1];
                    s2.push(ele);
                    s1.pop();
                }
                s1.push(Number(optns[1]));
                while(s2.length > 0){
                    var ele = s2[s2.length-1];
                    s1.push(ele);
                    s2.pop();
                }
                break;
            case '2':
                s1.pop();
                break;
            case '3':
                console.log(s1[s1.length-1]);
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