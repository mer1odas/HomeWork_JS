function randomInteger(min, max) {
    max ++
    return Math.floor(min + (Math.random() * (max - min)));
};
alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5