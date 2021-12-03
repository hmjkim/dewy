jQuery(function($){

    /*
    |----------------------------------------------------------------
    | Hide/Show Header
    |----------------------------------------------------------------
    */
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('nav').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta) {
          return;
        }

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('nav').removeClass('nav-down').addClass('nav-up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('nav').removeClass('nav-up').addClass('nav-down');
            }
        }
        lastScrollTop = st;
    }

    setInterval(function() {
        if(didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);


    /*
    |----------------------------------------------------------------
    | Flickity
    |----------------------------------------------------------------
    */

    // var element = document.querySelector(".carousel");
    // var flkty = new Flickity( element, {
    //     cellAlign: 'left',
    //     contain: true,
    // });

    // if (matchMedia('max-width: 575px').matches) {
        $('.carousel').flickity({
            wrapAround: true,
            cellAlign: 'center',
            contain: true
        });
    // }
  

});


