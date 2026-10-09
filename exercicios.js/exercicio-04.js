//* 4. No código abaixo (Switch Case), 
// O que será impresso no console? 
// let medalha = "Prata"; 
// switch (medalha) { case "Ouro": console.log("1º Lugar"); 
// case "Prata": console.log("2º Lugar"); 
// case "Bronze": console.log("3º Lugar");
//  default: console.log("Participante"); } 
// A) 2º Lugar  B) 2º Lugar, 3º Lugar e Participante.  C) Prata  D) Participante 

let medalha = "Prata"; 
switch (medalha) { case "Ouro": console.log("1º Lugar"); 
case "Prata": console.log("2º Lugar"); 
case "Bronze": console.log("3º Lugar");
default: console.log("Participante"); } 

// A resposta é B), porque o aluno esqueceu de colocar o break,
//  um comando para parar a execução naquela condiçao que é verdadeira.
//  Como o aluno não colocou o break, o código continuou executando. //*