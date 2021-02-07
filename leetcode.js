// remove duplicates from string 
function removeDuplicates(nums) {
    let numCount = 1;
    const numsLen = nums.length;
    for (let i = 1; i < numsLen; i++) {
        if (nums[i] != nums[i - 1]) {
            nums[numCount] = nums[i];
            numCount++;
        }
    }
    nums = nums.slice(0, numCount)
    return numCount;
}

// moves zeroes 
var moveZeroes = function(nums) {
    let j = 0, i = 0 
    while(i < nums.length && j < nums.length){
        if(nums[i] === 0){
            if(nums[j] !== 0 && j > i){
                nums[i] = nums[j]
                nums[j] = 0
                i++
            }
            j++
        }else i++
    }
      return nums
  };