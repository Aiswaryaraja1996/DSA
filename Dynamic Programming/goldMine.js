let MAX = 100;
      

    function getMaxGold(gold, m, n)
    {
          

        let goldTable = new Array(m);
         
        for(let i = 0; i < m; i++)
        {
            goldTable[i] = new Array(n);
            for(let j = 0; j < n; j++)
            {
                goldTable[i][j] = 0;
            }
        }
      
        for (let col = n-1; col >= 0; col--)
        {
            for (let row = 0; row < m; row++)
            {
                  
    
                let right = (col == n-1) ? 0
                        : goldTable[row][col+1];
  
                let right_up = (row == 0 ||
                               col == n-1) ? 0 :
                        goldTable[row-1][col+1];
      
    
                let right_down = (row == m-1
                            || col == n-1) ? 0 :
                          goldTable[row+1][col+1];
      
             
                goldTable[row][col] = gold[row][col]
                 + Math.max(right, Math.max(right_up,
                                       right_down));
                                                          
            }
        }
      
   
        let res = goldTable[0][0];
          
        for (let i = 1; i < m; i++)
            res = Math.max(res, goldTable[i][0]);
              
        return res;
    }
     
    let gold = [ [1, 3, 1, 5],
                  [2, 2, 4, 1],
                  [5, 0, 2, 3],
                  [0, 6, 1, 2] ];
                          
    let m = 4, n = 4;
 
    document.write(getMaxGold(gold, m, n));
 