// ⚖️ EXEMPLO 1: Comparações Numéricas
// ===================================

console.log("=== OPERADORES DE COMPARAÇÃO ===\n");

const idade = 18;
const nota = 8.5;
const preco = 25;

console.log("=== COMPARAÇÕES BÁSICAS ===");
console.log(`idade (${idade}) >= 18: ${idade >= 18}`);
console.log(`nota (${nota}) > 7: ${nota > 7}`);
console.log(`preco (${preco}) < 30: ${preco < 30}`);
console.log(`preco (${preco}) === 25: ${preco === 25}`);

console.log("\n=== DIFERENÇA ENTRE == E === ===");
const numero = 10;
const numeroTexto = "10";

console.log(`numero: ${numero} (tipo: ${typeof numero})`);
console.log(`numeroTexto: ${numeroTexto} (tipo: ${typeof numeroTexto})`);
console.log(`numero == numeroTexto: ${numero == numeroTexto}`); // true (converte)
console.log(`numero === numeroTexto: ${numero === numeroTexto}`); // false (não converte)

console.log("\n=== EXEMPLO PRÁTICO - SISTEMA DE NOTAS ===");

function avaliarNota(nota) {
  if (nota >= 9) {
    return "Excelente";
  } else if (nota >= 7) {
    return "Bom";
  } else if (nota >= 5) {
    return "Regular";
  } else {
    return "Insuficiente";
  }
}

const notas = [9.5, 7.8, 6.2, 4.5, 10];

console.log("AVALIAÇÃO DE NOTAS:");
notas.forEach((nota) => {
  const conceito = avaliarNota(nota);
  console.log(`Nota ${nota}: ${conceito}`);
});

console.log("\n=== VALIDAÇÃO DE IDADE ===");

function verificarIdade(idade) {
  if (idade < 0) {
    return "Idade inválida";
  } else if (idade < 12) {
    return "Criança";
  } else if (idade < 18) {
    return "Adolescente";
  } else if (idade < 65) {
    return "Adulto";
  } else {
    return "Idoso";
  }
}

const idades = [5, 15, 25, 70, -5];
idades.forEach((idade) => {
  console.log(`${idade} anos: ${verificarIdade(idade)}`);
});
