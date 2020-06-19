function switchNav () {
    const switchNav = () => {
        if ($(window).scrollTop() > ($("nav").outerHeight() - 25)) {
            $("nav.fixed").removeClass("hide");
        } else {
            $("nav.fixed").addClass("hide");
        }
    }
    switchNav();
    $(window).scroll(switchNav);
}

export default switchNav;