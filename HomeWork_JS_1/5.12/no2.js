let room = {
    number: 23
  };
  
  let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
  };
  
  // цикличные ссылки
  room.occupiedBy = meetup;
  meetup.self = meetup;
  
  alert( JSON.stringify(meetup, function replacer(key, value) {
    if (value == meetup && key != "") {return undefined}
    return value
  }));
  
  /* в результате должно быть:
  {
    "title":"Совещание",
    "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
    "place":{"number":23}
  }
  */