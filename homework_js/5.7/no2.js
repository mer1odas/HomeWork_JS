function aclean(arr) {
    let array = [];
    let obj = {};
    for (let i of arr) {
        let a = i.toLowerCase().split("").sort().join("");
        array.push(a);
        obj[a] = i;
    }
    let set = Array.from(new Set(array));

    return set.map(i => obj[i]);
    // console.log(array);
};

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"