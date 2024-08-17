thumb.ondragstart = function() {
    return false;
};
thumb.onmousedown = function(event) {
    // if (event.pageX + thumb.offsetWidth > 315) {return}
    // thumb.style.left = event.pageX - thumb.offsetWidth / 2  + "px";

    function onMouseMove(event) {
        if (event.pageX > 315  || event.pageX < 10) {
            document.removeEventListener('mousemove', onMouseMove);
            return
        };
        thumb.style.left = event.pageX - (thumb.offsetWidth / 2)  + 'px';
    }

    document.addEventListener('mousemove', onMouseMove);
    thumb.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      thumb.onmouseup = null;
    };
};
document.onclick = function(event) {
    console.log(event.pageX);
}