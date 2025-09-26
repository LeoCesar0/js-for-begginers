// ➕ EXEMPLO 1: Operações Básicas
// ===============================

console.log("=== OPERAÇÕES MATEMÁTICAS BÁSICAS ===\n");

const a = 10;
const b = 3;

console.log(`Números: a = ${a}, b = ${b}\n`);

// Operações básicas
console.log("=== OPERAÇÕES BÁSICAS ===");
console.log(`${a} + ${b} = ${a + b}`); // Adição
console.log(`${a} - ${b} = ${a - b}`); // Subtração
console.log(`${a} * ${b} = ${a * b}`); // Multiplicação
console.log(`${a} / ${b} = ${a / b}`); // Divisão

console.log("\n=== OPERAÇÕES ESPECIAIS ===");
console.log(`${a} % ${b} = ${a % b}`); // Resto (módulo)
console.log(`${a} ** ${b} = ${a ** b}`); // Potenciação

console.log("\n=== EXEMPLO PRÁTICO ===");
const preco = 25.5;
const quantidade = 4;
const desconto = 0.1; // 10%

const subtotal = preco * quantidade;
const valorDesconto = subtotal * desconto;
const total = subtotal - valorDesconto;

console.log(`Preço unitário: R$ ${preco}`);
console.log(`Quantidade: ${quantidade}`);
console.log(`Subtotal: R$ ${subtotal}`);
console.log(`Desconto (10%): R$ ${valorDesconto}`);
console.log(`Total: R$ ${total}`);
