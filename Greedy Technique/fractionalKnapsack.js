function runProgram(input) {
  input = input.trim().split("\n");
  var c = Number(input[0]);
  var n = Number(input[1]);
  var val = input[2].trim().split(" ").map(Number);
  var weight = input[3].trim().split(" ").map(Number);

  var soln = knapSack(c, n, val, weight);
  console.log(soln);
}

function knapSack(c, n, val, weight) {
  var ratio = [];
  for (var i = 0; i < n; i++) {
    ratio.push([val[i], weight[i], val[i] / weight[i]]);
  }
  
  for (var i = 0; i < n - 1; i++) {
    for (var j = 0; j < n - i - 1; j++) {
      if (ratio[j][2] < ratio[j + 1][2]) {
        var temp = ratio[j];
        ratio[j] = ratio[j + 1];
        ratio[j + 1] = temp;
      }
    }
  }

  var totalWeight = 0;
  var totalValue = 0;

  for (var i = 0; i < n; i++) {
    if (totalWeight + ratio[i][1] <= c) {
      totalValue += ratio[i][0];
      totalWeight += ratio[i][1];
    } else {
      var wt = c - totalWeight;
      totalValue += wt * ratio[i][2];
      totalWeight += wt;
      break;
    }
  }
  return totalValue;
}

runProgram(`50 
3
60 100 120 
10 20 30`);
