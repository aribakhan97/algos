// does a string have all unique characters?

 function allUniqueChars(string) {
for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
        if(string[i] === string[j]) {
            return false // since theres a match return false
            }
        }
    }
    return true; // return true
}

// given two string write a method to decide if one is a permutation of the other

function checkPermutation(stringOne, stringTwo) {
    // if different lengths return false
    if(stringOne.length !== stringTwo.length) {
        return false;
    } else {
        let sortedStringOne = stringOne.split('').sort().join('');
        let sortedStringTwo = stringTwo.split('').sort().join('');
        return sortedStringOne === sortedStringTwo
    }
}

// write a method to replaces a spaces in a string with %20

function urlify(str, len) {
    let s = "";
    let totalSpaces = str.length - len;
    let frontSpaces = 0 
    let flag = 0; 
    for(let i = 0; i < str.length; i++) {
        if (flag === false) {
            if (str[i] === " ") frontSpaces++
            else flag = true
        }
        if (flag === true && str.length - (totalSpaces - frontSpaces)) {
            if (str[i] === " ") s += "%20";
            else s += str[i];
        }
    }
    return s
}

// palindrome permutation

function palinPerm(string) {
    const sanitized = s.toUpperCase().split(" ").join("");
    const freq = new Map();
    for (let i = 0; i < string.length; i++) {
        const char = sanitized.charAt(i);
        const prevFreq = freq.get(char) || 0;
        freq.set(char, prevFreq + 1);
    }
    let oddCount = 0;
    for (let char of freq) {
        if (char[1] % 2 !== 0) {
            oddCount++
        }
    }
    return oddCount < 2;
}



// one away
