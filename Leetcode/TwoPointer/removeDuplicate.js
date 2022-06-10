var removeDuplicates = function(nums) {
    var ptr1 = 0;
    var ptr2 = 1;

    while(ptr2 < nums.length){
        if(nums[ptr1] === nums[ptr2]){
           
            ptr2++;
        }
        else{
            ptr1++;
            [nums[ptr1],nums[ptr2]] = [nums[ptr2], nums[ptr1]];
            ptr2++;
        }
    }
    return ptr1+1;
    
};

removeDuplicates([1,1,1,2,2,3,4]);

//Time Complexity : O(n)
// Space Complexity : O(1)