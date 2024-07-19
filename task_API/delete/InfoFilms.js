import {numberFilm1} from "./films.js"
console.log(numberFilm1);

let DownUpHIDE = true;
DownUp.onclick = function(event) {
    if (DownUpHIDE) {
        DownUpHIDE = false;
        actors.hidden = false 
    }
    else {
        actors.hidden = true
        DownUpHIDE = true;
    };
    return false;
};
DownUp.onmousedown = function() {return false;};
DownUp.ondblclick = function() {return false;};
