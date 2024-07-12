function showNotification({top = 0, right = 0, className, html}) {
    let div = document.createElement("div")
    div.className = "notification"
    document.querySelector("h2").append(div)
    div.style.right = right + "px"
    div.style.top = top + "px"
    div.innerHTML = html
    div.classList.add(className)
    // div.remove()
    setTimeout(() => div.remove(), 1500)
  }

  let i = 1;
  setInterval(() => {
    showNotification({
      top: 10,
      right: 10,
      html: 'Hello ' + i++,
      className: "welcome"
    });
  }, 2000);
