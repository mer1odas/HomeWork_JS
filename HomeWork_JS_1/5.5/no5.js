function copySorted(arr) {
    let arr1 = arr.slice()
    arr1.sort()
    return arr1
};

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)