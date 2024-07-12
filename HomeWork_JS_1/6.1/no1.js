function sumTo1(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i ;
    };
    return sum;
};

function sumTo2(n) {
    let sum = 0;
    if (n==1) {
        sum += n;
        return sum;
    }
    else {sum += sumTo2(n - 1) + n;
        return sum;
    };

};

function sumTo3(n) {
    return ((1 + n) / 2) * n
};

console.log(sumTo1(3));
console.log(sumTo2(3));
console.log(sumTo3(3));
