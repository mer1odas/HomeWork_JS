document.addEventListener('click', function(event) {
    console.log(123);
    if(event.target.className == "remove-button") {
        event.target.closest("div").remove()
    }
})