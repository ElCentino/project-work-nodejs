
function setup() {
   noCanvas();

    setTimeout(function() {
        $(".icon").fadeOut();
    }, 3000);
}

function draw() {

    if(mouseX < 50 && mouseY < window.innerWidth * (50/100)) {
        $(".icon").fadeIn();
    } else {
        $(".icon").fadeOut();
    }
}

