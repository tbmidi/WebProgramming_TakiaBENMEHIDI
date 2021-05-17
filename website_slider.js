var slide = new Array("img/main.png", "img/main1.png", "img/main3.png", "img/main4.png");
var number = 0;
setInterval("ChangeSlide(1)", 4000);
function ChangeSlide(direction) {
    number = number + direction;
    if (number < 0)
        number = slide.length - 1;
    if (number > slide.length - 1)
        number = 0;
    document.getElementById("slide").src = slide[number];
}