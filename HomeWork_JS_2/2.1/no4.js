field.onclick = function(event) {
    let cords = field.getBoundingClientRect()
    let left = event.clientX 
    let top = event.clientY 
    console.log(top);
    if (top < cords.top + field.clientTop + (ball.clientHeight / 2)) {
        top = cords.top + field.clientTop + (ball.clientHeight / 2)
        // console.log("???????????????");
    } 
    if (left < cords.left + field.clientLeft + (ball.clientWidth / 2)) {
        left = cords.left + field.clientLeft + (ball.clientWidth / 2)
    }
    if (top > cords.bottom - field.clientTop - (ball.clientHeight / 2)) {
        top = cords.bottom - field.clientTop - (ball.clientHeight / 2)
    }
    if (left > cords.right - field.clientLeft - (ball.clientHeight / 2)) {
        left = cords.right - field.clientLeft - (ball.clientHeight / 2)
    }
    ball.style.top = top - (ball.clientHeight / 2) + "px"
    ball.style.left = left - (ball.clientWidth / 2) + "px"
    }

