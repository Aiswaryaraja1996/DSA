// Implementation of circular queues

function runProgram(input) {
  input = input.trim().split("\n");
  var t = Number(input[0]);
  var q = new Array(5); // Array of size 5
  var front = -1;
  var rear = -1;
  for (var i = 1; i <= t; i++) {
    var optns = input[i].trim().split(" ");
    var op = optns[0];
    if (op === "e") {
      var ele = Number(optns[1]);
      // There are two overflow conditions
      if ((front == 0 && rear == 4) || rear == front - 1) {
        console.log("OVERFLOW");
      } else if (rear == -1) {
        front = 0;
        rear = 0;
      } else if (rear == 4 && front != 0) {
        rear = 0;
      } else {
        rear++;
      }
      q[rear] = ele;
    } 
    else {
      // Dequeue logic
      if (front === -1) {
        console.log("UNDERFLOW");
      }
      q[front] = -1;
      if (front == rear) {
        front = -1;
        rear = -1;
      } else {
        front++;
      }
    }
    console.log(q, front, rear);
  }
}

runProgram(`10
e 4
e 5
e 6
e 7
e 8
d
d
d
d
d`);


// $ node circularQueue.js 
// [ 4, <4 empty items> ] 0 0 
// [ 4, 5, <3 empty items> ] 0 1
// [ 4, 5, 6, <2 empty items> ] 0 2
// [ 4, 5, 6, 7, <1 empty item> ] 0 3
// [ 4, 5, 6, 7, 8 ] 0 4
// [ -1, 5, 6, 7, 8 ] 1 4
// [ -1, -1, 6, 7, 8 ] 2 4
// [ 9, -1, 6, 7, 8 ] 2 0
// [ 9, 10, 6, 7, 8 ] 2 1
// [ 9, 10, -1, 7, 8 ] 3 1