function makeWorker() {
    let name = "Pete";
  
    return function() {
      alert(name);
    };
  }
  
  let name = "John";
  
  // создаём функцию
  let work = makeWorker();
  
  // вызываем её
  work(); // что будет показано?
  
//   Pete