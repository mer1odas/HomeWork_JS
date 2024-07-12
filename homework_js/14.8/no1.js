let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];
let animal = new Intl.Collator()
animals.sort((a, b) => animal.compare(a, b))
alert( animals ); // АИСТ,ёж,енот,ехидна,тигр,ЯК