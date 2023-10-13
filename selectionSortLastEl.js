function selectionSortLastElement(arr,k){
    if(k <= 0 || k >= arr.length){
        return arr;
    }
    const startindex = arr.length -k;


    for(let i  = startindex; i< arr.length - 1; i++){
        let minIndex = i;

        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        if(minIndex !== i){
            [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]];
        }
    }
    return arr;
}

const arr = [64,25,12,22,11,35,48,19]
const k = 3;
console.log("original array:",arr)
selectionSortLastElement(arr,k)
console.log("Sorted last",k,"element:",arr)