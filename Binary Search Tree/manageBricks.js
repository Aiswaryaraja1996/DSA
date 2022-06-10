function manageBricks(i,f,x,y){
    var ans = 0
    for(var j=0;j<f.length;j++){
        
        if(i[j] > f[j]){
            ans+=(i[j] - f[j])*y;
        }
        else if(f[j] > i[j]){
            ans+=(f[j] - i[j])*x;
        }
    }
    return ans;
}

function runProgram(input) {
  input = input.trim().split("\n");
  var t = Number(input[0]);
  var pos = 1;
  for (var i = 0; i < t; i++) {
    
    var n = Number(input[pos]);
    var x = Number(input[pos + 1]);
    var y = Number(input[pos + 2]);
    var init = [];
    var final = [];
    var p = 3;
    for (var j = 0; j < n; j++) {
      init.push(input[pos + p].trim().split(" ").map(Number)[0]);
      final.push(input[pos + p].trim().split(" ").map(Number)[1]);
      p++;
    }
    init.sort((a, b) => a - b);
    final.sort((a, b) => a - b);
   
    var soln = manageBricks(init, final,x,y);
    console.log(soln);
    pos = pos +  n + 3;
  }
}

runProgram(`3
5
10
20
174094 882455
171152 761423
221685 761892
795431 233411
387427 793198
5
10
20
650286 248650
900613 893446
661849 637882
913598 407636
154209 737260
5
10
20
165754 120014
607177 773359
981826 603801
250947 835120
164061 898414`);
