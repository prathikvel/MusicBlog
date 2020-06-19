function offsetShowImage () {
    const showImage = $("article .layout img");
    const offsetShowImage = () => showImage.css("marginBottom", `-${showImage.height() / 3}px`);
    showImage.on("load", offsetShowImage);
    $(window).resize(offsetShowImage);
}

export default offsetShowImage;