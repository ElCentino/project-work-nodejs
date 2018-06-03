
$(document).ready(function() {

    const bookImage = document.querySelector(".book-display");
    const viewElement = document.querySelector(".book-display-view");
    const detailDisplay = document.querySelector(".preview");
    const bookImageInfo = document.querySelector(".book-display-info");
    const infoFigure = document.querySelector(".info-figure p");
    const topNav = document.querySelector(".top");

    try {
        
        const SHORTENED_STRING_LENGTH = 300;
    
        let bookWidth = bookImage.offsetWidth;
        let bookHeight = bookImage.offsetHeight;
    
        const shortenString = (text, length = 300, dots = 7) => text.substring(0, length) + Array(dots).fill(".").map(dot => dot).join("");
    
        const actualFigureText = infoFigure.innerHTML;
    
        infoFigure.innerHTML = shortenString(actualFigureText, SHORTENED_STRING_LENGTH);

    } catch(e) {

        console.log("Not in details page then");
    }

   

    $(window).on('scroll', function() {

        if(this.scrollY > $(".body-details, .api-body").offset().top) {
            topNav.classList.add("top-border-bottom");
        } else {
            topNav.classList.remove("top-border-bottom");
        }
    });

    $(".more-details").on('click', function() {
        $("body, html").stop().animate({scrollTop: $(".details-header").offset().top}, 1000, 'swing');
    });
});