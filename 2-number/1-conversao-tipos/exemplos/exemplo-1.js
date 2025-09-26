// 🔄 EXEMPLO 1: Conversões Básicas
// ================================

console.log("=== CONVERSÕES BÁSICAS ===\n");

// Convertendo strings simples
const idade = "25";
const altura = "1.75";
const peso = "70.5";

console.log("=== USANDO Number() ===");
console.log(`idade como string: "${idade}" (tipo: ${typeof idade})`);
console.log(
  `idade como number: ${Number(idade)} (tipo: ${typeof Number(idade)})`
);

console.log(`\naltura como string: "${altura}" (tipo: ${typeof altura})`);
console.log(
  `altura como number: ${Number(altura)} (tipo: ${typeof Number(altura)})`
);

console.log("\n=== USANDO parseInt() ===");
console.log(`parseInt("25"): ${parseInt("25")}`);
console.log(`parseInt("25.7"): ${parseInt("25.7")}`); // Remove a parte decimal
console.log(`parseInt("25anos"): ${parseInt("25anos")}`); // Para na primeira letra

console.log("\n=== USANDO parseFloat() ===");
console.log(`parseFloat("25.7"): ${parseFloat("25.7")}`);
console.log(`parseFloat("25.7kg"): ${parseFloat("25.7kg")}`); // Para na primeira letra
