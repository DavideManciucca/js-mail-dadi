const mailAutorizzate =['davidemanciucca@gmail.com','utente@gmail.com', 'altroutente@gmail.com','prova@gmail.com','utente3@gmail.com','utente5@gmail.com'];
const emailUser =prompt('inserisci la tua mail!')

let mailValida = false;

for(let i = 0; i< mailAutorizzate.length; i++){
  console.log(mailAutorizzate[i])
 if(mailAutorizzate[i]===emailUser){
    mailAutorizzate= true;
  }
  console.log('mailAutorizzate',mailAutorizzate)
}


let output;
if(mailValida){
 output= 'la mail è valida';
}else{
  output= 'non sei presente in lista';
}
document.getElementById('output').innerHTML =output;

