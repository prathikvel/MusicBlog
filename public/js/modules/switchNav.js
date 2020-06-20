function switchNav () {
    const switchNav = () => {
        const mediaQuery = window.matchMedia("(max-width: 600px)");
        const staticNavHeight = $("nav.static").outerHeight() - 25;

        if (!mediaQuery.matches) {
            $("nav.fixed").show();

            if ($(window).scrollTop() > staticNavHeight) {
                $("nav.fixed").addClass("show").removeClass("hide");
            } else {
                $("nav.fixed").addClass("hide").removeClass("show");
            }
        } else {
            $("nav.fixed").removeClass(["show", "hide"]);
        }
    }
    switchNav();
    $(window).resize(switchNav);
    $(window).scroll(switchNav);
}

export default switchNav;