// console.log(document.getElementById("open"));
openn.hidden = true
function hide(a) {
    for (i of document.querySelectorAll("li")) {
        i.hidden = a
    }
}

hide(true)
closee.onclick = function() {
    hide(false)
    closee.hidden = true
    openn.hidden = false
}
openn.onclick = function() {
    hide(true)
    closee.hidden = false
    openn.hidden = true
}