let cords = field.getBoundingClientRect()
console.log(cords);
console.log(cords.left, cords.top); // верхний левый, внешний угол 
console.log(cords.right, cords.bottom); // нижний правый, внешний угол
console.log(cords.left + field.clientLeft, cords.top + field.clientTop); // верхний левый, внутренний угол
console.log(cords.right - field.clientLeft, cords.bottom - field.clientTop); // нижний правый, внутренний угол