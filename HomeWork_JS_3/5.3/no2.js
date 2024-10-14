function makeEaseOut(timing) {
    return function(timeFraction) {
      return 1 - timing(1 - timeFraction);
    }
  }

  function bounce(timeFraction) {
    for (let a = 0, b = 1; 1; a += b, b /= 2) {
      if (timeFraction >= (7 - 4 * a) / 11) {
        return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
      }
    }
};

ball.onclick = () => {
    animate({
        duration: 3000,
        timing: makeEaseOut(function(timeFraction) {
            return timeFraction ** 2}
            ),
        draw: function(progress) {
            ball.style.left = 100 * progress + "px";
        }
    })

    animate({
    duration: 3000,
    timing: makeEaseOut(bounce),
    draw: function(progress) {
        ball.style.top = (field.clientHeight - ball.clientHeight) * progress + "px";
    }
})}
