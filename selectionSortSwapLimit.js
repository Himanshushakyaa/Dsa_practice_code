function selectionSortWithLimitedSwaps(arr, maxSwaps) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            // Swap the elements if needed
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
            maxSwaps--;

            if (maxSwaps === 0) {
                break; // Stop sorting if the maximum swaps are reached
            }
        }
    }
    
    return arr;
}

// Example usage:
const arr = [64, 25, 12,22,11 ];
const maxSwaps = 3; // Set the maximum number of swaps
const sortedArray = selectionSortWithLimitedSwaps(arr, maxSwaps);

console.log("Sorted Array:", sortedArray);
