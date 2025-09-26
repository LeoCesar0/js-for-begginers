// 🧩 EXEMPLO 3: Ternário Complexo
// ===============================

console.log("=== TERNÁRIO COMPLEXO ===\n");

const usuario = {
  nome: "Ana",
  ativo: true,
  tipo: "premium",
  saldo: 150,
};

// Ternários aninhados organizados
const statusConta = !usuario.ativo
  ? "❌ Inativa"
  : usuario.tipo === "premium"
  ? "🌟 Premium Ativa"
  : usuario.saldo > 0
  ? "🟢 Básica Ativa"
  : "🟡 Ativa (sem saldo)";

const limiteDiario =
  usuario.tipo === "premium" ? 5000 : usuario.tipo === "gold" ? 2000 : 500;

const taxaTransferencia =
  usuario.tipo === "premium" && usuario.saldo > 1000
    ? 0 // isento
    : usuario.tipo === "premium"
    ? 2 // R$ 2
    : usuario.tipo === "gold"
    ? 5 // R$ 5
    : 10; // R$ 10

console.log(`Status da conta: ${statusConta}`);
console.log(`Limite diário: R$ ${limiteDiario}`);
console.log(`Taxa de transferência: R$ ${taxaTransferencia}`);

console.log("\n=== EXEMPLOS PRÁTICOS DE TERNÁRIO ===");

// Sistema de classificação por idade
const pessoas = [
  { nome: "João", idade: 10 },
  { nome: "Maria", idade: 16 },
  { nome: "Pedro", idade: 25 },
  { nome: "Ana", idade: 70 },
];

pessoas.forEach((pessoa) => {
  const categoria =
    pessoa.idade < 12
      ? "Criança"
      : pessoa.idade < 18
      ? "Adolescente"
      : pessoa.idade < 60
      ? "Adulto"
      : "Idoso";

  const permissoes =
    pessoa.idade >= 18
      ? pessoa.idade >= 65
        ? "Todos os direitos + Benefícios"
        : "Todos os direitos"
      : pessoa.idade >= 16
      ? "Direitos limitados"
      : "Sem direitos";

  console.log(`${pessoa.nome} (${pessoa.idade}): ${categoria} - ${permissoes}`);
});

console.log("\n=== TERNÁRIO PARA PRICING ===");

const produtos = [
  { nome: "Básico", usuarios: 50, premium: false },
  { nome: "Pro", usuarios: 200, premium: true },
  { nome: "Enterprise", usuarios: 1000, premium: true },
];

produtos.forEach((produto) => {
  // Ternário complexo para calcular preço
  const preco = produto.premium
    ? produto.usuarios > 500
      ? produto.usuarios * 10 * 0.8 // 20% desconto para enterprise
      : produto.usuarios * 10
    : produto.usuarios > 100
    ? produto.usuarios * 5 * 0.9 // 10% desconto para muitos usuários
    : produto.usuarios * 5;

  const suporte =
    produto.premium && produto.usuarios > 500
      ? "24/7 Premium"
      : produto.premium
      ? "Business Hours"
      : "Community";

  console.log(`${produto.nome}: R$ ${preco.toFixed(2)} - Suporte: ${suporte}`);
});
