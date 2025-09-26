// ⚖️ EXEMPLO 1: Comparações Estritas vs Conversão
// ===============================================

console.log("=== COMPARAÇÕES ESTRITAS vs CONVERSÃO ===\n");

const numero = 10;
const numeroTexto = "10";
const booleano = true;
const numeroBooleano = 1;

console.log("=== COMPARAÇÃO ESTRITA (===) ===");
console.log(`${numero} === ${numeroTexto}: ${numero === numeroTexto}`); // false
console.log(
  `${numero} === ${Number(numeroTexto)}: ${numero === Number(numeroTexto)}`
); // true
console.log(
  `${booleano} === ${numeroBooleano}: ${booleano === numeroBooleano}`
); // false

console.log("\n=== COMPARAÇÃO COM CONVERSÃO (==) ===");
console.log(`${numero} == ${numeroTexto}: ${numero == numeroTexto}`); // true
console.log(`${booleano} == ${numeroBooleano}: ${booleano == numeroBooleano}`); // true

console.log("\n=== DICA IMPORTANTE ===");
console.log("Sempre prefira === e !== para evitar conversões inesperadas!");
