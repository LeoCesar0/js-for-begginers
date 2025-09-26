// ⬆️ EXEMPLO 1: Incremento e Decremento
// ====================================

console.log("=== INCREMENTO E DECREMENTO ===\n");

let contador = 5;

console.log("=== PRÉ vs PÓS INCREMENTO ===");
console.log(`Contador inicial: ${contador}`);

// Pré-incremento: incrementa ANTES de usar
console.log(`++contador: ${++contador}`); // contador vira 6, depois exibe 6
console.log(`Contador agora: ${contador}`);

// Pós-incremento: usa DEPOIS incrementa
console.log(`contador++: ${contador++}`); // exibe 6, depois contador vira 7
console.log(`Contador agora: ${contador}`);

console.log("\n=== OPERADORES COMPOSTOS ===");
let pontos = 10;

console.log(`Pontos iniciais: ${pontos}`);
pontos += 5; // pontos = pontos + 5
console.log(`Após ganhar 5 pontos: ${pontos}`);

pontos -= 3; // pontos = pontos - 3
console.log(`Após perder 3 pontos: ${pontos}`);

pontos *= 2; // pontos = pontos * 2
console.log(`Após dobrar pontos: ${pontos}`);

pontos /= 4; // pontos = pontos / 4
console.log(`Após dividir por 4: ${pontos}`);

console.log("\n=== EXEMPLO PRÁTICO - CARRINHO DE COMPRAS ===");
let itensCarrinho = 0;
let totalGasto = 0;

console.log("🛒 Simulando compras...");
console.log(`Carrinho inicial: ${itensCarrinho} itens, R$ ${totalGasto}`);

// Adicionando itens
itensCarrinho++;
totalGasto += 25.9;
console.log(
  `Adicionou produto 1: ${itensCarrinho} itens, R$ ${totalGasto.toFixed(2)}`
);

itensCarrinho++;
totalGasto += 15.5;
console.log(
  `Adicionou produto 2: ${itensCarrinho} itens, R$ ${totalGasto.toFixed(2)}`
);

// Removendo um item
itensCarrinho--;
totalGasto -= 15.5;
console.log(
  `Removeu produto: ${itensCarrinho} itens, R$ ${totalGasto.toFixed(2)}`
);
