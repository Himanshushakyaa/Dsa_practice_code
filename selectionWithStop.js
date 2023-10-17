function selectionSortWithStop(arr, x) {
    const n = arr.length;
  
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
  
      // Find the index of the minimum element in the unsorted part of the array
      for (let j = i + 1; j < n; j++) {
        if(arr[j] == x){
            break;
        }
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
  
      // Swap the found minimum element with the first element
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;

    }
  
    return arr;
  }
  
  const arr = [6,5,1,2,4,3];
  const x = 2; 
  
  const sortedArray = selectionSortWithStop(arr,x);
  console.log("Sorted Array:", sortedArray);
  