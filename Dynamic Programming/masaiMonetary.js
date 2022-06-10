

function runProgram(input) {
    var arr = input.split("\n").map(Number);
    for(var i = 0; i < arr.length; i++) {
        var coin = new Array(arr[i]+1).fill(-1);
        var soln = masaiMoney(arr[i],coin);
        console.log(soln);
    }
}
function masaiMoney(n){
    
    var coin = new Array(n+1).fill(-1);   
    coin[0] = 0;

    for(var i = 1 ; i <= n ; i++ )
    {
    coin[i] = Math.max(n,(Math.floor(n/2) + Math.floor(n/3) + Math.floor(n/4)));
    }
    return coin[n];
}

function masaiMoney(n,coin){
   

    if(n <= 0) return 0;    
    if(coin[n] !== -1) return coin[n];

    var val = masaiMoney(Math.floor(n/2),coin) + masaiMoney(Math.floor(n/3),coin) + masaiMoney(Math.floor(n/4),coin);

    coin[n] = Math.max(n,val);
    return coin[n];
}

runProgram(`504
354
910
676
478
831
523
23
382
371`)

//  int n // input : Integer Value

//  int dp[n] // Intialize all values as -1

//   function findValue(n){

// if n <= 0 Then return 0

// if dp[n] != -1 Then return dp[n]

// val = findValue(n/2) + findValue(n/3) + findValue(n/4)

// dp[n] = max(val, dp[n])

// return dp[n]

// }