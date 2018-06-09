$(window).on("load", function() {
    $(".loader").delay(1000).fadeOut("slow");
});

$(document).ready(function() {
    $("#currentYear").text((new Date()).getFullYear());
    //  Make Banner hight equal to the height off the viewport.
    var windowHeight = $(window).innerHeight();
    var viewportWidth = $(window).innerWidth();
    if (viewportWidth >= 768) {
        $('#cover').css('height', windowHeight);
    }
    scrollToDiv();

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) { // this refers to window
            $('.scrollUp').fadeIn();
        } else {
            $('.scrollUp').fadeOut();
        }
    });

})



function scrollToDiv() {
    /* smooth scrolling sections */
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
};
