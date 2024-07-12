function unique(arr) {
    let array = []
    for (let i of arr) {
        if (!(array.includes(i))) {
            array.push(i)
        }
    }
    return array
  }
  
  let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
  ];
  
  alert( unique(strings) ); // кришна, харе, :-O