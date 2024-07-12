let array = [1, 2, 3];

array = new Proxy(array, {
  get(target, prop, receiver) {
    if (prop < 0) {
        // console.log(typeof prop);
        // console.log(typeof target.length);
        return Reflect.get(target, (target.length + parseInt(prop)), receiver)
    }
    else {
        return Reflect.get(target, prop, receiver)
    }
  }
});

alert( array[-1] ); // 3
alert( array[-2] ); // 2

// вся остальная функциональность массивов должна остаться без изменений