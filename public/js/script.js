

$(window).scroll(() => {
    if ($(this).scrollTop() >= ($("nav").outerHeight() - 30)) {
        $("nav.fixed").removeClass("hide");
    } else {
        $("nav.fixed").addClass("hide");
    }
});