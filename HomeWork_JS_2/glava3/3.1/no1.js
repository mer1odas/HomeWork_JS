// console.log("31");
ul.onclick = function(event) {
    if (event.target.tagName != "LI") {return}
    if (event.ctrlKey) {
        event.target.classList.add("selected")
    }
    else {
        ul.querySelectorAll('li').forEach(element => {
            element.classList.remove("selected")
        });
        event.target.classList.add("selected")
    };
};
ul.onmousedown = function() {
    return false
};