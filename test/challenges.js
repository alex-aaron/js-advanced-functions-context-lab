

let sampleStr = "abcabcbb";

function lengthOfLongestSubstring(s) {
  let substringLength = 0;
  let substringArr = [];
  for (let i = 0; i < s.length; i++) {
    let substring = s[i];
    let count = 1;
    while (substringArr.length < i + 1) {
      if (s[i + count] !== undefined && !substring.includes(i + count)) {
        substring += s[i + count];
        count++
      } else {
        substring.push(substring.length);
      }
    }
  }
  substringArr.sort();
  substringLength = substringArr[substringArr.length - 1];
  return substringLength;
}

console.log(lengthOfLongestSubstring(sampleStr));