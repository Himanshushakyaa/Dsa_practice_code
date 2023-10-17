function mergeSortDescending(arr) {
    if (arr.length <= 1) {
    return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);
    return mergeDescending(mergeSortDescending(leftArr),mergeSortDescending(rightArr));
}
function mergeDescending(leftArr, rightArr) {
 const resultArr = [];
 while (leftArr.length && rightArr.length) {
 if (leftArr[0] > rightArr[0]) {
 resultArr.push(leftArr.shift());
 } else {
 resultArr.push(rightArr.shift());
 }
 }
 return [...resultArr, ...leftArr, ...rightArr];
}
const arr = [5, 3, 8, 1, 2];
const sortedArr = mergeSortDescending(arr);
console.log(sortedArr)