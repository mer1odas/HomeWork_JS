function f(a) {
    alert(a)
  }
 
 function throttle(func, ms){
    let time = true;
    let argument = null;
    function a(arg){
        if (time == false) {
            argument = arg;
            return;
        }
        func(arg)
        time = false;
        setTimeout(function(){
            time = true
            if (argument){
                a(argument)
                argument = null
            }
        }, ms)
    }
    return a
};
 
//  throttle(f, 1000)
  // f1000 передаёт вызовы f максимум раз в 1000 мс
  let f1000 = throttle(f, 1000);
  
    f1000(1); // показывает 1
    f1000(2); // (ограничение, 1000 мс ещё нет)
    f1000(3); // (ограничение, 1000 мс ещё нет)
  setTimeout(f1000(4), 5000)
  
  // когда 1000 мс истекли ...
  // ...выводим 3, промежуточное значение 2 было проигнорировано