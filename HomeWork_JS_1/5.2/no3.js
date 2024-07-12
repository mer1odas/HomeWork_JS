function readNumber() {
    // return null
    let a = prompt("Число")
    while (isNaN(a)) {
        a = prompt("Число")
    }
    if (a == null || a == "") {return null}
    return a
};
console.log(readNumber());
// console.log(isNaN(""));