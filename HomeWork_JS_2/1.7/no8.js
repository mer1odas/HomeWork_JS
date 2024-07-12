let timeId;

function time() {
    let data = new Date()
    let hours = data.getHours()
    let min = data.getMinutes()
    let sec = data.getSeconds()
    document.getElementsByClassName("hour")[0].innerHTML = hours
    document.getElementsByClassName("min")[0].innerHTML = min
    document.getElementsByClassName("sec")[0].innerHTML = sec
    // let a = setInterval(time, 1000)
    
}

function clockStart() {
    time()
    timeId = setInterval(time, 1000)
}

function clockStop() {
    clearInterval(timeId)
}