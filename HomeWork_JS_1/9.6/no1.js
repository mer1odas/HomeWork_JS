function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

alert( a instanceof B ); // true
// у A и В одинаковый .prototype, а instanceof проверяет еще по прототипу