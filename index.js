var pipes = document.getElementById("block");
var gap = document.getElementById("gap");
var chara = document.getElementById("chara");
var jumping = 0;

let playerPos = chara.getBoundingClientRect();
let grassPos = grass.getBoundingClientRect();

const JUMPSPEED = 60
const GRAVITYMAIN = 2

let gravity = GRAVITYMAIN
let gravityDec = 0.6
let terminalVec = 5
let impulse = 0

let flappyMoveIntId;

function start(){
    clearInterval(flappyMoveIntId)
    flappyMoveIntId = setInterval(moveFlappy,10) 
}

function moveFlappy(){
    var charaTop = parseInt(window.getComputedStyle(chara).getPropertyValue("top"));
    let newTop = charaTop + (gravity - impulse)
    impulse = Math.max(0, impulse*gravityDec)
    gravity = Math.min(terminalVec, gravity/gravityDec)
    chara.style.top = `${newTop}px`;
}


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
