function setFeaturesHeight () {
    const setFeaturesHeight = () => {
        const max = window.matchMedia("(max-width: 1000px)");
        const min = window.matchMedia("(min-width: 600px)");
        const sideHeight = $(".side-a").outerHeight();

        if (max.matches && min.matches) {
            $(".features .main").height(sideHeight);
        } else {
            $(".features .main").removeAttr("style");
        }
    }
    setFeaturesHeight();
    $(window).resize(setFeaturesHeight);
}

export default setFeaturesHeight;