// 🪆 EXEMPLO 1: if-else Aninhado Simples
// ======================================

console.log("=== IF-ELSE ANINHADO SIMPLES ===\n");

const idade = 25;
const temCarteira = true;
const temCarro = false;
const temGrana = true;

console.log("=== VERIFICAÇÃO PARA DIRIGIR ===");
console.log(
  `Idade: ${idade}, Carteira: ${temCarteira}, Carro: ${temCarro}, Grana: ${temGrana}`
);

// Primeiro nível: pode dirigir?
if (idade >= 18) {
  console.log("✅ Maior de idade");

  // Segundo nível: tem carteira?
  if (temCarteira) {
    console.log("✅ Tem carteira de motorista");

    // Terceiro nível: tem carro?
    if (temCarro) {
      console.log("✅ Tem carro próprio - pode dirigir!");
    } else {
      console.log("❌ Não tem carro próprio");

      // Quarto nível: tem dinheiro para alugar?
      if (temGrana) {
        console.log("💰 Pode alugar um carro!");
      } else {
        console.log("💸 Sem dinheiro para alugar");
      }
    }
  } else {
    console.log("❌ Não tem carteira - não pode dirigir");
  }
} else {
  console.log("❌ Menor de idade - não pode dirigir");
}
