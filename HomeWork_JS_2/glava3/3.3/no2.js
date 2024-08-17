document.onmousedown = function(event) {
    console.log(event.target);
    if (!(event.target.classList.contains("draggable"))) {return}

    event.target.ondragstart = function() {
        return false;
    };
    
    function onMouseMove(event) {
        if (!(event.target.classList.contains("draggable"))) {return}
        event.target.style.position = "absolute"
        event.target.style.left = event.pageX + "px"
        event.target.style.top = event.pageY + "px"

    }

    document.addEventListener('mousemove', onMouseMove);

    event.target.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      event.target.onmouseup = null;
    };
}