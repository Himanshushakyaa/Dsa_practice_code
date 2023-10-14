function selectionSortWithSwaps(arr) {
    const n = arr.length;
    let swaps = 0;
  
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
  
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
  
      if (minIndex !== i) {
        // Swap elements if needed
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        swaps++;
      }
    }
  
    return swaps;
  }
  
  // Example usage:
  const arr = [64, 25, 12, 22, 11];
  const numberOfSwaps = selectionSortWithSwaps(arr);
  
  console.log("Sorted array:", arr);
  console.log("Number of swaps:", numberOfSwaps);
  