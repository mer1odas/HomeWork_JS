function showPrompt(htmlText, callback) {
    prompt_form.text.focus()
    prompt_message.innerHTML = htmlText;

// закрытие модального окна
    function closeModal() {
        prompt_form_container.hidden = true;
        non.hidden = true;
    };

    // prompt_form.ok.onclick = function(event) {
    //     if (prompt_form.text.value == "") {return};
    //     event.preventDefault()
    //     callback(prompt_form.text.value);
    //     closeModal();
    // };
    prompt_form.onsubmit = function(event) {
        event.preventDefault()
        if (prompt_form.text.value == "") {return};
        callback(prompt_form.text.value);
        closeModal();
    }

    prompt_form.cancel.onclick = function() {
        callback(null);
       closeModal();
    };
    document.body.onkeydown = function(event) {
        if (event.code != "Escape") {return};
        callback(null);
       closeModal();
    };

    prompt_form.text.onkeydown = function(event) {
        if (event.key == "Tab" && event.shiftKey) {
            event.preventDefault()
            prompt_form.cancel.focus()
        }
    };

    prompt_form.cancel.onkeydown = function(event) {
        if (event.key == "Tab" && !event.shiftKey) {
            event.preventDefault()
            prompt_form.text.focus()
        }
    };
};

showPrompt("Введите что-нибудь<br>...умное :)", function(value) {
    alert(value);
});

test.onclick = function() {alert("123545")}
