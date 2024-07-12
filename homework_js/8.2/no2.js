function Color(color_rabbit) {
    this.color = color_rabbit;
}

let obj = new Color("white")
let obj2 = new obj.constructor("white_black");
console.log(obj);
console.log(obj2);
// все работает


// function Color(color_rabbit) {
//     this.color = color_rabbit;
// }
// Color.prototype = {};
// let obj = new Color("white")
// let obj2 = new obj.constructor("white_black");
// console.log(obj);
// console.log(obj2);
// не работает корректно