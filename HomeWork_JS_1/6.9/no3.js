function f(a){
    alert(a)
}

function debounce(f, ms) {
    let time;
    return function(arg){
        clearTimeout(time)
        time = setTimeout(() => f(arg), ms) 
    }
};

let a = debounce(f, 1000)

// a("c")
setTimeout( () => a("b"), 500);
setTimeout( () => a("c"), 1000);

