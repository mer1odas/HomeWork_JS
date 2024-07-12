function topSalary(salaries) {
    let salary = 0;
    let name = null;
    for (let [names, salarys] of Object.entries(salaries)) {
        if (salarys > salary) {
            salary = salarys;
            name = names;
        };
    };
    return name;
};

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
console.log(topSalary(salaries));