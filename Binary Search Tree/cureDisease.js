function runProgram(input) {
    input = input.trim().split("\n");
    var n = Number(input[0]);
    var vac = input[1].trim().split(" ").map(Number);
    var mid = input[2].trim().split(" ").map(Number);
    vac.sort((a,b)=> a - b);
    mid.sort((a,b)=> a - b);
    var soln = cureDisease(n,vac,mid);
    console.log(soln);

}

function cureDisease(n,vac,mid) {
    for(var i=0;i<vac.length;i++){
        if(vac[i]<mid[i]){
            return "No"
        }
    }
    return "Yes";
}

runProgram(`5
123 146 454 542 456
100 328 248 689 200`)