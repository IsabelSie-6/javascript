//* 26. (Verdadeiro ou Falso) É possível declarar a variável de controle do for 
// utilizando const, como em for (const i = 0; i < 5; i++).  
// ( ) Verdadeiro  (x) Falso 

for (const i = 0; i < 5; i++)
console.log(i)

//* RESPOSTA: Falso. Porque no for tenta mudar o valor de const com i++, mas não dá para muar o valor de const.