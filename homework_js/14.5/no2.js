function isInteger(number) {
    if (~~number == number) {return true}
    return false
};

alert( isInteger(1) ); // true
alert( isInteger(1.5) ); // false
alert( isInteger(-0.5) ); // false