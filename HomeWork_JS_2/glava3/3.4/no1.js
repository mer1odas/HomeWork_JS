function runOnKeys(func, ...args) {

    // console.log("123");
    let key = new Set();
    document.onkeydown = function (event){
        key.add(event.code);

        for (let i of args) {
            if (!key.has(i)) {return}
        };

        key.clear()
        func();
    };

    document.onkeyup = function(event) {
        // console.log("//////");
        key.delete(event.code);
    };
    
};

runOnKeys(
    () => alert("Привет!"),
    "KeyQ",
    "KeyW"
);