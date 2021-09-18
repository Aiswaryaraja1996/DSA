function runProgram(input){
	input = input.trim().split("\n");
  	var t = Number(input[0]);
  	var pos = 1;
  	for(var i = 0 ; i < t ; i++){
      var n = Number(input[pos]);
      var arr = input[pos+1].trim().split(" ").map(Number);
      var stck = [];
      var res = [];
      var idx = [];
      for(var j = 0 ; j < n ; j++){
      
        if(stck.length !== 0 && stck[stck.length - 1 ] > arr[j]){
            while(stck.length > 0){
                stck.pop();
                idx.pop();  
            }                
        }
        if(stck.length === 0 || j - 1 !== idx[idx.length -1]){
          res.push(1);
        }
        else{
          res.push(idx.length + 1);
        }
      
        stck.push(arr[j]);
        idx.push(j);   
     
      }
    	console.log(res.join(" "));
      	pos=pos+2;
    }
}

runProgram(`1
6
100 60 70 65 80 85`)