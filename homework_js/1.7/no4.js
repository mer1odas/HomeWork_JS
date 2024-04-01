let text = ""
let li = ""
while (text != null) {
    text = prompt("Введите текст")
    if (text != null) {
        li += "<li>" + text + "</li>"
    }
}
console.log(li);
// ulul.insertAdjacentHTML('afterbegin', li);
ulul.innerHTML = li
