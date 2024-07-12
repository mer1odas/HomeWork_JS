function fib(n) {
    // let fiba = 0
    // if (n < 3) {return fiba = 1}
    // else {
    //     fiba += fib(n-1) + fib(n-2)      - рекурсия
    //     return fiba
    // };

    a1 = 1;
    a2 = 1;
    let fiba = 0;
    for (let i = 3; i <= n; i++) {
        fiba = a1 + a2;
        a2 = a1 ;
        a1 = fiba;
    };
    return fiba;
};

alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(77)); // 5527939700884757