// Francesco Chrabieh

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("mouseover", function() {
            this.style.opacity = "0.7";
        });
        button.addEventListener("mouseout", function() {
            this.style.opacity = "1.0";
        });
    });
});
