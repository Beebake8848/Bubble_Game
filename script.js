function makebubble(){
    var clutter = "";

for(var i=1; i<=168; i++){
    var rn = Math.floor(Math.random()*10)
   clutter += `<div class="bubble">${rn}</div>`
}

document.querySelector("#pbtm").innerHTML=clutter
}

var timer = 60;
function runTimer(){
    var timerint = setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent=timer;
    }
    else{
        clearInterval(timerint);
    }
    },1000);
}

function getNewHit(){
    
}

runTimer();
makebubble();