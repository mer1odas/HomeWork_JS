let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];
let data = new WeakMap()
data.set(messages[0], "01.12")
data.set(messages[1], "02.11")
data.set(messages[2], "03.10")

console.log(data);
messages.shift()
console.log(data);
