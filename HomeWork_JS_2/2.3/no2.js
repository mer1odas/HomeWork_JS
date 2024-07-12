document.addEventListener('click', function(event) {
    if (event.target.firstElementChild != null) {
        if (event.target.tagName == "LI") {
            if (event.target.firstElementChild.hidden) {
                event.target.firstElementChild.hidden = false
            }
            else {
                event.target.firstElementChild.hidden = true
            }
        }
    }
})