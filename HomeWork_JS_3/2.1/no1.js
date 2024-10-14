
function concat(arrays) {
    
    let len = arrays.reduce((result, arr) => result + arr.length, 0);
    let result = new Uint8Array(len);
  
    let index = 0;
    for (let array of arrays) {
        result.set(array, index);
        index += array.length;
    }

    return result;
  }
  
  let chunks = [
    new Uint8Array([0, 1, 2]),
    new Uint8Array([3, 4, 5]),
    new Uint8Array([6, 7, 8])
  ];
  
  console.log(Array.from(concat(chunks))); // 0, 1, 2, 3, 4, 5, 6, 7, 8
  
  console.log(concat(chunks).constructor.name); // Uint8Array
