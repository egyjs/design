// max-height: 91px;

$(document).ready(function () {
    // scroll
    var flyHeader = 200;
    var flyclass = "fixed-top position-fixed animated fadeInDown fly"
    $(window).scroll(function () {
        var scroll = getCurrentScroll();
        if (scroll >= flyHeader) {
            $('#thenav').addClass(flyclass);
            $('.logo').addClass('whitetxt');
            //            $('.logo img').addClass('whitetxt');

        } else {
            $('#thenav').removeClass(flyclass);
            $('.logo').removeClass('whitetxt');
        }

        if ((scroll + 100) >= $(window).height()) {
            $(".btn-up").fadeIn(100);
        } else {
            $(".btn-up").fadeOut("slow");
        }
    });

    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }

    //    **************
    // Defining a function to set size for #hero
    function fullscreen() {
        if ($(window).innerWidth() <= 812) {
            $('#hero').css({
                width: $(window).width(),

            });
        } else {
            $('#hero').css({
                width: $(window).width(),
                'max-height': $(window).height()

            });
        }
    }
    fullscreen();

    // Run the function in case of window resize
    $(window).resize(function () {
        fullscreen();
       // location.reload();

    });

    // Smooth scrolling using jQuery easing

    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 100)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

});
$( function() {
    $('#price-range').slider({
        range: true,
        min: 10000,
        max: 15000000,
        values: [10000, 15000000],
        slide: function(event, ui) {
            $('#price-min span').text(ui.values[0]);
           $('#price-max span').text(ui.values[1]);
        }
    });
});


function updateClock() {
    // set the content of the element with the ID time to the formatted string
    $(".timenow").text(new Date(new Date().getTime()).toLocaleTimeString());

    // call this function again in 1000ms
    setTimeout(updateClock, 1000);
}
updateClock(); // initial call