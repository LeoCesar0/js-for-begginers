// ✅ EXEMPLO 1: Verificações de Números
// ====================================

console.log("=== VERIFICAÇÕES DE NÚMEROS ===\n");

const valores = [42, "42", "abc", NaN, 3.14, null, undefined, Infinity];

console.log("Testando diferentes valores:\n");

valores.forEach((valor) => {
  console.log(`Valor: ${valor} (tipo: ${typeof valor})`);
  console.log(`  isNaN(${valor}): ${isNaN(valor)}`);
  console.log(`  Number.isNaN(${valor}): ${Number.isNaN(valor)}`);
  console.log(`  Number.isInteger(${valor}): ${Number.isInteger(valor)}`);
  console.log(`  Number.isFinite(${valor}): ${Number.isFinite(valor)}`);
  console.log("---");
});

console.log("\n=== EXEMPLO PRÁTICO - VALIDAÇÃO ===");

function calcularMedia(nota1, nota2, nota3) {
  // Verificar se todas as notas são números válidos
  if (
    !Number.isFinite(nota1) ||
    !Number.isFinite(nota2) ||
    !Number.isFinite(nota3)
  ) {
    return "Erro: Uma ou mais notas são inválidas";
  }

  const media = (nota1 + nota2 + nota3) / 3;
  return media.toFixed(2);
}

console.log("Testando calculadora de média:");
console.log(`calcularMedia(8, 7, 9): ${calcularMedia(8, 7, 9)}`);
console.log(`calcularMedia(8, "abc", 9): ${calcularMedia(8, "abc", 9)}`);
console.log(`calcularMedia(8, 7, NaN): ${calcularMedia(8, 7, NaN)}`);
