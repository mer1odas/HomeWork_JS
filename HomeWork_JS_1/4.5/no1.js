let a1 = {}
function A() { 
    return a1
}
function B() { 
    return a1
}

let a = new A();
let b = new B();

alert( a == b ); // true