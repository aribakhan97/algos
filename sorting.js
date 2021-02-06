// merge sort 
// given an array of integers nums, sort the array in ascending order


// time complexity -> n log n

var sortArray = function(nums) {
    return mergeSort(nums);
};

var mergeSort = function(nums) {
    if (nums.length <= 1) return nums;

    let mid = Math.floor(nums.length / 2);
    let left = nums.slice(0,mid);
    let right = nums.slice(mid)

    let = mergeSort(left);
    right = mergeSort(right);

    const block = [];
    let l = 0;
    let r = 0;

    while (l < left.length && r < right.length) {
        if (left[l] < right[r]) {
            block.push(left[l])
            l++
        } else {
            block.push(right[r])
            r++
        }
    }
    if (l < left.length) {
        block = block.concat(left.slice(l));
    } else of (r < right.length) 
        block = block.concat(right.slice(r));
    
};
