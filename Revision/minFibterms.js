function allFib(fib, k) {
  fib[0] = 0;
  fib[1] = 1;
  fib[2] = 2;
  var i = 3;
  var next;

  while (1) {
    next = fib[i - 1] + fib[i - 2];
    if (next > k) return;
    fib[i] = next;
    i++;
  }
}

function minTerms(k) {
  var fib = [];
  allFib(fib, k);

    var count = 0;
    var j = fib.length - 1;

    while(k > 0){
        count+=parseInt(k/fib[j]);
        k%=(fib[j]);
        j--;
    }
   console.log(count);
}

minTerms(17);
