function selectionSortWithRange(arr, range) {
    const len = arr.length;
  
    for (let i = 0; i < len - 1; i++) {
      let minIndex = i;
  
      for (let j = i + 1; j < len; j++) {
        if (Math.abs(arr[j] - arr[i]) <= range && arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
  
      if (minIndex !== i) {
        // Swap elements if they are within the specified range
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
  }
  
 
  const arr = [10, 5, 8, 15, 2, 12, 7, 9, 18];
  const range = 5;
  
  selectionSortWithRange(arr, range);
  
  console.log(arr); 