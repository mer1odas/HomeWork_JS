let a = [234, 23, 54, 18, 6, 7, 1, 2, 3]
function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }
a.sort(compareNumeric)
console.log(a.slice(0, 2));