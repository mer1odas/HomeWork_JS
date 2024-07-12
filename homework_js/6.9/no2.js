function f(x, a) {
    alert(x + a);
  }

  function delay(f, ms){
    return function(){
        setTimeout(() => f.apply(this, arguments), ms)
    }
  };


  
//   function f1(x) {
//     alert(x.t)
//   }


//   function f2(x) {
//     this.t = 10;
//     f1(this)
//   }

//   f2(0);

  // создаём обёртки
  let f1000 = delay(f, 1000);
  let f1500 = delay(f, 10000);
  
  f1000("test", "abc"); // показывает "test" после 1000 мс
  f1500("test", "abc"); // показывает "test" после 1500 мс