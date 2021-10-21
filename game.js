let playerScore=0;
let computerScore=0;
const icon = document.getElementById('icon');
const iconChildren= icon.children;
Array.from(iconChildren).forEach(item=>item.ondragstart=function(){return false});
let humanScore= document.querySelector('.human-score');
humanScore.textContent = playerScore;
let botScore=document.querySelector('.computer-score');
botScore.textContent=computerScore;

let resultShowBox =document.querySelector('#final-message-text');
resultShowBox.textContent='Let\'s Play Round of 5 ';
resultShowBox.setAttribute('style', 'white-space: pre;');

let finalMesage = document.querySelector('.final-message');

const rockButton=document.getElementById('rock');
rockButton.addEventListener('click',()=>{
   if(playerScore===5 || computerScore===5){
      return;
   }else
      whoWon("rock");});
const scissorButton=document.getElementById('scissors');
scissorButton.addEventListener('click',()=>{
   if(playerScore===5 || computerScore===5){
      return;
   }else
     whoWon("scissors");});
const paperButton=document.getElementById('paper');
paperButton.addEventListener('click',()=>{
   if(playerScore===5 || computerScore===5){
      return;
   }else
     whoWon("paper");});
function computerPlay(){
    let value = Math.floor(Math.random()*3+1);
    if(value===1){
        return "Rock";
    } else if (value ===2){
        return "Paper";
    }else return "Scissors";
}

function whoWon(string){
    let playerSelection = string;
    let computerSelection = computerPlay();

    if(((playerSelection.toUpperCase())===(computerSelection.toUpperCase()))){
        resultShow(0);}
     else if((playerSelection.toUpperCase()==="ROCK")&&(computerSelection.toUpperCase()==="PAPER")){
        upDate(0);
        resultShow(2);}
     else if((playerSelection.toUpperCase()==="ROCK")&&(computerSelection.toUpperCase()==="SCISSORS")){
        upDate(1);
        resultShow(1);
     }
     else if((playerSelection.toUpperCase()==="PAPER")&&(computerSelection.toUpperCase()==="ROCK")){
        upDate(1);
        resultShow(1);
     }else if((playerSelection.toUpperCase()==="PAPER")&&(computerSelection.toUpperCase()==="SCISSORS")){
        upDate(0);
        resultShow(2);
     }else if((playerSelection.toUpperCase()==="SCISSORS")&&(computerSelection.toUpperCase()==="ROCK")){
        upDate(0);
        resultShow(2);
     }else if((playerSelection.toUpperCase()=="SCISSORS")&&(computerSelection.toUpperCase()==="PAPER")){
        upDate(1);
        resultShow(1);
     }
}

function upDate(score){
  if(score===1){
     playerScore=playerScore+1;
     humanScore.textContent= playerScore;
  }else if(score===0){
     computerScore=computerScore+1;
     botScore.textContent= computerScore;
  }
}

function resultShow(value){
   if(value===0){
      resultShowBox.textContent='';
      resultShowBox.textContent='Draw';
   }else if(value===1){
      resultShowBox.textContent='';
      resultShowBox.textContent='Win';
   }else if(value==2){
      resultShowBox.textContent='';
      resultShowBox.textContent='Loose';
   }
   if(playerScore===5 || computerScore===5){
      if(playerScore>computerScore){
         resultShowBox.textContent='';
         resultShowBox.textContent='YOU WON THE GAME\r\n';
         resultShowBox.textContent+='     press reset button';
         buttonCreation();
      }else if(computerScore>playerScore){
         resultShowBox.textContent='';
         resultShowBox.textContent="YOU LOST THE GAME \n       press reset button";
         buttonCreation();
      }
   }
}

function buttonCreation(){
   let reset=document.createElement('button');
   reset.textContent="reset";
   reset.classList.add('reset-button');
   finalMesage.appendChild(reset);
   let resetButton=document.querySelector('.reset-button');
   resetButton.addEventListener('click',()=>{
      playerScore=0;
      computerScore=0;
      humanScore.textContent=playerScore;
      botScore.textContent=computerScore;
      resultShowBox.textContent='Let\'s Play Round of 5 ';
      finalMesage.removeChild(reset);
   })
}