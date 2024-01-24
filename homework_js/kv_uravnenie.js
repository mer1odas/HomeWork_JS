function korni(a, b, c) {
    let korni = [];
    let D = 0;
    let x1 = 0;
    let x2 = 0;
    D = b ** 2 - 4 * a * c
    console.log(D);
    if (D < 0) {
        return "Корней нет"
    }
    else {
        if (D == 0) {
            x1 = (-1 * b) / (2 * a)
            korni.push(x1)
            return korni
        }
        else {
            x1 = (-1 * b + Math.sqrt(D)) / (2 * a)
            x2 = (-1 * b - Math.sqrt(D)) / (2 * a)
            console.log(x1, x2, "hfg");
            korni.push(x1);
            korni.push(x2);
            return korni
        }
    }
}

console.log(korni(1, 3, -4));
