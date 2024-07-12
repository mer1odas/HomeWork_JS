function inBetween(a, b) {
    return function(i) {
        if (a <= i && i <= b) {return true};
        return false;
    };
};

function inArray(arr) {
    return function(i) {
        if (arr.includes(i)) {return true};
        return false;
    };
};

/* .. ваш код для inBetween и inArray */
let arr = [1, 2, 3, 4, 5, 6, 7];

alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

alert( arr.filter(inArray([1, 2, 10])) ); // 1,2