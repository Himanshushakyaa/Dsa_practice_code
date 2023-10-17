function selectionSortFirstKElements(arr, k) {
    if (k <= 0 || k >= arr.length) {
      
      return arr;
    }
  
    for (let i = 0; i < k - 1; i++) {
      let maxIndex = i;
  
      for (let j = i + 1; j < k; j++) {
        if (arr[j] > arr[maxIndex]) {
          maxIndex = j;
        }
      }
  
      if (maxIndex !== i) {
       
        [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]];
      }
    }
  
    return arr;
  }
  
  // Example usage:
  const arr = [64, 25, 12, 22, 11, 35, 48, 19];
  const k = 3; 
  
  console.log("Original array:", arr);
  selectionSortFirstKElements(arr, k);
  console.log("Sorted first", k, "elements in descending order:", arr);
  