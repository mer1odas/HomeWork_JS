function getSecondsToday() {
    let data = new Date();
    let data1 = new Date(data.getFullYear(), data.getMonth(), data.getDate() - 1);
    return (data - data1) / 1000
};

console.log(getSecondsToday());