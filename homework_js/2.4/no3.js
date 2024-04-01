thumbs.addEventListener('click', function(event) {
    if (event.target.tagName != "IMG") {return}
    let img = event.target.closest("a").getAttribute("href")
    largeImg.setAttribute("src", img)
    event.preventDefault()
})