function animate({timing, draw, duration}) {

    let start = performance.now();
  
    requestAnimationFrame(function animate(time) {
      // timeFraction изменяется от 0 до 1
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;
  
      // вычисление текущего состояния анимации
      let progress = timing(timeFraction);
  
      draw(progress); // отрисовать её
  
      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
  
    });
} //

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
} //

let count = 0;
let n = 1500;
durationAnim = 6000;
setInterval(function() {
    div = document.createElement("div");
    div.className = "attackObj";
    let randomNumber = getRandomNumber(0, 2);
    let cords = document.body.querySelectorAll(".field")[randomNumber].getBoundingClientRect();
    div.style.top = cords.top + 25 + "px";
    div.setAttribute("data-status", randomNumber);
    document.body.append(div);

    go(div);

    count++;
    score.innerHTML = count;
    durationAnim -= 80;

    if (count == 25) { //эксперементально
       timeFunc = function(timeFraction) {
        return Math.pow(timeFraction, 3)
       } 
    }
    if (count == 50) {
        timeFunc = function(timeFraction) { // эксперементально
            for (let a = 0, b = 1; 1; a += b, b /= 2) {
              if (timeFraction >= (7 - 4 * a) / 11) {
                return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2) 
              }
            }
        }
    }

}, n)

record.innerHTML = localStorage.getItem("record");

let timeFunc = function(timeFraction){
    return timeFraction
}


function go(elem) {
    animate({
        duration: durationAnim,
        timing: timeFunc,
        draw(progress) {
            elem.style.right = progress * 100 + "%";
            let cordPlayer = player.getBoundingClientRect();
            let cordElem = elem.getBoundingClientRect();

            if (cordPlayer.right - cordElem.left >= 0 && cordPlayer.left - cordElem.left <= elem.offsetWidth - 20 && elem.dataset.status == statusPlayer) {
                alert("Game Over");

                if (localStorage.getItem("record") < count){
                    localStorage.setItem("record", count); 
                    record.innerHTML = localStorage.getItem("record");
                };

                for (let i of document.querySelectorAll(".attackObj")) {
                    i.remove();
                };

                timeFunc = function(timeFraction){
                    return timeFraction
                };

                durationAnim = 6000;
                count = 0;
                score.innerHTML = "";
            }
        } 
    })
    setTimeout(function() {
        elem.setAttribute("data-status", -1);
        elem.remove();
    }, 6500);
}
