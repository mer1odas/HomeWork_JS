function Calculator() {
    this.metods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b
    }
    this.calculate = function(str) {
        let arr = str.split(" ")
        let metod = arr[1]
        let a = arr[0]
        let b = arr[2]
        return this.metods[metod](Number(a), Number(b))
    };
    this.addMethod = function(name, func) {
        this.metods[name] = func
    };
};

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8