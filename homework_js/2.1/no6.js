for (let i of document.querySelectorAll(".pane")) {
    i.prepend(document.querySelector("button").cloneNode(true))
    i.firstChild.onclick = () => i.remove();
}
