function factorial(n) {
    let sum = 1;
    if (n == 2) {return sum = 2}
    else {
        sum = factorial(n - 1) * n; // 4 3 2
        return sum; 
    }
};

alert(factorial(4));
alert(factorial(5)); // 120