let palindrome = 1211;

function isPalindrome(num) {
    let numToStr = num.toString();
    let reversedStr = "";
    for (let i = numToStr.length - 1; i >= 0; i--) {
        reversedStr += numToStr[i];
    }
    if (numToStr === reversedStr) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome(palindrome));