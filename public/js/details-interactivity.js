
window.onload = () => {

    const bookImage = document.querySelector(".book-display");
    const viewElement = document.querySelector(".book-display-view");
    const detailDisplay = document.querySelector(".preview");
    const bookImageInfo = document.querySelector(".book-display-info");
    const infoFigure = document.querySelector(".info-figure p");
    const topNav = document.querySelector(".top");
    
    const SHORTENED_STRING_LENGTH = 300;

    let bookWidth = bookImage.offsetWidth;
    let bookHeight = bookImage.offsetHeight;

    const shortenString = (text, length = 300, dots = 7) => text.substring(0, length) + Array(dots).fill(".").map(dot => dot).join("");
   

    // $(detailDisplay).hover(() => {
    //     $(bookImageInfo).show();
    // }, () => {
    //     $(bookImageInfo).hide();
    // });

    const actualFigureText = infoFigure.innerHTML;

    infoFigure.innerHTML = shortenString(actualFigureText, SHORTENED_STRING_LENGTH);

    window.onscroll = e => {

        if(this.scrollY > 140) {
            topNav.classList.add("top-border-bottom")
        } else {
            topNav.classList.remove("top-border-bottom")
        }
    }

};