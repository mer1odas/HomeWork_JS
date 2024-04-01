// let rows = [document.getElementsByTagName("tr")]
let rows = Array.from(document.getElementsByTagName("tr")).slice(1)
let names = new Array()
for (let i of rows) {
    names.push(i.firstElementChild.innerHTML)
}
names.sort()
let info = []
// console.log(rows);
for (let i1 of rows) {
    for (let i2 of i1.children) {
        info.push(i2.innerHTML)
    }
}

let count = 0
let count1 = 0
for (let i1 of rows) {
    let index = info.indexOf(names[count1])
    for (let i2 of i1.children) {
        i2.innerHTML = info[index + count]
        count += 1
    }
    count = 0
    count1 += 1
}


console.log(info);
