function toggleNavCollapse () {
    $("nav .toggle").click(() => {
        $("nav.fixed ul").toggleClass("show");
        $("nav .toggle").toggleClass("x");
    });
}

export default toggleNavCollapse;