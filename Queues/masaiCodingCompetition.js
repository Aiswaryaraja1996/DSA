// Description

// There is a coding Tournament where 4 clubs are going to compete. Since the team selection is very critical in this competition,Rohit asked Harshit to help him in the team selection process.

// There is a long queue of students from four clubs. Each student of a club have a different roll number. Whenever a new student will come, he will search for his clubmate from the end of the queue. As soon as he will find any of the club-mate in the queue, he will stand behind him, otherwise he will stand at the end of the queue. At any moment Harshit will ask the student, who is standing in front of the queue, to come and give his name and Harshit will remove him from the queue. There are Q operations of one of the following types:

// E a b: A new student of club a whose roll number is b will stand in queue according to the method mentioned above.

// D: Harshit will ask the student, who is standing in front of the queue, to come and put his name and Harshit will remove him from the queue

// Input
// Input Format :

// First line contains an integer Q denoting the number of operations.

// Next Q lines will contains one of the 2 types of operations.

function runProgram(input) {
  input = input.trim().split("\n");
  var t = Number(input[0]);
  var masterQ = [];
  var q1 = [];
  var q2 = [];
  var q3 = [];
  var q4 = [];
  var flag1 = false,
    flag2 = false,
    flag3 = false,
    flag4 = false;
  for (var i = 1; i <= t; i++) {
    var optns = input[i].trim().split(" ");
    var op = optns[0];

    if (op === "E") {
      switch (optns[1]) {
        case "1":
          if (q1.length === 0 && flag1 === false) {
            masterQ.push(Number(optns[1]));
            q1.push(Number(optns[2]));
            flag1 = true;
          } else if (flag1) {
            q1.push(Number(optns[2]));
          }
          break;
        case "2":
          if (q2.length === 0 && flag2 === false) {
            masterQ.push(Number(optns[1]));
            q2.push(Number(optns[2]));
            flag2 = true;
          } else if (flag2) {
            q2.push(Number(optns[2]));
          }
          break;
        case "3":
          if (q3.length === 0 && flag3 === false) {
            masterQ.push(Number(optns[1]));
            q3.push(Number(optns[2]));
            flag3 = true;
          } else if (flag3) {
            q3.push(Number(optns[2]));
          }
          break;
        case "4":
          if (q4.length === 0 && flag4 === false) {
            masterQ.push(Number(optns[1]));
            q4.push(Number(optns[2]));
            flag4 = true;
          } else if (flag4) {
            q4.push(Number(optns[2]));
          }
          break;
      }
    } else {
      switch (masterQ[0]) {
        case 1:
          var ele = q1.shift();
          if (q1.length === 0) {
            masterQ.shift();
            flag1 = false;
          }
          console.log(`1 ${ele}`);
          break;
        case 2:
          var ele = q2.shift();
          if (q2.length === 0) {
            masterQ.shift();
            flag2 = false;
          }
          console.log(`2 ${ele}`);
          break;
        case 3:
          var ele = q3.shift();
          if (q3.length === 0) {
            masterQ.shift();
            flag3 = false;
          }
          console.log(`3 ${ele}`);
          break;
        case 4:
          var ele = q4.shift();
          if (q4.length === 0) {
            masterQ.shift();
            flag4 = false;
          }
          console.log(`4 ${ele}`);
          break;
      }
    }
  }
}

runProgram(`10
E 1 1
E 2 1
E 1 2
D
D
E 1 3
E 3 1
E 3 2
D
D`);
