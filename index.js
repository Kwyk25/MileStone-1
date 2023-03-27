var pipes = document.getElementById("block");
var gap = document.getElementById("gap");
var chara = document.getElementById("chara");
var jumping = 0;

gap.addEventListener('animationiteration', () => {
    var random = -((Math.random()*500)+200);
    gap.style.top = random + "px";
    counter++;
});

setInterval(function(){
    var charaTop = parseInt(window.getComputedStyle(chara).getPropertyValue("top"));
    if(jumping==0){
        chara.style.top = (charaTop+3)+"px"
    }
},10)

function jump(){
    jumping = 1;
    let jumpCount = 0
    var jumpInt = setInterval(function(){
        var charaTop = parseInt(window.getComputedStyle(chara).getPropertyValue("top"));
        
            chara.style.top = (charaTop-5)+"px"
        
            if(jumpCount>20){
                clearInterval(jumpInt);
                jumping = 0;
                jumpCount = 0;
            }
        jumpCount++;
    },10)
}