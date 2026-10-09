//* 2. Sobre os operadores de incremento, analise a afirmação:
// "O código const pontos = 10; pontos++; resultará em um erro de tipo (TypeError), 
// pois tentamos reatribuir um valor a uma constante."  
// (x) Verdadeiro  ( ) Falso 

const pontos = 10; 
pontos++; 

console.log(pontos);

// É uma afirmação verdadeira devido ao fato de que const é uma variável constante, ou seja, não pode ser atribuído outro valor sobre ela. 