
window.onload = () => {

    const centerText = document.querySelector("#centerText");

    const $animElements = $(".anim-element");
    const $window = $(window);

    const xhr = new XMLHttpRequest();
    xhr.open('GET', './json/centerWords.json', true);

    xhr.onload = () => {

        const centerWords = JSON.parse(xhr.responseText);

        let centerWordsIndex = 1;

        let interval = setInterval(() => {

        if($ && centerWords) {

            if(centerWordsIndex >= centerWords.length) centerWordsIndex = 0;

                $(centerText).fadeOut(() => {
                    $(centerText).fadeIn();
                    $(centerText).html(centerWords[centerWordsIndex++]);
                });
            }
        }, 6000);

    };

    xhr.send();

    function animateIcons() {

        window.onscroll = () => {

            var icons = document.querySelectorAll(".fa-sync");

            for(var icon of icons) {

                var val = map(window.scrollY, 0, window.outerHeight, 0, 360);

                icon.style.transform = `rotate(${Math.ceil(val)}deg)`;
            }
        };
    }

    function checkView() {

        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each($animElements, function() {
            
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);

            if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
                $element.addClass('in-view');
            } else {
                $element.removeClass('in-view');
            }
        });
    }

    $window.on('scroll resize', checkView);
    $window.trigger('scroll');

    function map(source, low, high, min, max) {

        return ((source - low) * (max/high)) + min;
    }

    animateIcons();
};
