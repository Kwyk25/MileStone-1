var pipes = document.getElementById("block");
var gap = document.getElementById("gap");

gap.addEventListener('animationiteration', () => {
    var random = -((Math.random()*750)+200);
    gap.style.top = random + "px";
    counter++;
});