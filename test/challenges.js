

let sampleArr = [0, 2, 11, 7];

function arrSum(nums, target) {
    let sumArr = [];
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    let count = 1;
    while (count < nums.length) {
      sum = nums[i] + nums[i + count];
      if (sum === target) {
        sumArr.push(i);
        sumArr.push(i + count);
      }
      count ++;
    }
  }
  return sumArr;
}

console.log(arrSum(sampleArr));