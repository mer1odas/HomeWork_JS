let time;

elem.onmouseenter = function() {
    time = setTimeout(function(){
        tooltip.hidden = false;
    }, 400);
};
elem.onmouseleave = function() {
    tooltip.hidden = true
    clearTimeout(time)
};