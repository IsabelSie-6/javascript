//* 34. (Verdadeiro ou Falso) 
// Em uma estrutura if...else if...else, 
// assim que uma condição é verdadeira, 
// o JavaScript executa o bloco correspondente e ignora todos os outros blocos 
// restantes daquela estrutura. 
//  (X) Verdadeiro  ( ) Falso 

let nota = 8
if (nota >= 9) {
    console.log("Excelente!")
} else if (nota >= 7) {
    console.log("Bom.")
} else {
    console.log("Reprovado!")
} 

//* RESPOSTA: Verdadeiro. No if quando a condição é verdadeira, ele executa somente ela e ignora os outros blocos.
