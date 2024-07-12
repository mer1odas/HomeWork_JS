function makeObservable(target) {
    target.func = [];
    target.observe = function(handler) {
        target["func"].push(handler)
    };
    return new Proxy(target, {
        set(target, property, value, receiver) {
            Reflect.set(target, property, value, receiver)
            target["func"].forEach(element => {element(property, value)});
        }
    });
};
  
  let user = {};
  user = makeObservable(user);
  
  user.observe((key, value) => {
    alert(`SET ${key}=${value}`);
  });
  
  user.name = "John"; // выводит: SET name=John