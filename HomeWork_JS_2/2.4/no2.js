contents.addEventListener('click', function(event) {
    console.log(event.target.tagName);
    if (event.target.tagName != "A" && event.target.closest("a") == null) {return}
    let result = confirm("Перейти по ссылке?")
    if (!result) {event.preventDefault()}
})