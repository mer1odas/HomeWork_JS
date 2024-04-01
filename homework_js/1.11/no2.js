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
    if (position == "top") {
        elem.style.left = cords.left + "px"
        elem.style.top = cords.top - elem.offsetHeight + "px"
        }
    else if (position == "right") {
        elem.style.left = anchor.clientWidth + cords.left + "px"
        elem.style.top = cords.top + "px"
    }
    else if (position == "bottom") {
        // elem.style.top = cords.bottom + "px"
        elem.style.left = cords.left + "px"
        elem.style.top = cords.top + anchor.offsetHeight + "px"
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
  
showNote(blockquote, "top", "note above");
  showNote(blockquote, "right", "note at the right");
  showNote(blockquote, "bottom", "note below");