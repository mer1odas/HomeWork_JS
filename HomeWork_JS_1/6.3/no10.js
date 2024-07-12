function makeArmy() {
    let shooters = [];
  
    let i = 0;
    while (i < 10) {
        let a = i;
        let shooter = function() { // функция shooter
         alert(a); // должна выводить порядковый номер
      };
    //   shooter()
      shooters.push(shooter); // и добавлять стрелка в массив
      i++;
    }
  
    // ...а в конце вернуть массив из всех стрелков
    return shooters;
  }
  
  let army = makeArmy();
  
  // все стрелки выводят 10 вместо их порядковых номеров (0, 1, 2, 3...)
  army[0](); // 10 от стрелка с порядковым номером 0
  army[1](); // 10 от стрелка с порядковым номером 1
  army[2](); // 10 ...и т.д.

// makeArmy()