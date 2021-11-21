var count = 0;
function subSet(res,arr,l,r){
   
    if(res){   
          
        var result = res.split(" ").map(Number);
        var sum = 0; 
        for(var j = 0 ; j < result.length ; j++){
            sum = sum + Number(result[j]);
        }
      
        if(sum%2 !== 0){
           count++;
        }
    }
   
    for(var i = l ; i <= r ; i++){
        subSet(res+' '+arr[i],arr,i+1,r);
    }     
}

function runProgram(input) {
    input = input.trim().split("\n"); 
    var arr = input[1].trim().split(" ").map(Number); 
    subSet('',arr,0,arr.length-1);
    console.log(count);
}

runProgram(`3
1 2 3`);