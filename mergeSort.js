function merge(arr, l, m, r)
{
let n1 = m - l + 1;
let n2 = r - m;
// Create temp arrays
let L = new Array(n1);
let R = new Array(n2);
// Copy data to temp arrays L[] and R[]
for (let i = 0; i < n1; i++)
L[i] = arr[l + i];
for (let j = 0; j < n2; j++)
R[j] = arr[m + 1 + j];
let i = 0;
// Initial index of second subarray
let j = 0;
// Initial index of merged subarray
let k = l;
while (i < n1 && j < n2) {
if (L[i] <= R[j]) {
arr[k] = L[i];
i++;
}
else {
arr[k] = R[j];
j++;
}
k++;
}
while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
    }
    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
    arr[k] = R[j];
    j++;
k++;
}
}
function mergeSort(arr,l, r){
    if(l>=r){
    return;//returns recursively
    }
    let m =l+ parseInt((r-l)/2);
    mergeSort(arr,l,m);
    mergeSort(arr,m+1,r);
    merge(arr,l,m,r);
    }
    const arr=[20,1,4,50,-1,30]
    mergeSort(arr,0,5)
    console.log(arr)