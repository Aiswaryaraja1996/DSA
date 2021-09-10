// Actually working of queues without using inbuilt functions.

function runProgram(input){
    input = input.trim().split(" ");
    var q = new Array(5);
    var rear = 0;
    var front = 0;
    if(input[0] === 'e'){
        // enqueue logic
        if(rear === 5) console.log("OVERFLOW");        
        else q[rear++] = Number(input[1]);        
    }
    else{
        // dequeue logic
        if(front === rear) console.log("UNDERFLOW");
        else{
            var ele = q[front++];
            console.log(ele);
        }
    }
    console.log(q);
}

runProgram(`d 5`);