function isEmpty(obj) {
    for (let i in obj) {
        return false
    }
    return true
};

let schedule = {};

alert(isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert(isEmpty(schedule) ); // false