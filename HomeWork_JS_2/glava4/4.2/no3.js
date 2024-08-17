mouse.tabIndex = -1;
mouse.onclick = function(event) {
    mouse.focus();
    mouse.style.position = "absolute";
    mouse.onkeydown = function(event) {
        let code = event.code;
        // console.log(code);
        if (code == "ArrowLeft") {mouse.style.left = mouse.getBoundingClientRect().left - mouse.offsetWidth + "px" 
        return};
        if (code == "ArrowRight") {mouse.style.left = mouse.getBoundingClientRect().left + mouse.offsetWidth + "px" 
        return};
        if (code == "ArrowUp") {mouse.style.top = mouse.getBoundingClientRect().top - mouse.offsetHeight + "px" 
        return};
        if (code == "ArrowDown") {mouse.style.top = mouse.getBoundingClientRect().top + mouse.offsetHeight + "px" 
        return};
    }
};