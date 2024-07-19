let numberFilm;
let result;
let arrayPeopls;
let arrayStarships;
AllFilms.onclick = async function(event) {
    if (event.target.tagName != "DIV") {return};
    let AllFilm = Array.from(AllFilms.querySelectorAll(".film"));
    numberFilm = 1 + AllFilm.indexOf(event.target);

    let url = new URL("https://swapi.dev/api/films/" + numberFilm.toString());
    let response = await fetch(url, {method: "GET"});
    result = await response.json();

    filmsName.innerHTML = result.title;
    Name.innerHTML = result.title;
    episode.innerHTML = result.episode_id;
    director.innerHTML = result.director;
    producer.innerHTML = result.producer;
    data.innerHTML = result.release_date;

// Актеры:
    arrayPeopls = result.characters;
    Array.from(actors.querySelectorAll(".actor")).forEach(element => element.remove())
    for (let url of arrayPeopls) {
        let response = await fetch(url);
        let result = await response.json();
        let people = document.createElement("DIV");
        people.innerHTML = result.name;
        people.classList.add("actor");
        actors.append(people);
    };

// Звездные корабли
    arrayStarships = result.starships;
    Array.from(starship.querySelectorAll(".starship")).forEach(element => element.remove())
    for (let url of arrayStarships) {
        let response = await fetch(url);
        let result = await response.json();
        let ship = document.createElement("DIV");
        ship.innerHTML = result.name;
        ship.classList.add("starship");
        starship.append(ship);
    };
};

// Откытие/закрытие актеров
let DownUpHIDE = true;
DownUp.onclick = function(event) {
    if (DownUpHIDE) {
        DownUpHIDE = false;
        actors.hidden = false 
    }
    else {
        actors.hidden = true
        DownUpHIDE = true;
    };
    return false;
};
DownUp.onmousedown = function() {return false;};

// Элемент "подробнее" персонажи
function getCoords(elem) {
    let box = elem.getBoundingClientRect();
  
    return {
      top: box.top + window.pageYOffset,
      right: box.right + window.pageXOffset,
      bottom: box.bottom + window.pageYOffset,
      left: box.left + window.pageXOffset
    };
};

let tooltip;
let time;
actors.onmouseover = function(event) {
    if (event.target == actors) {return}
    event.target.style.color = "red";

    time = setTimeout(function() {
        tooltip = document.createElement("DIV");
        tooltip.classList.add("tooltip");
        tooltip.innerHTML = "Подробнее";
        event.target.before(tooltip);

        let cords = getCoords(event.target);
        tooltip.style.left = cords.left + (event.target.offsetWidth - 70) / 2 + "px";
        tooltip.style.top = cords.top - tooltip.clientHeight - tooltip.clientTop + 2 + "px";
    }, 300)
};

actors.onmouseout = function(event) {
    event.target.style.color = "black";

    clearTimeout(time)
    if (tooltip) {tooltip.remove()}
};

// Модальное окно для персонажей
actors.onclick = async function(event) {
    if (event.target == actors) {return};
    let allPeopls = Array.from(actors.querySelectorAll(".actor"));
    let numberPeopl = allPeopls.indexOf(event.target);

    // console.log(arrayPeopls);
    let url = new URL(arrayPeopls[numberPeopl]);
    let response = await fetch(url);
    let infoPeopls = await response.json();

    namePeople.innerHTML = infoPeopls.name;
    height.innerHTML = "Рост: " + infoPeopls.height + "см";
    massa.innerHTML = "Вес: " + infoPeopls.mass + "кг";
    eye_color.innerHTML = "Цвет глаз: " + infoPeopls.eye_color;
    birthday_year.innerHTML = "Год рождения: " + infoPeopls.birth_year;

    modal.hidden = false;
};
close1.onclick = function() {
    modal.hidden = true;
};
close1.onmouseover = function() {
    close1.style.color = "red"
};
close1.onmouseout = function() {
    close1.style.color = "black"
};

// Откытие/закрытие звездные корабли
starships.onmousedown = function() {return false;};

let starshipsHIDE = true;
starships.onclick = function() {
    if (starshipsHIDE) {
        starship.hidden = false;
        starshipsHIDE = false;
    }
    else {
        starship.hidden = true;
        starshipsHIDE = true;
    }
}

// Элемент "подробнее" звездные корабли 
let tooltip1;
let time1;
starship.onmouseover = function(event) {
    if (event.target == starship || event.target.tagName != "DIV" || event.target.classList.contains("infoStarShip") || event.target == tooltipForStarShip) {return};
    event.target.style.color = "red";

    time1 = setTimeout(function() {
        tooltip1 = document.createElement("DIV");
        tooltip1.classList.add("tooltip");
        tooltip1.innerHTML = "Подробнее";
        event.target.before(tooltip1);

        let cords = getCoords(event.target);
        tooltip1.style.left = cords.left + (event.target.offsetWidth - 70) / 2 + "px";
        tooltip1.style.top = cords.top - tooltip1.clientHeight - tooltip1.clientTop + 2 + "px";
    }, 350)
};

starship.onmouseout = function(event) {
    if (event.target == starship || event.target.tagName != "DIV" || event.target.classList.contains("infoStarShip") || event.target == tooltipForStarShip) {return};
    event.target.style.color = "black";

    clearTimeout(time1)
    if (tooltip1) {tooltip1.remove()}
};


// Информация звездые корабли arrayStarships
let infoStarShipsHIDE = true;
starship.onclick = async function(event) {
    if (event.target == starship || event.target.tagName != "DIV") {return};
    if (infoStarShipsHIDE) {
        infoStarShipsHIDE = false;
        tooltipForStarShip.hidden = false;

        let cords = getCoords(event.target);
        tooltipForStarShip.style.left = 50 + cords.left + event.target.offsetWidth + "px";
        tooltipForStarShip.style.top = cords.top - (tooltipForStarShip.offsetHeight / 2) + (event.target.offsetHeight / 2) + "px";
        console.log(tooltipForStarShip.style.top);
        console.log(tooltipForStarShip.offsetHeight);
        console.log(event.target.offsetHeight);


        let allStarShips = Array.from(starship.querySelectorAll(".starship"));
        let numberStarShip = allStarShips.indexOf(event.target);
    
        // console.log(arrayPeopls);
        let url = new URL(arrayStarships[numberStarShip]);
        let response = await fetch(url);
        let infoStarship = await response.json();
    
        NameStarShip.innerHTML = infoStarship.name;
        classStarShip.innerHTML = "Класс: " + infoStarship.starship_class;
        manufacturer.innerHTML = "Производитель: " + infoStarship.manufacturer;
        passengers.innerHTML = "Вмещаемость : " + infoStarship.passengers;
        speed.innerHTML = "Скорость: " + infoStarship.max_atmosphering_speed;
        length1.innerHTML = "Длина: " + infoStarship.length;
    }
};


// Закрытие информации звездные корабли
close2.onclick = function() {
    infoStarShipsHIDE = true;
    tooltipForStarShip.hidden = true;
};
close2.onmouseover = function() {
    close2.style.color = "red"
};
close2.onmouseout = function() {
    close2.style.color = "black"
};