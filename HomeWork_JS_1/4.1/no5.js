function multiplyNumeric(obj) {
    for (let i in obj) {
        if (typeof obj[i] == "number") {
            obj[i] = obj[i] * 2
        };
    };
};
// до вызова функции
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  multiplyNumeric(menu);
  console.log(menu);