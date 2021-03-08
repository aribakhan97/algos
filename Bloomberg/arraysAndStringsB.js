// Two Sum

var twoSum = function(nums, target) {
    const ht = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const want = target - num;
        if (want in ht) {
            const leftIndex = ht[want];
            return[leftIndex, i]
        } else {
            ht[num] =  i
        }
    }
};
var twoSum = function(nums, target) {
    const ht = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const want = target - num;
        if (want in ht) {
            const leftIndex = ht[want];
            return [leftIndex, i]
        } else {
            ht[num] = i
        }
    }
}

var lengthOfLongestSubstring = function(s) {
    const len = s.length
    if( len <= 1) {return len}

    const indices = { [s[0]]: 0 }
    let max = 1
    let head = 0
    let i = 0
    while (++ i < len) {
        const last = indices[s[i]]
        if(last >= head) {
            max = Math.max(max, i - head)
            head = last + 1
        } 
        indices[s[i]] = i
    }
    return Math.max(max, i - head)
}

var threeSum = function(nums) {
    const output = [];
    nums.sort((a,b) => a - b );
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        if ( i > 0 && nums[i] === nums[i - 1]) continue;

        while (left < right) {
            let total = nums[i] + nums[left] + nums[right];
            if (total === 0 ) {
                output.push([nums[i], nums[left], nums[right]]);
                while ( left < right && nums[right - 1] === nums[right]) {
                    right --;
                }
                while(left < right && nums[left + 1] === nums[left]) {
                    left++;
                }
                right--;
                left++;
                } else if (total > 0) {
                   right--; 
            } else {
                left++;
            }
        }
    }
    return output; 
}

// valid anagram
return s.split("").sort().join("") === t.split("").sort().join("")

// algo expert
function smallestDifference(arrayOne, arrayTwo) {
	arrayOne.sort((a, b) => a - b);
	arrayTwo.sort((a, b) => a - b);
	let idxOne = 0;
	let idxTwo = 0;
	
	let smallest = Infinity;
	let current = Infinity;
	let smallestPair = [];
	while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
		let firstNum = arrayOne[idxOne];
		if (firstNum < secondNum) {
			
		}
	}
}
// move element to end

function moveElementToEnd(array, toMove) {
	let i = 0;
	let j = array.length - 1;
	while (i < j) {
			while ( i < j && array[j] === toMove) j--;
			if (array[i] === toMove) swap(i, j, array);
			i++
		}
		return array;
	}
	function swap(i, j, array){
		const temp = array[j];
		array[j] = array[i];
		array[i] = temp;
}
