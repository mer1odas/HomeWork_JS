function sumInput() {
    let a = prompt("Ввод")
    let arr = []
    let sum = 0
    while (!(isNaN(a)) && a != null && a != "") {
        arr.push(Number(a))
        a = prompt("Ввод")
    }
    for (let i of arr) {sum += i}
    return sum
};

console.log(sumInput());
// console.log(isNaN("a"));