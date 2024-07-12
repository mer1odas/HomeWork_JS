function sum(a) {
    let sumsum = a;
  
    let a1 = function(b) {
      sumsum += b;
      a1.result = sumsum;
      return a1;
    };

    return a1;
}
  
  alert( sum(1)(2).result ); // 3
  alert( sum(5)(-1)(2).result ); // 6
  alert( sum(6)(-1)(-2)(-3).result ); // 0
  alert( sum(0)(1)(2)(3)(4)(5).result ); // 15