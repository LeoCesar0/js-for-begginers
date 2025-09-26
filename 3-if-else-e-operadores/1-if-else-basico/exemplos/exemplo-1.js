// 🚦 EXEMPLO 1: if-else Básico
// ============================

console.log("=== ESTRUTURA IF-ELSE BÁSICA ===\n");

const idade = 18;
const nome = "Ana";

// Exemplo básico de if-else
console.log("=== VERIFICAÇÃO DE IDADE ===");
if (idade >= 18) {
  console.log(`${nome} é maior de idade (${idade} anos)`);
} else {
  console.log(`${nome} é menor de idade (${idade} anos)`);
}

console.log("\n=== APENAS IF ===");
const nota = 8.5;

if (nota >= 7) {
  console.log("🎉 Parabéns! Você foi aprovado!");
}

if (nota < 7) {
  console.log("😞 Você foi reprovado. Estude mais!");
}

console.log("\n=== IF-ELSE IF-ELSE ===");
const temperatura = 25;

if (temperatura > 30) {
  console.log("🔥 Está muito quente!");
} else if (temperatura > 20) {
  console.log("😊 Temperatura agradável!");
} else if (temperatura > 10) {
  console.log("🧥 Está um pouco frio!");
} else {
  console.log("🥶 Está muito frio!");
}

console.log("\n=== EXEMPLO PRÁTICO - SISTEMA DE NOTAS ===");
const aluno = "João";
const notaFinal = 7.5;

console.log(`Aluno: ${aluno}`);
console.log(`Nota: ${notaFinal}`);

if (notaFinal >= 9) {
  console.log("Conceito: A - Excelente!");
} else if (notaFinal >= 7) {
  console.log("Conceito: B - Bom!");
} else if (notaFinal >= 5) {
  console.log("Conceito: C - Regular!");
} else {
  console.log("Conceito: D - Insuficiente!");
}

// Verificação de aprovação
if (notaFinal >= 7) {
  console.log("✅ Status: APROVADO");
} else {
  console.log("❌ Status: REPROVADO");
}
