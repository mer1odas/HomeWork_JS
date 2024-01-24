let a = [543, 43, 42, 1, 2, 3]
let n = 0
for (let i = 0; i <= a.length; i++) {
    for (let i1 = i + 1; i1 <= a.length; i1++) {
        // console.log("/////" + i1);
        if (a[i] > a[i1]) {
            [a[i], a[i1]]  =  [a[i1], a[i]]

        }
    }
}
console.log(a);