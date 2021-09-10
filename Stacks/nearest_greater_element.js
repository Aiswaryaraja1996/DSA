function runProgram(input){
	input = input.trim().split("\n");
  	var t = Number(input[0]);
  	var pos = 1;
  	for(var i = 0 ; i < t ; i++){
      var n = Number(input[pos]);
      var arr = input[pos+1].trim().split(" ").map(Number);
      var lstck = [];
      var rstck = [];
      var rres = [];
      var lres = [];
      var ridx = [] ;
      var ridxres = [];
      var lidx = [];
      var lidxres = [];
      for(var j = n - 1 ; j >= 0 ; j--){
        while(rstck.length !== 0 && rstck[rstck.length - 1 ] <= arr[j]){
          rstck.pop();
          ridx.pop();
        }
        if(rstck.length === 0){
          rres.push(-1);
          ridxres.push(-1);
        }
        else{
          rres.push(rstck[rstck.length - 1]);
          ridxres.push(ridx[ridx.length -1 ]);
        }
        rstck.push(arr[j]);
        ridx.push(j);
      }
      rres.reverse();
      ridxres.reverse();
      for(var j = 0 ; j < arr.length ; j++){
        while(lstck.length !== 0 && lstck[lstck.length - 1 ] <= arr[j]){
          lstck.pop();
          lidx.pop();
        }
        if(lstck.length === 0){
          lres.push(-1);
          lidxres.push(-1);
        }
        else{
          lres.push(lstck[lstck.length - 1]);
          lidxres.push(lidx[lidx.length - 1]);
        }
       lstck.push(arr[j]);
        lidx.push(j);
      }
      var finalres = [];
      for(var k = 0 ; k < n ; k++){
      
        if(Math.abs(lidxres[k] - ridxres[k]) === k){
          finalres.push(lres[k]);
        }
        else{
        finalres.push(Math.max(lres[k],rres[k]));
        }
      }
      console.log(finalres.join(" "));
      pos = pos + 2;
    }
      
}

runProgram(`1
5
5 4 1 3 2`);