function setFeaturesHeight () {
    const setFeaturesHeight = () => {
        const mediaQuery = window.matchMedia("(min-width: 600px)");
        const sideHeight = $(".side-a").outerHeight();
        const sideAWhiteSpace = parseFloat($(".side-a footer").css("marginTop"));
        const sideBWhiteSpace = parseFloat($(".side-b footer").css("marginTop"));
        const sideWhiteSpace = (sideAWhiteSpace < sideBWhiteSpace) ? sideAWhiteSpace : sideBWhiteSpace;
        const sideContentHeight = sideHeight - sideWhiteSpace;

        if (mediaQuery.matches) {
            $(".main").height(sideContentHeight);
        } else {
            $(".main").removeAttr("style");
        }
    }
    setFeaturesHeight();
    $(window).resize(setFeaturesHeight);
}

export default setFeaturesHeight;