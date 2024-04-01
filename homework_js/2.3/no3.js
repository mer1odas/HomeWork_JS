let th = document.querySelectorAll("th")
let td = document.querySelectorAll("td")
let count = 0

function information(a) {
    let age = []
    let name1 = []
    let info = []
    for (let i of td) {
        info.push(i.innerHTML)
        if (count % 2 == 0) {
            age.push(i.innerHTML)
        }
        else {
            name1.push(i.innerHTML)
        }
        count ++
    }
    if (a == 1) {return info}
    else if (a == 0) {return name1}
    else if (a == -1) {return age}
}
th[0].onclick = function(event) {
    let age = information(-1)
    let info = information(1)
    count = 0
    let count1 = 0

    age.sort(function (a, b) {
        return a - b;
    });
    for (let i1 of td) {
        if (count % 2 == 0) {
            i1.innerHTML = age[count1]
            count1 ++
        }
        else {
            i1.innerHTML = info[(info.indexOf(age[count1 - 1])) + 1]
        }
        count ++
    }
}

th[1].onclick = function(event) {
    let name1 = information(0)
    let info = information(1)
    count = 0
    count1 = 0
    name1.sort()
    for (let i1 of td) {
        if (count % 2 == 0) {
            i1.innerHTML = info[info.indexOf(name1[count1]) - 1]
        }
        else {
            i1.innerHTML = name1[count1]
            count1 ++
        }
        count ++
    }
}
