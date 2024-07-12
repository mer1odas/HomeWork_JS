document.onmouseover = function(event) {
    if (event.target.tagName != "BUTTON"){return}
    let elem = document.createElement("div")
    elem.className = "tooltip"
    elem.innerHTML = event.target.dataset.tooltip
    document.body.append(elem)
    
    let cords = event.target.getBoundingClientRect()
    console.log(cords);
    console.log(elem.offsetHeight);
    let top = cords.top - 5 - elem.offsetHeight
    if (top < 0) {
        top = cords.bottom + 5
    }
    elem.style.top = top + "px"
    elem.style.left = cords.left + "px"
}
document.onmouseout = function(event) {
    if (event.target.tagName != "BUTTON"){return}
    document.querySelector(".tooltip").remove()
}