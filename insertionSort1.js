function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    // console.log(j)
    
    let temp = arr[i];
    // console.log(temp)
    // console.log(arr[j])
    while (j >= 0 && arr[j] > temp) {
    arr[j + 1] = arr[j];
    j--;
    }
    arr[j + 1] = temp;
    }
    return arr;
}
const arr = [5, 2, 8, 3, 1, 6];
const sortedArr = insertionSort(arr);
console.log(sortedArr);
// Output: [1, 2, 3, 5, 6, 8]