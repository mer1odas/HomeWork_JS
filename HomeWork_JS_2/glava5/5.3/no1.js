function preloadImages(sources, callback) {
    count = 0;
    for (let url of sources) {
        let elem = document.createElement("img");
        elem.src = url;

        elem.onload = function() {
            count++;
            if (count == sources.length) {callback()};
        };
        elem.onerror = function() {
            count++;
            if (count == sources.length) {callback()};
        };
    };
  }

  // ---------- тест ----------

  let sources = [
    "https://en.js.cx/images-load/1.jpg",
    "https://en.js.cx/images-load/2.jpg",
    "https://en.js.cx/images-load/3.jpg"
  ];

  // добавляем случайные символы к ссылкам, чтобы избежать кеширования
  for (let i = 0; i < sources.length; i++) {
    sources[i] += '?' + Math.random();
  }

  // для каждого изображения
  // создадим другое изображение с аналогичным src и проверим, есть ли у нас его ширина
  function testLoaded() {
    let widthSum = 0;
    for (let i = 0; i < sources.length; i++) {
      let img = document.createElement('img');
      img.src = sources[i];
      widthSum += img.width;
    }
    alert(widthSum);
  }

  // каждое изображение в разрешении 100x100, итоговая сумма их ширин должна быть 300
  preloadImages(sources, testLoaded);