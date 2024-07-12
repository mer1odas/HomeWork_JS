let widthCentre = field.clientWidth / 2
let heightCentre = field.clientHeight / 2
console.log(widthCentre);
console.log(heightCentre);
ball.style.top = heightCentre - (ball.clientHeight / 2) + "px"
ball.style.left = widthCentre - (ball.clientWidth / 2) + "px"
console.log(ball.clientWidth);