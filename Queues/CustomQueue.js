// Actually working of queues without using inbuilt functions.

function runProgram(input) {
  input = input.trim().split("\n");
  var t = Number(input[0]);
  var q = new Array(5);
  var rear = -1;
  var front = -1;
  for (var i = 1; i <= t; i++) {
    var optns = input[i].trim().split(" ");
    var op = optns[0];
    if (op === "e") {
      // enqueue logic
      if (rear === 4) console.log("OVERFLOW");
      else if(rear == -1) {
        front = 0;
        rear = 0;
      } 
      q[rear++] = Number(optns[1]);
    } else {
      // dequeue logic
      if (front === rear) console.log("UNDERFLOW");
      else {
        q[front++] = -1;
      }
    }
    console.log(q,front,rear);
  }
}

runProgram(`10
e 5
e 6
e 7
d
d
d
d
d
d
e 4`);
