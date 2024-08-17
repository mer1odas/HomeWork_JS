let tooltip = null
body.onmouseover = function(event) {
    let elem = event.target.closest("[data-tooltip]");
    if (!elem) {return}
    tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");
    tooltip.innerHTML = elem.getAttribute("data-tooltip");
    elem.append(tooltip);
};
body.onmouseout = function(event) {
    if (!tooltip) {return}
    tooltip.remove()
    tooltip = null;
};