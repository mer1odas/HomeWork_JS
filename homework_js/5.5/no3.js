function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        // console.log(i);
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1)
            i--
        }
    }
};

let arr = [5,1, 8, 1, 2, 3, 5, 6];

filterRangeInPlace(arr, 1, 4); 

alert( arr ); // [3, 1, 2, 3]