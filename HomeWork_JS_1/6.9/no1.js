function work(a, b) {
    alert( a + b );
    // return // произвольная функция или метод
};

function spy(func){
    let info = []
    function spy1(...arg){
        info.push(arg)
        return func(arg[0], arg[1])
    }
    spy.calls = info
    return spy1
};

work = spy(work);
  
work(1, 2); // 3
work(4, 5); // 9

// console.log(spy.calls);
for (let args of spy.calls) {
    alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
};