let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

function printList1(list) {
    let a = [];
    while (list != null) {
        a.push(list.value);
        list = list.next;
    };
    a.reverse();
    a.map((i) => console.log(i));
};

function printList2(list) {
    // if (list == null) {return};
    // printList2(list.next)
    // console.log(list.value);
    if (list != null) {    
        printList2(list.next)
        console.log(list.value);
    };
    return
};

printList1(list)
console.log("////////////");
printList2(list)