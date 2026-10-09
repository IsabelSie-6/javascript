//* 1. Analise o bloco de código abaixo e determine o valor final da variável 
// resultado: let x = 10; x += 5;  let y = "15"; 
// let resultado = (x === y); 
// A) true 
// B) false 
// C) 1515 D) undefined 


let x = 10; 
x += 5; 
let y = "15";
let resultado = (x === y);

console.log(resultado)

// O resultado deu B) false porque os tipos de dados são diferentes, no let x o tipo de dado é number, e no let y o dado está em string, ou seja são incompativeis, por isso são falsos. :D