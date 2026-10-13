//* 47. No switch...case, qual a função do comando break?  
// A) Reiniciar o computador.  
// B) Sair da estrutura switch após encontrar o caso correto.  
// C) Pular para o próximo if. 
//  D) Somar valores. 
//* RESPOSTA: B) Sair da estrutura switch após encontrar o caso correto.

const classe = "Mago"; 

switch (classe) { 
    case "Guerreiro": 
    console.log("Classe: Guerreiro");
    console.log("O guerreiro é um combatente corpo a corpo, especializado em força e resistência. ");
    console.log(" Habilidades: Ataque poderoso, Defesa sólida, Fúria de batalha. ");
    break; 
    case "Mago": 
    console.log("Classe: Mago");
    console.log("O mago é um conjurador de feitiços, especializado em magia ofensiva e suporte.");
    console.log(" Habilidades: Magia de fogo, Magia de Gelo, Magia de cura.");
    break; 
    case "Arqueiro": 
    console.log("Classe: Arqueiro");
    console.log("O arqueiro é um atirador de longa distância, especializado em precisão e agilidade.");
    console.log("Habilidades: Precisão, Agilidade, Tiro de precisão"); 
    break;
    case "Ladino": 
    console.log("Classe: Ladino");
    console.log("O ladino é um especialista em furtividade e trapas, ultilizado para sabotagem e espionagem.");
    console.log("Habilidades: Furtividade, Trapas, Assasinio");
    break; 
default: 
console.log(" Classe desconhecida. Por favor, escolha entre gierreiro, mago, arqueiro e ladino.")
} 

//* RESPOSTA: B) Sair da estrutura switch após encontrar o caso correto.