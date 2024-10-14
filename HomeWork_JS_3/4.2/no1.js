area.value = localStorage.getItem("val");
area.oninput = function() {
    localStorage.setItem("val", area.value);
};