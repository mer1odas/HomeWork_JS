function showCircle(cx, cy, radius, callback) {
    circle.style.left = cx + "px"; 
    circle.style.top = cy + "px"; 
    circle.style.width = radius * 2 + "px"; 
    circle.style.height = radius * 2 + "px"; 

    circle.addEventListener("transitionend", function call(event){
        if (event.propertyName == "width") {return}
        callback(circle);
        circle.addEventListener("transitionend", call);
    })
}
showCircle(150, 150, 100, function(div) {
    div.classList.add('message-ball');
    div.innerHTML = "Hello, world!";
  });