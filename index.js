var pipes = document.getElementById("pipes");
var gap = document.getElementById("gap");
var chara = document.getElementById("chara");
var jumping = 0;
var counter = 0;

gap.addEventListener('animationiteration', () => {
    var random = -((Math.random()*500)+200);
    gap.style.top = random + "px";
    counter++;
});

setInterval(function(){
    var charaTop = parseInt(window.getComputedStyle(chara).getPropertyValue("top"));
    if(jumping==0){
        chara.style.top = (charaTop+2)+"px";
    }
    var pipesLeft = parseInt(window.getComputedStyle(pipes).getPropertyValue("left"));
    var gapTop = parseInt(window.getComputedStyle(gap).getPropertyValue("top"));
    var cTop = -(500-charaTop);
    if((charaTop>659)||((pipesLeft<191)&&(pipesLeft>-70)&&((cTop<gapTop+253)||(cTop>gapTop+359)))){
        alert("Game over. Score: "+(counter -1));
        chara.style.top = 200 + "px";
        counter=0;
    }
},10);

function jump(){
    jumping = 1;
    let jumpCount = 0;
    var jumpInt = setInterval(function(){
        var charaTop = parseInt(window.getComputedStyle(chara).getPropertyValue("top"));
        if((charaTop>6)&&(jumpCount<15)){
            chara.style.top = (charaTop-6)+"px";
        }
        if(jumpCount>20){
            clearInterval(jumpInt);
            jumping=0;
            jumpCount=0;
        }
        jumpCount++;
    },10);
}