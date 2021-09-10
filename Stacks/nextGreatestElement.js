// JavaScript program to print
// next greater number
// of Q queries
 
// array to store the next
// greater element index
function next_greatest(next, a, n)
{
    // use of stl
    // stack in c++
    var s = [];
 
    // push the 0th
    // index to the stack
    s.push(0);
 
    // traverse in the
    // loop from 1-nth index
    for (var i = 1; i < n; i++)
    {
 
        // iterate till loop is empty
        while (s.length!=0) {
 
            // get the topmost
            // index in the stack
            var cur = s[s.length-1];
 
            // if the current element is 
            // greater then the top indexth
            // element, then this will be
            // the next greatest index
            // of the top indexth element
            if (a[cur] < a[i])
            {
                 
                // initialise the cur
                // index position's
                // next greatest as index
                next[cur] = i;
 
                // pop the cur index
                // as its greater
                // element has been found
                s.pop();
            }
 
            // if not greater
            // then break
            else
                break;
        }
        // push the i index so that its
        // next greatest can be found
        s.push(i);
    }
 
    // iterate for all other
    // index left inside stack
    while (s.length!=0)
    {
        var cur = s[s.length-1];
 
        // mark it as -1 as no
        // element in greater
        // then it in right
        next[cur] = -1;
 
        s.pop();
    }
    console.log(next);
}
 
// answers all
// queries in O(1)
function answer_query(a, next, n, index)
{
    // stores the next greater
    // element positions
    var position = next[index];
 
    // if position is -1 then no
    // greater element is at right.
    if (position == -1)
        return -1;
 
    // if there is a index that
    // has greater element
    // at right then return its
    // value as a[position]
    else
        return a[position];
}
 
// Driver Code
var a = [3, 4, 2, 7,
           5, 8, 10, 6];
var n = a.length;
// initializes the
// next array as 0
var next = Array(n).fill(0);
// calls the function
// to pre-calculate
// the next greatest
// element indexes
next_greatest(next, a, n);
// query 1 answered
console.log( answer_query(a, next, n, 3) + " ");
// query 2 answered
console.log( answer_query(a, next, n, 6) + " ");
// query 3 answered
console.log( answer_query(a, next, n, 1) + " ");
 
 