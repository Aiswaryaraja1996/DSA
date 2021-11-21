function sumDigit(n)
{
    if (n == 0)
        return 0;
         
    return (n % BigInt("9") == 0) ? 9: (n % BigInt("9"));
}
 

function superSum(n,k)
{
    var sum =  k * sumDigit(n);
    return sumDigit(sum);
}
 


function runProgram(input){

    const [n,k] = input.trim().split(" ").map(BigInt);
    var soln = superSum(n,k);
    console.log(String(soln));

}
 runProgram(`99 100000`)

