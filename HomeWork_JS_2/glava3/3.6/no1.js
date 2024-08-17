console.log(document.documentElement.getBoundingClientRect().bottom);

function func() {
    while (true) {
        let cordsWindow = document.documentElement.getBoundingClientRect().bottom;

    if (cordsWindow > document.documentElement.clientHeight + 100) {return}
        let elem = document.createElement("div")
        elem.innerHTML = new Date();
        body.append(elem)
    }
}
window.addEventListener('scroll', func);

func(); // инициализация документ
