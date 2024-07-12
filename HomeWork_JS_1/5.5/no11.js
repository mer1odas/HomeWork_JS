function getAverageAge(users) {
    let age = users.map(item => item.age)
    let sum = 0
    for (let i of age) {sum += i}
    return sum / users.length
};

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28