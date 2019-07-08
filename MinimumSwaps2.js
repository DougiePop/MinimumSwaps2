const minimumSwaps2 = (arr) => {
    // create a variable to store the index of the integers in the current array
    let dict = {};

    // variable used to count how many times the integers were swapped
    let count = 0;

    // loop through the array and create the key value pair with the key being the current integer
    // in the array and the value being the index
    for (let i=0; i<arr.length; i++) {
        dict[arr[i]] = i;
    }

    // since we know that the array is a list of consecutive integers starting from 1 without any duplicates
    // we can assume that index 0 should be integer value 1 and index 1 should be integer value 2 and do forth...
    // the pattern is that for index i, the integer value should be i + 1
    // loop through the array and swap the current index (i) value with the i+1 integer it should be
    // by comparing it with the dictionary object which contains the original indexes and update the dictionary
    // as we loop through
    for (let i=0; i<arr.length; i++) {
        if (arr[i] === i+1) {
            continue;
        }
        let swapIndex = dict[i+1];
        let temp = arr[i];
        arr[i] = arr[swapIndex];
        arr[swapIndex] = temp;

        // update the dictionary key value pair that keeps track of the integer indexes
        dict[i+1] = i;
        dict[arr[swapIndex]] = swapIndex;
        count++;
    }
    return count;
}

let arr = [7,1,3,2,4,5,6] //5
// let arr2 = [2,1,5,3,4] // 3
console.log(minimumSwaps2(arr));