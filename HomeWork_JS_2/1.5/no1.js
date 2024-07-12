for (let i of document.querySelectorAll("li")) {
    console.log(i);
    console.log(i.firstChild.data);
}
console.log(document.getElementsByTagName("li").length);