function changeImage() {
    var img = document.getElementById("image");
    if (img.src.endsWith("1.jpg")) {
        img.src = "2.jpg";
    } else {
        img.src = "1.jpg";
    }
}