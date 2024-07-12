function getDateAgo(date, days) {
    let data = new Date(date);
    data.setDate(date.getDate() - days);
    return data.getDate();
};

let date = new Date(2015, 0, 2);
// getDateAgo(date, 3)

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)