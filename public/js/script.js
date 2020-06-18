$(window).scroll(() => {
    if ($(this).scrollTop() >= $("nav").outerHeight()) {
        $("nav.fixed").removeClass("hide");
    } else {
        $("nav.fixed").addClass("hide");
    }
});