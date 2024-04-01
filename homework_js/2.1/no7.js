// let i = 1;
// for(let li of document.querySelectorAll('li')) {
//   li.style.position = 'relative';
//   li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
//   i++;
// }
let li = document.querySelectorAll("li")
count = 0
document.querySelectorAll("button")[1].onclick = function() {
    if (li.length == count + 3) {
        return
    }
    if (li.length - (count + 3) == 2) {
        for (let i1 = count; i1 < count + 2; i1++) {
            li[i1].style.display = "none"
            li[i1 + 3].style.display = ""
        }
        count += 2
    }
    else if (li.length - (count + 3) == 1) {
            li[count].style.display = "none"
            li[count + 3].style.display = ""
            count += 1
    }
    else {
        for (let i1 = count; i1 < count + 3; i1++) {
            li[i1].style.display = "none"
            li[i1 + 3].style.display = ""
        }
        count += 3
    }
}

document.querySelectorAll("button")[0].onclick = function() {
    if (count == 0) {
        return
    }
    if (count == 2) {
        for (let i1 = count; i1 < count + 2; i1++) {
            console.log(i1);
            li[i1 + 1].style.display = "none"
            li[i1 - 2].style.display = ""
        }
        count -= 2
    }
    else if (count == 1) {
            li[count + 2].style.display = "none"
            li[count - 1].style.display = ""
            count -= 1
    }
    else {
        for (let i1 = count; i1 < count + 3; i1++) {
            li[i1].style.display = "none"
            li[i1 - 3].style.display = ""
        }
        count -= 3
    }
}