function getLastDayOfMonth(year, month) {
    let data = new Date(year, month + 1, 0);
    return data.getDate();
};

console.log(getLastDayOfMonth(2024, 4));
console.log(getLastDayOfMonth(2012, 1));
console.log(getLastDayOfMonth(2024, 3));