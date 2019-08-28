/**
Código JS para Formulário HTML
Author: Argeu Ribeiro
*/

function Submit(){
    var nome="O email usuario@future4.com.br foi enviado!";
    alert (nome);
}

function mySubmit(e) { 
    e.preventDefault(); 
    try {
     someBug();
    } catch (e) {
     throw new Error(e.message);
    }
    return false;
  }

