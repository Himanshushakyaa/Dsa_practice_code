function ascending(arr)
{
    for (let i = 0; i <n-1;i++)
    {
        let minIndex = i ;
        for (let j = i +1 ; j<n;j++)
        {
            if(arr[j] < arr[minIndex])
            {
                minIndex = j;
            }
        }
        if(minIndex !== i)
        {
            [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
        }
    }
    return arr;
}

const unsortedArray = [ 4,2,7,1,9,6,5,8,3];
let n = 9
const sortedArray = ascending(unsortedArray);
console.log(sortedArray);
