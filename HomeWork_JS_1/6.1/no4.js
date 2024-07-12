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
    while (list != null) {
        console.log(list.value);
        list = list.next;
    };
};

function printList2(list) {
    if (list != null) {    
        console.log(list.value);
        printList2(list.next)
    };
    return
};

printList1(list)
console.log("////////////");
printList2(list)