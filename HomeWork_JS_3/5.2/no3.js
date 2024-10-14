function showCircle(cx, cy, radius) {
    circle.style.left = cx + "px"; 
    circle.style.top = cy + "px"; 
    circle.style.width = radius * 2 + "px"; 
    circle.style.height = radius * 2 + "px"; 
}
showCircle(150, 150, 100);