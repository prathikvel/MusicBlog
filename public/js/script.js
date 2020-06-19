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

function offsetShowImage () {
    const showImage = $(".show .layout img");
    showImage.on("load", () => showImage.css("marginBottom", `-${showImage.height() / 3}px`));
    $(window).resize(() => showImage.css("marginBottom", `-${showImage.height() / 3}px`));
}

function init () {
    nav();
    offsetShowImage();
}

$(init());