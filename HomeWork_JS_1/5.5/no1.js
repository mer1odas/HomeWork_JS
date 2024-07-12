function camelize(str) {
    let arr = str.split("-")
    return arr.join("")
};

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));