let statusPlayer = 0;
let move = {
    ArrowUp(cord) {
        if (cord.top < 200) {return};
        player.style.top = cord.top - 211 + "px";
        statusPlayer --; 
    },
    ArrowDown(cord) {
        if (cord.top > 400) {return};
        player.style.top = cord.top + 201 + "px"; 
        statusPlayer ++;
    },
    ArrowRight(cord) {
        if (cord.right + 58 > window.innerWidth - 30) {return};
        player.style.left = cord.left + 58 + "px"; 
    },
    ArrowLeft(cord) {
        if (cord.left - 58 < 0) {return};
        player.style.left = cord.left - 58 + "px"; 
    }
};
document.onkeydown = function(event) {
    if (event.code != "ArrowUp" && event.code != "ArrowDown" && event.code != "ArrowLeft" && event.code != "ArrowRight") {return};
    move[event.code](player.getBoundingClientRect());
}