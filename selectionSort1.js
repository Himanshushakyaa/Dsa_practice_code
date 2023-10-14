function selectionSortFirstK(arr, k) {
    if (k <= 0 || k > arr.length) {
      console.log("Invalid value of k");
      return;
    }
  
    for (let i = 0; i < k - 1; i++) {
      let minIndex = i;
  
      for (let j = i + 1; j < k; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
  
      if (minIndex !== i) {
        // Swap the elements at i and minIndex
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
  
    // The first k elements are now sorted in ascending order
    console.log(`First ${k} elements in ascending order: ${arr.slice(0, k).join(', ')}`);
  }
  
  const arr = [64, 25, 12, 22, 11];
  const k = 3; // Change this to the number of elements you want to sort
  selectionSortFirstK(arr, k);
  