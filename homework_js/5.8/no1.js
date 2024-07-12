let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];

let read = new WeakSet();
read.add(messages[0]);
read.add(messages[1]);
read.add(messages[2]);
console.log(read);
messages.shift();
console.log(messages);
console.log(read);
