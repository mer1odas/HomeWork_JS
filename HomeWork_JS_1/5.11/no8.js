function formatDate(date) {
    let now = new Date();
    let data = now - date;
    if (data < 1000) {return "прямо сейчас"}
    else if (data < 1000 * 60) {return data / 1000 + " сек. назад"}
    else if (data < 1000 * 60 * 60) {return data / (1000 * 60) + " минут назад"}
    else {
        return date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear() + ", " + date.getHours() + ":" + date.getMinutes()
    };
};

alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );