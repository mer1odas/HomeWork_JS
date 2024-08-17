let table = document.getElementById('bagua-table');
let statusTD = false;

table.onclick = function(event) {
    if (!event.target.closest("td, .cans, .ok") || statusTD) {return};
    statusTD = true;

    let td = event.target.closest("td");

    accept.hidden = false;
    cansel.hidden = false;
    let cords = td.getBoundingClientRect()
    accept.style.left = cords.left + "px";
    accept.style.top = cords.bottom + 5 + "px";
    cansel.style.left = cords.left + cansel.offsetWidth + "px";
    cansel.style.top = cords.bottom + 5 + "px";

    let area = document.createElement("textarea");
    area.classList.add("area");
    area.value = td.innerHTML;
    td.after(area);
    // area.focus();
    td.hidden = true;

    cansel.onclick = function() {
        area.remove();
        td.hidden = false;
        accept.hidden = true;
        cansel.hidden = true;
        statusTD = false;
    };

    accept.onclick = function() {
        td.innerHTML = area.value;
        area.remove();
        td.hidden = false;
        accept.hidden = true;
        cansel.hidden = true;
        statusTD = false;
    };
};