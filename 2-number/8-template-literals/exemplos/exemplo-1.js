// 🧩 EXEMPLO 1: Template Literals com Números
// ===========================================

console.log("=== TEMPLATE LITERALS COM NÚMEROS ===\n");

const produto = "Notebook";
const preco = 2499.99;
const quantidade = 3;
const desconto = 0.1; // 10%

// Cálculos usando template literals
const subtotal = preco * quantidade;
const valorDesconto = subtotal * desconto;
const total = subtotal - valorDesconto;

console.log("=== RELATÓRIO DE VENDAS ===");
console.log(`Produto: ${produto}`);
console.log(`Preço unitário: R$ ${preco.toFixed(2)}`);
console.log(`Quantidade: ${quantidade} unidades`);
console.log(`Subtotal: R$ ${subtotal.toFixed(2)}`);
console.log(
  `Desconto (${(desconto * 100).toFixed(0)}%): R$ ${valorDesconto.toFixed(2)}`
);
console.log(`TOTAL: R$ ${total.toFixed(2)}`);

console.log("\n=== CÁLCULOS DIRETOS NO TEMPLATE ===");
const a = 15;
const b = 25;
const c = 10;

console.log(`Números: ${a}, ${b}, ${c}`);
console.log(`Soma: ${a} + ${b} + ${c} = ${a + b + c}`);
console.log(`Média: (${a} + ${b} + ${c}) / 3 = ${(a + b + c) / 3}`);
console.log(`Maior: ${Math.max(a, b, c)}`);
console.log(`Menor: ${Math.min(a, b, c)}`);

console.log("\n=== FORMATAÇÃO AVANÇADA ===");
const vendedor = "João";
const meta = 10000;
const vendido = 12500;
const percentual = (vendido / meta) * 100;

console.log(`📊 DESEMPENHO DE ${vendedor.toUpperCase()}`);
console.log(`Meta: R$ ${meta.toFixed(2)}`);
console.log(`Vendido: R$ ${vendido.toFixed(2)}`);
console.log(`Percentual da meta: ${percentual.toFixed(1)}%`);
console.log(
  `Status: ${percentual >= 100 ? "✅ META ATINGIDA!" : "❌ Meta não atingida"}`
);

console.log("\n=== DADOS ALEATÓRIOS ===");
for (let i = 1; i <= 5; i++) {
  const numeroAleatorio = Math.random() * 100;
  console.log(`Sorteio ${i}: ${numeroAleatorio.toFixed(2)}`);
}
