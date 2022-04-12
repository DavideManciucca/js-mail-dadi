
const press = document.getElementById('press');

const player1 = Math.ceil(Math.random()*6);
const player2 = Math.ceil(Math.random()*6);

let message;
if(player1 > player2){
  message= "Ha vinto il player1 ";
}else if(player2 > player1){
  message= "Ha vinto il player2";
}else{
  message ='pareggio!'
}

console.log(player1);
console.log(player2);
console.log(message);
