function createCalendar(elem, year, month) {
    month = month - 1 
    const date = new Date(year, month, 1); // Создаем объект Date для первого дня месяца
    const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(); // Получаем количество дней в месяце
    const firstDay = new Date(year, month, 1).getDay(); // Получаем день недели для первого дня месяца
    let weekdays = "<tr><th>Пн</th><th>Вт</th><th>Ср</th><th>Чт</th><th>Пт</th><th>Сб</th><th>Вс</th></tr>"
    let week = ""
    let count_line = Math.floor(daysInMonth / 7)
    let number_day = 1
    let tr = ""
    console.log(firstDay);
    for (let i = 0; i <= 6; i++) { 
        if (i >= firstDay) {
            week += "<td>" + number_day + "</td>"
            number_day += 1
        }
        else {
            week += "<td></td>" 
        }
    }
    tr += "<tr>" + week + "</tr>"
    week = ""

    for (let i1 = 0; i1 <= count_line; i1++ ) {
        for (let i2 = 0; i2 <= 6; i2++) {
            week += "<td>" + number_day + "</td>"
            number_day += 1
        }
        tr += "<tr>" + week + "</tr>"
        week = ""
    }
    let table = "<table>" + weekdays + tr + "</table>"
    elem.innerHTML = table
}

createCalendar(calendar, 2012, 9)

