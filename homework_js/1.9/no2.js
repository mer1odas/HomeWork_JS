let div = document.create("div")
div.style.overflowY = 'scroll'
div.style.width = '50px'
div.style.height = '50px'
document.body.append(div)
let scroll = div.offsetWidth - div.clientWidth 