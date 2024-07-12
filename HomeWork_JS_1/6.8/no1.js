function printNumbers1(from, to) {
    let timer = setInterval(function() {
        if (from >= to) {clearInterval(timer)}
        alert(from)
        from++
    }, 1000)
};

function printNumbers2(from, to) {
    function time() {
        alert(from)
        if (from < to) {
            from++
            setTimeout(time, 1000)
        }
    };
    time()           
};


printNumbers2(1, 6);