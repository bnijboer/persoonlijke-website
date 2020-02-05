$(window).scroll(function(e) {
    var scroll = $(window).scrollTop();
    if (scroll >= 600) {
        $('.navbar').addClass("navbar-hide");
    } else {
        $('.navbar').removeClass("navbar-hide");
    }
});