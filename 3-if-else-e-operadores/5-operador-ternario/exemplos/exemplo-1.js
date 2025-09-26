// ❓ EXEMPLO 1: Operador Ternário
// ===============================

console.log("=== OPERADOR TERNÁRIO BÁSICO ===\n");

const idade = 20;
const nome = "Carlos";
const nota = 8.5;
const saldo = 150;

console.log("=== COMPARAÇÃO IF-ELSE vs TERNÁRIO ===\n");

// Método tradicional com if-else
let categoriaIf;
if (idade >= 18) {
  categoriaIf = "Adulto";
} else {
  categoriaIf = "Menor de idade";
}
console.log(`IF-ELSE: ${nome} é ${categoriaIf}`);

// Método com operador ternário
const categoriaTernario = idade >= 18 ? "Adulto" : "Menor de idade";
console.log(`TERNÁRIO: ${nome} é ${categoriaTernario}`);

console.log("\n=== USANDO EM TEMPLATE LITERALS ===\n");

// Integrando com strings (conceitos anteriores)
console.log(
  `${nome} (${idade} anos) é ${idade >= 18 ? "maior" : "menor"} de idade`
);
console.log(
  `Nota: ${nota} - Status: ${nota >= 7 ? "✅ Aprovado" : "❌ Reprovado"}`
);
console.log(
  `Saldo: R$ ${saldo} - ${saldo > 0 ? "💰 Positivo" : "💸 Negativo"}`
);

console.log("\n=== TERNÁRIO ANINHADO ===\n");

// Múltiplas condições (cuidado com a legibilidade)
const conceito = nota >= 9 ? "A" : nota >= 7 ? "B" : nota >= 5 ? "C" : "D";
console.log(`Conceito da nota ${nota}: ${conceito}`);

// Mesma lógica com if-else para comparação
let conceitoIf;
if (nota >= 9) {
  conceitoIf = "A";
} else if (nota >= 7) {
  conceitoIf = "B";
} else if (nota >= 5) {
  conceitoIf = "C";
} else {
  conceitoIf = "D";
}
console.log(`Conceito (if-else): ${conceitoIf}`);

console.log("\n=== TERNÁRIO COM NÚMEROS ===\n");

const preco = 150;
const temDesconto = true;
const valorFinal = temDesconto ? preco * 0.9 : preco; // 10% desconto
const economia = temDesconto ? preco * 0.1 : 0;

console.log(`Preço original: R$ ${preco.toFixed(2)}`);
console.log(`Desconto aplicado: ${temDesconto ? "Sim" : "Não"}`);
console.log(`Valor final: R$ ${valorFinal.toFixed(2)}`);
console.log(`Economia: R$ ${economia.toFixed(2)}`);

console.log("\n=== EXEMPLO PRÁTICO - STATUS DO USUÁRIO ===\n");

const usuarios = [
  { nome: "Ana", idade: 25, ativo: true, premium: false },
  { nome: "Bruno", idade: 17, ativo: false, premium: true },
  { nome: "Carla", idade: 30, ativo: true, premium: true },
];

console.log("👥 STATUS DOS USUÁRIOS:");
console.log("======================");

for (let i = 0; i < usuarios.length; i++) {
  const user = usuarios[i];

  // Usando operador ternário para definir status
  const faixaEtaria = user.idade >= 18 ? "Adulto" : "Menor";
  const statusConta = user.ativo ? "Ativa" : "Inativa";
  const tipoConta = user.premium ? "Premium" : "Gratuita";
  const podeComprar = user.idade >= 18 && user.ativo ? "Sim" : "Não";

  console.log(`\n${user.nome}:`);
  console.log(`  Idade: ${user.idade} (${faixaEtaria})`);
  console.log(`  Conta: ${statusConta}`);
  console.log(`  Tipo: ${tipoConta}`);
  console.log(`  Pode comprar: ${podeComprar}`);

  // Ternário complexo com operadores lógicos
  const acesso =
    user.ativo && user.idade >= 18
      ? user.premium
        ? "🥇 Acesso Total"
        : "🥈 Acesso Básico"
      : "❌ Acesso Negado";

  console.log(`  Nível de acesso: ${acesso}`);
}
