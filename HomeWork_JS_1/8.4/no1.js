let dictionary = Object.create(null, {
    toString: { // определяем свойство toString
        value() { // значение -- это функция
          return Object.keys(this).join();
        }
      }
});
// dictionary.toString = ""
// Object.defineProperty(dictionary, "toString", {
//     enumerable: false,
//     writable: false,
//     configurable: false,
//     // value: Object.keys(this).join()
// })
// console.log(Object.getOwnPropertyDescriptor(dictionary, "toString"))

// dictionary.toString = function() {
//     return Object.keys(this).join()
// }

dictionary.apple = "Apple";
dictionary.__proto__ = "test";

for(let key in dictionary) {
  alert(key);
}

alert(dictionary.toString);