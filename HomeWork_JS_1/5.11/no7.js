function getSecondsToTomorrow() {
    let data = new Date();
    let data1 = new Date(data.getFullYear(), data.getMonth(), data.getDate() + 1);
    return (data1 - data) / 1000
};

console.log(getSecondsToTomorrow());