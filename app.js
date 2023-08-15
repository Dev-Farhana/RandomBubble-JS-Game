let timer = 60;
let score = 0;
let hitRn;

function increseScore(){
 score += 10;
  document.querySelector('#scoreId').textContent = score ;
}

function makeHit(){
   hitRn =  Math.floor(Math.random()* 10);
  document.querySelector('#hitVal').textContent = hitRn;
}

function makeBubble(){
     var myBubbles = "" ;
    for(let i =0; i <= 150; i++){
     let rn =  Math.floor(Math.random()*10);
     myBubbles += `<div class="bubble">${rn}</div>`;           
    }
    document.querySelector('#pbottom').innerHTML = myBubbles;
}

function runTimer(){
  let timeInt =  setInterval(function(){
     if(timer > 0){ 
     timer--;
        document.querySelector('#timeInterval').textContent = timer; 
      }
      else{
        clearInterval(timeInt);
        document.querySelector('#pbottom').innerHTML = `Game Over`;
      }
    },1000)
}


document.querySelector('#pbottom').addEventListener('click', function(hitDetails){
 let clickedNum = Number(hitDetails.target.textContent);
   if(clickedNum === hitRn){
    increseScore();
    makeBubble();
    makeHit();
   }
})


runTimer();
makeBubble();
makeHit();
