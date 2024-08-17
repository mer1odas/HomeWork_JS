arrowTop.hidden = !(document.documentElement.scrollTop >= document.documentElement.clientHeight);

window.onscroll = function(event) {
    arrowTop.hidden = !(document.documentElement.scrollTop >= document.documentElement.clientHeight);
};

arrowTop.onclick = function(event) {
    window.scrollTo(0, 0);
};
