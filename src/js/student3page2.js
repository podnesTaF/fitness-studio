function changeImage() {
    var dropdown = document.getElementById("mySelect");
    var image = document.getElementById("myImage");
    image.src = dropdown.value;
}
