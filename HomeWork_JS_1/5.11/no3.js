function getLocalDay(date) {
    let weekday = date.getDay();
    if (weekday == 0) {return 7};
    return weekday;
};

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getLocalDay(date) );       // вторник, нужно показать 2