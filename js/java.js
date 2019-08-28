/**
Código JS para Formulário HTML
Author: Argeu Ribeiro
*/

function Submit(){
    var nome;
    nome= alert ("E-mail Cadastrado com Sucesso!");
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