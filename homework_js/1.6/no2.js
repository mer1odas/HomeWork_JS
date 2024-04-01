for (let i of document.querySelectorAll("li")) {
    let href = i.firstChild.getAttribute("href")
    // console.log(i);
    // console.log(href);
    if (href.includes("://") && !(href.includes("internal.com"))) {
        i.firstChild.style.color = 'orange'    
    }
}