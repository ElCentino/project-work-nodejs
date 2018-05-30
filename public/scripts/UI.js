$(document).ready(function() {

    const imageBrightness = 20;

    const body = $("html, body");

    const images = ['image/ce1.jpg', 'image/ce2.jpg', 'image/ce3.jpg', 'image/ce4.jpg'];
    let currentImageIndex = 3;

    $(".img-fader").css("filter", `brightness(${imageBrightness}%)`);

    const slider = setInterval(function () {

      if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
      }

      $(".img-fader").fadeOut('1500', function () {
        $(this).fadeIn('slow');
        $(this).attr("src", images[currentImageIndex++]);
        $(this).css("filter", `brightness(${imageBrightness}%)`);
      });

    }, 5000);

    $(".ministries-area ul li").on('click', function(e) {
      $(this).addClass("side-active");
      $(".ministries-area ul li").not(this).removeClass("side-active");
    });

    $(".locations-area-list li, .locator-nav").on('click', function(e) {
      e.preventDefault();
      let currentThis = $(this).attr("data-location");
      let position = $("#location-area").offset().top;

      animateToPosition(position, 1000);

      $(this).addClass("location-active");
      $(".locations-area-list li").not(this).removeClass("location-active");
      setTimeout(() => {
          $(".main-nav").slideUp();
      }, 1000);

      $(".maps").fadeOut(function() {
        $(this).fadeIn();
        $(".maps").attr("src", currentThis);
      });
    });

    $(".library-nav").on('click', function(e) {
      e.preventDefault();
      let position = $("#trending").offset().top;
      animateToPosition(position, 1000);
    });

    $(".home-nav").on('click', function(e) {
      e.preventDefault();
      animateToPosition(0, 1000);
    });

    $(".about-nav").on('click', function(e) {
      e.preventDefault();
      let position = $(".about-section").offset().top;
      animateToPosition(position, 1000);
    });

    $(".ministries-nav").on('click', function(e) {
      e.preventDefault();
      let position = $(".ministries-area").offset().top;
      animateToPosition(position, 1000);
    });

    const slideToggler = slideToggle();

    $(".toggle-btn").on('click', function() {
      if(slideToggler() == true) {
        $(".maps").slideDown();
      } else {
        $(".maps").slideUp();
      }
    });

    var subsequent = 500;

    $(window).on('scroll', function() {
      
      if($(this).scrollTop()) {

          $(".main-nav").addClass("black");

          $(".nav-logo-img").fadeOut(function() {
            $(".nav-black-hide").addClass("nav-logo").css("padding-top", "28px");
            
            $(".top-contact-info").slideUp();
            $(".nav-black-hide").fadeIn();
          });   
          
      } else {
        
          if(window.outerWidth > 780) {

            $(".top-contact-info").slideDown();

            $(".nav-black-hide").fadeOut(function() {
              $(".nav-black-hide").removeClass("nav-logo");
              $(".nav-logo-img").fadeIn();
            });
          }

          $(".main-nav").removeClass("black");
      }

        var element_position = $('.maps').offset().top;

        var y_scroll_pos = window.pageYOffset;
        var scroll_pos_test = element_position;

        if(y_scroll_pos > scroll_pos_test - 300 && window.outerWidth > 768) {
          $(".main-nav").slideUp();
        }else {
            
          $(".main-nav").slideDown();
          $(".locator-nav").removeClass("location-active");
        }

        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
          
          setTimeout(function() {
            $(".main-nav").slideDown();
          }, 2000);
        }
     
    });

    $(window).on('scroll', function() {

      
    });

    $(".ministries-area header").on('click', function() {

      if(window.outerWidth < 768) {
        $(".ministries-area ul").slideToggle();
      }
    });

    $(window).on('resize', function() {

      if(window.outerWidth < 768) {

        $(".categories").slideUp();


        if(window.scrollY + window.innerHeight > $(".ministries-area").offset().top) {

          $(".ministries-area ul").slideUp();
        }

      } else {

        $(".ministries-area ul").slideDown();
        $(".categories").slideDown();
      }

      if(window.outerWidth < 1200) {

        $(".nav-black-hide").addClass("nav-logo").css("padding-top", "28px");
        $(".nav-logo-img").fadeOut();
        $(".nav-black-hide").fadeIn();
        $(".top-contact-info").slideUp();
      } else {
        
        $(".nav-black-hide").removeClass("nav-logo");
        $(".nav-black-hide").fadeOut();
        $(".nav-logo-img").fadeIn();
      }
    });
    
    function slideToggle() {
      var up = true;

      return function () {
        up = !up;
        return up;
      }
    }

    function animateToPosition(pos, speed) {
      body.stop().animate({scrollTop: pos}, speed, 'swing');
    }

});