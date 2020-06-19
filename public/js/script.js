function nav () {
    if ($(location).attr("pathname") === "/") {
        $(window).scroll(() => {
            if ($(this).scrollTop() > ($("nav").outerHeight() - 25)) {
                $("nav.fixed").removeClass("hide");
            } else {
                $("nav.fixed").addClass("hide");
            }
        });
    }
}

function init () {
    nav();
}

$(init());