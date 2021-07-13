let palindrome = 121;

function isPalindrome(num) {
    let numArr = num.toString();
    let reversedStr = "";
    for (let i = numArr.length - 1; i > 0; i--) {
        reversedStr += numArr[i];
    }
    return reversedStr;
}

console.log(isPalindrome(palindrome));