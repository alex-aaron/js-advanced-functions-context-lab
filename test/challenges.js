let sampleOrder = "cba";
let sampleStr = "abcd";

function customSortStr(order, str) {
    let returnStr;
    let orderArr = order.split("");
    let strArr = str.split("");
    let remArr = [];
    let count = 0;
    for (let i = 0; i < strArr.length; i++) {
        if (orderArr.includes(strArr[i]) && count < strArr.length) {
            count += 1;
        } else {
            remArr.push(strArr[i]);
        }
    }
    returnStr = orderArr.join("") + remArr.join("");
    return returnStr;
}

console.log(customSortStr(sampleOrder, sampleStr));