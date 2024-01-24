function factorial(n) {
    let a = 1;
    for (let x = 1; n >= x; x++) {
        console.log(x);
        a = a * x
    }
    return a
}

console.log(factorial(3));