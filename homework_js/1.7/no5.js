
// for (let i in data) {
//     console.log(data[i]);
//     let a = document.createElement("ul")
//     a.innerHTML = i
//     tree.append(a)
// }

// function test(t1) {
//     let t2;
//     t1 += 1;
//     if (t1 != 5)
//         t2 = test(t1);
//     console.log(t1);
//     console.log(t2);
//     return t1;
// }


// let t = 3;
// t3 = test(t);
// console.log(test(t));

let data = {
    "Рыбы": {
      "форель": {},
      "лосось": {}
    },
  
    "Деревья": {
      "Огромные": {
        "секвойя": {},
        "дуб": {}
      },
      "Цветковые": {
        "яблоня": {},
        "магнолия": {}
      }
    }
  };

function createTree(a) {


    let li = '';
    let ul = '';
    for (let i in a) {
        console.log(">>>" + i);
        li += '<li>' + i + createTree(a[i]) + '</li>';
        console.log(li);
    }
    if (li != '') {
        ul = '<ul>' + li + '</ul>';
        
    }
    
    return ul
}

tree.innerHTML = createTree(data)