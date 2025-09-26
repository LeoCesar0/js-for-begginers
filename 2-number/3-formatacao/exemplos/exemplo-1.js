// 🎨 EXEMPLO 1: Formatação de Números
// ===================================

console.log("=== FORMATAÇÃO DE NÚMEROS ===\n");

const preco = 19.9567;
const pi = 3.14159265359;
const salario = 2500;

console.log("=== USANDO toFixed() ===");
console.log(`Preço original: ${preco}`);
console.log(`Preço com 2 casas: R$ ${preco.toFixed(2)}`);
console.log(`Preço com 0 casas: R$ ${preco.toFixed(0)}`);

console.log(`\nPi original: ${pi}`);
console.log(`Pi com 2 casas: ${pi.toFixed(2)}`);
console.log(`Pi com 4 casas: ${pi.toFixed(4)}`);

console.log("\n=== USANDO toPrecision() ===");
console.log(`Pi original: ${pi}`);
console.log(`Pi com 3 dígitos: ${pi.toPrecision(3)}`);
console.log(`Pi com 5 dígitos: ${pi.toPrecision(5)}`);

console.log("\n=== EXEMPLO PRÁTICO - SISTEMA DE VENDAS ===");
const produtoA = 15.678;
const produtoB = 8.9;
const produtoC = 100;

const total = produtoA + produtoB + produtoC;

console.log("RELATÓRIO DE VENDAS");
console.log("===================");
console.log(`Produto A: R$ ${produtoA.toFixed(2)}`);
console.log(`Produto B: R$ ${produtoB.toFixed(2)}`);
console.log(`Produto C: R$ ${produtoC.toFixed(2)}`);
console.log(`TOTAL: R$ ${total.toFixed(2)}`);
