function filterRange(arr, a, b) {
    let arr1 = []
    for (let i of arr) {
        if (i >= a && i <= b) {
            arr1.push(i)
        }
    }
    return arr1
};
let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (совпадающие значения)

alert( arr ); // 5,3,8,1 (без изменений)