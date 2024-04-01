    /**
     * Позиционирует элемент elem относительно элемента anchor в соответствии со значением position.
     *
     * @param {Node} anchor     элемент, около которого позиционируется другой элемент
     * @param {string} position одно из: top/right/bottom
     * @param {Node} elem       элемент, который позиционируется
     *
     * Оба элемента elem и anchor должны присутствовать в документе
     */
    function positionAt(anchor, position, elem) {
        let cords = anchor.getBoundingClientRect()
        console.log(cords);
        if (position == "top-out") {
            elem.style.left = cords.left + "px"
            elem.style.top = cords.top - elem.offsetHeight + "px"
            }
        else if (position == "right-out") {
            elem.style.left = anchor.clientWidth + cords.left + "px"
            elem.style.top = cords.top + "px"
        }
        else if (position == "bottom-out") {
            // elem.style.top = cords.bottom + "px"
            elem.style.left = cords.left + "px"
            elem.style.top = cords.top + anchor.offsetHeight + "px"
        }
        else if (position == "top-in") {
            elem.style.top = cords.top + "px"
            elem.style.left = cords.left + "px"
        }
        else if (position == "right-in") {
            elem.style.top = cords.top + "px"
            elem.style.left = cords.left + anchor.clientWidth - elem.clientWidth + "px"
        }
        else if (position == "bottom-in") {
            elem.style.left = cords.left + "px"
            elem.style.top = cords.bottom - elem.clientHeight + "px"
        }
    
    }
    
    function showNote(anchor, position, html) {
        let note = document.createElement('div');
        note.className = "note";
        note.innerHTML = html;
        document.body.append(note);
        positionAt(anchor, position, note);
        }
      
    let blockquote = document.querySelector('blockquote');
      
    showNote(blockquote, "top-out", "note above");
    showNote(blockquote, "right-out", "note at the right");
    showNote(blockquote, "bottom-out", "note below");
    showNote(blockquote, "top-in", "top-in");
    showNote(blockquote, "right-in", "right-in");
    showNote(blockquote, "bottom-in", "bottom-in");
