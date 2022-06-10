function runProgram(input) {
  input = input.trim().split("\n");
  var t = Number(input[0]);
  var pos = 1;
  for (var i = 0; i < t; i++) {
    var [c, n] = input[pos].trim().split(" ").map(Number);
    var val = [];
    var weight = [];
    for (var j = pos + 1; j <= pos + n; j++) {
      weight.push(input[j].trim().split(" ").map(Number)[0]);
      val.push(input[j].trim().split(" ").map(Number)[1]);
    }
   
    var soln = knapSack(c, n, val, weight);
    console.log(soln);
    pos=pos+n+1;
  }
}

function knapSack(c, n, val, weight) {
  var ratio = [];
  for (var i = 0; i < n; i++) {
    ratio.push([val[i], weight[i], val[i] / weight[i]]);
  }

  ratio.sort((a, b) => b[2] - a[2]);

  var totalWeight = 0;
  var totalValue = 0;

  for (var i = 0; i < n; i++) {
    if (totalWeight + ratio[i][1] <= c) {
      totalValue += ratio[i][0];
      totalWeight += ratio[i][1];
    } else {
      var wt = c - totalWeight;
      totalWeight += wt;
      break;
    }
  }

  return totalValue;
}

runProgram(`2
4 5
1 8
2 4
3 0
2 5
2 3
4 5
1 8
2 4
3 0
2 5
2 3`);
