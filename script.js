
function start(){
var startingMinutes=document.getElementById("starting-minutes").value;

let time=startingMinutes*60;


const countdown=document.getElementById("countdown");



setInterval(countDown , 1000);

function countDown(){
    
    const minutes=(Math.floor(time/60));
    
    let seconds=time%60;
    
    
    seconds=seconds<10 ?'0' + seconds:seconds;
    
    
    if(seconds<=0 ){
      stop()
    }
    countdown.innerHTML=`${minutes}:${seconds}`;
    
    
    time--;
}
}

function stop(){
  clearInterval(countdown)
}