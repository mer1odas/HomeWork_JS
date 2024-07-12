function randomInteger(min, max) {
    max ++
    return Math.floor(min + (Math.random() * (max - min)));
};

function shuffle(array) {
    // let arr = []
    // for (let i = 0; i < array.length; i++) {
    //     let rand = randomInteger(0, array.length - 1)
    //     // console.log(rand);
    //     while (arr.includes(array[rand])) {
    //         rand = randomInteger(0, array.length - 1)
    //     }
    //     arr.push(array[rand])
    // };
    // return arr
    array.sort(a => randomInteger(-1, 1))
    return array
};

let arr = [1, 2, 3];

console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));

