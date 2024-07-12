function byField(fieldName) {
    return function(a, b) {
        return a[fieldName] > b[fieldName] ? 1 : -1
    };
};

let users = [
    { name: "Иван", age: 20, surname: "Иванов" },
    { name: "Пётр", age: 18, surname: "Петров" },
    { name: "Анна", age: 19, surname: "Каренина" }
];

console.log(users.sort(byField('name')));
console.log(users.sort(byField('age')));