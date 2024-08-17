let text = '';
view.onclick = function(event) {
    view.hidden = true;

    let area = document.createElement("textarea");
    area.classList.add("edit");
    area.innerHTML = view.innerHTML;
    body.append(area);
    area.focus()

    area.onkeydown = function(event) {
        if (event.key == "Enter") {
            area.blur()
        }
    };

    area.onblur = function() {
        view.innerHTML = area.value;
        view.hidden = false;
        area.remove();
    };
};