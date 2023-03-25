var pipes = document.getElementById("block");
var gap = document.getElementById("gap");
var chara = document.getElementById("chara");

gap.addEventListener('animationiteration', () => {
    var random = -((Math.random()*500)+200);
    gap.style.top = random + "px";
    counter++;
});

setInterval(function(){
    var charaTop = parseInt(window.getComputedStyle(chara).getPropertyValue("top"));
    chara.style.top = (charaTop+2)+"px"
},10)